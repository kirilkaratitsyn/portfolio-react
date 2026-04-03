import { type MouseEvent, type ReactNode } from 'react';
import {
  type LinkProps,
  useHref,
  useLocation,
  useNavigate,
  useResolvedPath,
} from 'react-router-dom';
import { triggerRouteLoader } from '../utils/routeLoader';

type TransitionLinkProps = LinkProps & {
  children: ReactNode;
};

const TransitionLink = ({
  to,
  onPointerDown,
  onClick,
  children,
  ...props
}: TransitionLinkProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const href = useHref(to);
  const resolvedPath = useResolvedPath(to);

  const shouldTriggerLoader = () =>
    resolvedPath.pathname !== location.pathname;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    if (shouldTriggerLoader()) {
      triggerRouteLoader();
    }

    navigate(to);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default TransitionLink;

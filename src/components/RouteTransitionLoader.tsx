import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { hideRouteLoader, routeLoaderStartEvent } from '../utils/routeLoader';

const ROUTE_LOADER_MIN_VISIBLE = 720;
const ROUTE_LOADER_FALLBACK_HIDE = 1200;

const RouteTransitionLoader = () => {
  const location = useLocation();
  const previousPathnameRef = useRef(location.pathname);

  useEffect(() => {
    const handleRouteLoaderStart = () => {
      hideRouteLoader(ROUTE_LOADER_FALLBACK_HIDE);
    };

    window.addEventListener(routeLoaderStartEvent, handleRouteLoaderStart);

    return () => {
      window.removeEventListener(routeLoaderStartEvent, handleRouteLoaderStart);
    };
  }, []);

  useEffect(() => {
    if (previousPathnameRef.current !== location.pathname) {
      previousPathnameRef.current = location.pathname;
      hideRouteLoader(ROUTE_LOADER_MIN_VISIBLE);
    }
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      hideRouteLoader();
    }
  }, []);

  return (
    <div aria-hidden="true" className="route-loader">
      <div className="route-loader__track">
        <span className="route-loader__bar" />
      </div>
    </div>
  );
};

export default RouteTransitionLoader;

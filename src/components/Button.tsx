import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  size?: 'compact' | 'small' | 'medium' | 'large' | 'extraLarge';
  children: ReactNode;
  style?: 'light' | 'black';
}

const Button = ({
  size = 'medium',
  children,
  style = 'light',
  className = '',
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    compact: 'ui-button--compact',
    small: 'mt-10 px-12 py-3 text-sm',
    medium: 'mt-10 px-12 py-3 text-base',
    large: 'mt-10 px-12 py-3 text-lg',
    extraLarge: 'mt-10 text-[20px] md:text-[24px] px-[63px] md:px-[73px] py-[9px]',
  };

  return (
    <button
      className={`ui-button ui-button--${style} ${sizeClasses[size]} ${className}`.trim()}
      data-cal-link="kiril-karatitsyn/free-consultation-call"
      data-cal-namespace="free-consultation-call"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      {...props}
    >
      <span className="ui-button__label">{children}</span>
    </button>
  );
};

export default Button;

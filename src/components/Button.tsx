  import React from 'react';

  interface ButtonProps {
    size?: 'small' | 'medium' | 'large' | 'extraLarge';
    onClick?: () => void;
    children: React.ReactNode;
    style?: 'light' | 'black';
  }

  const Button: React.FC<ButtonProps> = ({ size = 'medium', onClick, children, style = 'light' }) => {
    const sizeClasses = {
      small: 'px-12 py-3 text-sm',
      medium: 'px-12 py-3 text-base',
      large: 'px-12 py-3 text-lg',
      extraLarge: 'text-[20px] md:text-[24px] px-[63px] md:px-[73px] py-[9px] font-regular',
    };

    const styleClasses = {
      light: 'bg-white text-black light-shadow',
      black: 'bg-black text-white black-shadow hover:bg-opacity-80 transition-all duration-300',
    };

    return (
      <button 
        className={`transition-all duration-500 whitespace-nowrap  font-medium  mt-10 ${styleClasses[style]} ${sizeClasses[size]} rounded-full`} 
        onClick={onClick}
        data-cal-link="kiril-karatitsyn/free-consultation-call" 
        data-cal-namespace="free-consultation-call" 
        data-cal-config='{"layout":"month_view","theme":"dark"}' 
          id="Button"
      >
        {children}
      </button>
    );
  };

  export default Button;

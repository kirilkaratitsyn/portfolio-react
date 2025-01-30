import React from 'react';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ size = 'medium', onClick, children }) => {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  return (
    <button 
      className={`light-shadow text-black bg-white ${sizeClasses[size]} rounded-full`} 
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

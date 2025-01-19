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
      className={`light-shadow text-black bg-white rounded-full ${sizeClasses[size]} mt-14 flex justify-center md:flex-row flex-col items-center gap-5 text-sm whitespace-nowrap`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

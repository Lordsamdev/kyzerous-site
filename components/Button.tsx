import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, to, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900";
  
  const variants = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800 border border-transparent",
    secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-transparent",
    outline: "bg-transparent text-neutral-900 border border-neutral-300 hover:border-neutral-900"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
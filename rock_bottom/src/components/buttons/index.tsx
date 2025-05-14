'use client';

import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx'; // optional, but recommended for conditional classes
import { IoIosPlay } from "react-icons/io";


type ButtonProps = {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
  className?: string; // for additional custom styling
  showVideoIcon?: boolean;
  videoIconPosition?: 'left' | 'right';
};

const Button: React.FC<ButtonProps> = ({
  label,
  type = 'button',
  variant = 'primary',
  disabled = false,
  onClick,
  className,
   showVideoIcon = false,
  videoIconPosition = 'left'
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        styles.button,
        styles[`button--${variant}`],
        disabled && styles['button--disabled'],
        className
      )}
    >
         {showVideoIcon && videoIconPosition === 'left' && <IoIosPlay />}
      <span>{label}</span>
      {showVideoIcon && videoIconPosition === 'right' && <IoIosPlay />}
    
    </button>
  );
};

export default Button;

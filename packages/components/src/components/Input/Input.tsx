import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { inputStyles } from './Input.css';
import type { AccentColor } from '../../constants/colors';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'outline' | 'filled' | 'unstyled';
  error?: boolean;
  fullWidth?: boolean;
  /** Override the theme accent color for this specific input */
  color?: AccentColor;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'outline',
      error = false,
      fullWidth = false,
      type = 'text',
      disabled,
      color,
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        className={clsx(
          inputStyles({
            variant,
            error,
            fullWidth,
            disabled: disabled ?? false,
          }),
          className
        )}
        disabled={disabled}
        data-accent-color={color}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
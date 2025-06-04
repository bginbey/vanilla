import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { inputStyles } from './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'outline' | 'filled' | 'unstyled';
  error?: boolean;
  fullWidth?: boolean;
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
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
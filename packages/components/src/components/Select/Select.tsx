import { forwardRef, SelectHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { selectStyles, iconStyles } from './Select.css';
import type { AccentColor } from '../../constants/colors';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: 'outline' | 'filled' | 'unstyled';
  error?: boolean;
  fullWidth?: boolean;
  /** Override the theme accent color for this specific select */
  color?: AccentColor;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      variant = 'outline',
      error = false,
      fullWidth = false,
      disabled,
      children,
      color,
      ...props
    },
    ref
  ) => {
    return (
      <div className={clsx(selectStyles.wrapper({ fullWidth }))} data-accent-color={color}>
        <select
          ref={ref}
          className={clsx(
            selectStyles.select({
              variant,
              error,
              fullWidth,
              disabled: disabled ?? false,
            }),
            className
          )}
          disabled={disabled}
          {...props}
        >
          {children}
        </select>
        <svg
          className={clsx(iconStyles({ disabled: disabled ?? false }))}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
);

Select.displayName = 'Select';
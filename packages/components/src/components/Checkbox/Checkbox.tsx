import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { checkboxStyles, inputStyles, iconStyles, labelStyles } from './Checkbox.css';
import type { AccentColor } from '../../constants/colors';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  variant?: 'default' | 'rounded';
  error?: boolean;
  label?: string;
  indeterminate?: boolean;
  /** Override the theme accent color for this specific checkbox */
  color?: AccentColor;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      variant = 'default',
      error = false,
      label,
      indeterminate = false,
      disabled,
      id,
      color,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || (label ? `checkbox-${Math.random().toString(36).substr(2, 9)}` : undefined);

    const checkbox = (
      <div className={clsx(checkboxStyles({ variant }))} data-accent-color={color}>
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className={clsx(inputStyles, className)}
          disabled={disabled}
          aria-invalid={error}
          {...props}
        />
        <div
          className={clsx(
            iconStyles({
              variant,
              error,
              disabled: disabled ?? false,
            })
          )}
          aria-hidden="true"
        >
          {indeterminate ? (
            <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
              <rect width="10" height="2" fill="currentColor" />
            </svg>
          ) : (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    );

    if (label) {
      return (
        <label
          htmlFor={checkboxId}
          className={clsx(labelStyles({ disabled: disabled ?? false }))}
        >
          {checkbox}
          <span>{label}</span>
        </label>
      );
    }

    return checkbox;
  }
);

Checkbox.displayName = 'Checkbox';
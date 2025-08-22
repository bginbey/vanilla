import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { radioStyles, inputStyles, indicatorStyles, labelStyles } from './Radio.css';
import type { AccentColor } from '../../constants/colors';

// Export types for reuse
export type RadioSize = 'sm' | 'md' | 'lg';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Size of the radio button */
  size?: RadioSize;
  /** Whether the radio has an error state */
  error?: boolean;
  /** Label text for the radio */
  label?: string;
  /** Override the theme accent color for this specific radio */
  color?: AccentColor;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      size = 'md',
      error = false,
      label,
      disabled,
      id,
      color,
      style,
      ...props
    },
    ref
  ) => {
    const radioId = id || (label ? `radio-${Math.random().toString(36).substr(2, 9)}` : undefined);

    const radio = (
      <div className={clsx(radioStyles({ size }))} data-accent-color={color} style={style}>
        <input
          ref={ref}
          type="radio"
          id={radioId}
          className={clsx(inputStyles, className)}
          disabled={disabled}
          aria-invalid={error}
          {...props}
        />
        <div
          className={clsx(
            indicatorStyles({
              size,
              error,
              disabled: disabled ?? false,
            })
          )}
          aria-hidden="true"
        />
      </div>
    );

    if (label) {
      return (
        <label
          htmlFor={radioId}
          className={clsx(labelStyles({ disabled: disabled ?? false }))}
        >
          {radio}
          <span>{label}</span>
        </label>
      );
    }

    return radio;
  }
);

Radio.displayName = 'Radio';
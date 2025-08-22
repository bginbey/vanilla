import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { switchStyles, inputStyles, trackStyles, thumbStyles, labelStyles } from './Switch.css';
import type { AccentColor } from '../../constants/colors';

// Export types for reuse
export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Size of the switch */
  size?: SwitchSize;
  /** Whether the switch has an error state */
  error?: boolean;
  /** Label text for the switch */
  label?: string;
  /** Override the theme accent color for this specific switch */
  color?: AccentColor;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
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
    const switchId = id || (label ? `switch-${Math.random().toString(36).substr(2, 9)}` : undefined);

    const switchElement = (
      <div className={clsx(switchStyles({ size }))} data-accent-color={color} style={style}>
        <input
          ref={ref}
          type="checkbox"
          id={switchId}
          className={clsx(inputStyles, className)}
          disabled={disabled}
          aria-invalid={error}
          role="switch"
          {...props}
        />
        <div
          className={clsx(
            trackStyles({
              size,
              error,
              disabled: disabled ?? false,
            })
          )}
          aria-hidden="true"
        >
          <div className={clsx(thumbStyles({ size }))} />
        </div>
      </div>
    );

    if (label) {
      return (
        <label
          htmlFor={switchId}
          className={clsx(labelStyles({ disabled: disabled ?? false }))}
        >
          {switchElement}
          <span>{label}</span>
        </label>
      );
    }

    return switchElement;
  }
);

Switch.displayName = 'Switch';
import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { radioStyles, inputStyles, indicatorStyles, labelStyles } from './Radio.css';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  error?: boolean;
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      error = false,
      label,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const radioId = id || (label ? `radio-${Math.random().toString(36).substr(2, 9)}` : undefined);

    const radio = (
      <div className={radioStyles}>
        <input
          ref={ref}
          type="radio"
          id={radioId}
          className={clsx(inputStyles, className)}
          disabled={disabled}
          {...props}
        />
        <div
          className={clsx(
            indicatorStyles({
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
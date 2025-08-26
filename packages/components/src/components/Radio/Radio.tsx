import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { radioStyles, inputStyles, indicatorStyles, labelStyles } from './Radio.css';
import type { AccentColor } from '../../constants/colors';

/**
 * Available radio button sizes
 */
export type RadioSize = 
  /** Small - compact size for dense UIs */
  | 'sm'
  /** Medium - default size for most use cases */
  | 'md'
  /** Large - increased touch target for mobile */
  | 'lg';

/**
 * Props for the Radio component
 */
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * Size of the radio button
   * @default 'md'
   */
  size?: RadioSize;
  
  /**
   * Whether the radio has an error state
   * @default false
   * @remarks Shows red styling to indicate validation errors
   */
  error?: boolean;
  
  /**
   * Label text to display next to the radio button
   * @remarks When provided, wraps the radio in a label element for better accessibility
   */
  label?: string;
  
  /**
   * Override the theme accent color for selected state
   * @default Uses theme accent color
   * @see {@link AccentColor} for available colors
   */
  color?: AccentColor;
}

/**
 * Radio - Single choice selection control
 * 
 * @description
 * A radio button for selecting a single option from a group of mutually
 * exclusive choices. Radio buttons should always be used in groups with
 * the same name attribute to ensure only one can be selected at a time.
 * 
 * @example
 * ```tsx
 * // Basic radio group
 * <div role="radiogroup" aria-label="Payment method">
 *   <Radio
 *     name="payment"
 *     value="card"
 *     checked={payment === 'card'}
 *     onChange={() => setPayment('card')}
 *     label="Credit Card"
 *   />
 *   <Radio
 *     name="payment"
 *     value="paypal"
 *     checked={payment === 'paypal'}
 *     onChange={() => setPayment('paypal')}
 *     label="PayPal"
 *   />
 * </div>
 * ```
 * 
 * @example
 * ```tsx
 * // Sized radio buttons
 * <Radio
 *   size="lg"
 *   name="size"
 *   value="large"
 *   checked={selectedSize === 'large'}
 *   onChange={handleSizeChange}
 *   label="Large (recommended for touch screens)"
 * />
 * ```
 * 
 * @example
 * ```tsx
 * // Themed radio with custom color
 * <Radio
 *   color="purple"
 *   name="theme"
 *   value="dark"
 *   checked={theme === 'dark'}
 *   onChange={handleThemeChange}
 *   label="Dark theme"
 * />
 * ```
 * 
 * @remarks
 * - Use radio buttons for mutually exclusive choices
 * - Always use the same name attribute for grouped radios
 * - Provide a radiogroup role on the container for accessibility
 * - Consider using Select for more than 5 options
 * - Use Checkbox for non-exclusive multiple choices
 * 
 * @see {@link Checkbox} For multiple non-exclusive choices
 * @see {@link Select} For many options in limited space
 * @see {@link FormField} For radio with error messages
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/radio/} ARIA Radio Group Pattern
 */
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
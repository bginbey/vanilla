import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { checkboxStyles, inputStyles, iconStyles, labelStyles } from './Checkbox.css';
import type { AccentColor } from '../../constants/colors';

/**
 * Available checkbox style variants
 */
export type CheckboxVariant = 
  /** Square checkbox with sharp corners */
  | 'default'
  /** Checkbox with rounded corners */
  | 'rounded';

/**
 * Available checkbox sizes
 */
export type CheckboxSize = 
  /** Small - compact size for dense UIs */
  | 'sm'
  /** Medium - default size for most use cases */
  | 'md'
  /** Large - increased touch target for mobile */
  | 'lg';

/**
 * Props for the Checkbox component
 */
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * Visual style variant of the checkbox
   * @default 'default'
   */
  variant?: CheckboxVariant;
  
  /**
   * Size of the checkbox
   * @default 'md'
   */
  size?: CheckboxSize;
  
  /**
   * Whether the checkbox has an error state
   * @default false
   * @remarks Shows red styling to indicate validation errors
   */
  error?: boolean;
  
  /**
   * Label text to display next to the checkbox
   * @remarks When provided, wraps the checkbox in a label element for better accessibility
   */
  label?: string;
  
  /**
   * Whether the checkbox is in an indeterminate state
   * @default false
   * @remarks Shows a dash instead of a checkmark, useful for parent checkboxes with mixed children states
   */
  indeterminate?: boolean;
  
  /**
   * Override the theme accent color for checked state
   * @default Uses theme accent color
   * @see {@link AccentColor} for available colors
   */
  color?: AccentColor;
}

/**
 * Checkbox - Binary choice input control
 * 
 * @description
 * A checkbox input for binary choices, supporting custom styling, sizes,
 * and indeterminate states. Can be used standalone or with a label for
 * improved accessibility and larger click targets.
 * 
 * @example
 * ```tsx
 * // Basic checkbox
 * <Checkbox
 *   checked={agreed}
 *   onChange={(e) => setAgreed(e.target.checked)}
 *   label="I agree to the terms and conditions"
 * />
 * ```
 * 
 * @example
 * ```tsx
 * // Indeterminate checkbox for parent selection
 * <Checkbox
 *   indeterminate={someSelected && !allSelected}
 *   checked={allSelected}
 *   onChange={handleSelectAll}
 *   label="Select all"
 * />
 * ```
 * 
 * @example
 * ```tsx
 * // Themed checkbox with custom color
 * <Checkbox
 *   variant="rounded"
 *   size="lg"
 *   color="green"
 *   checked={subscribed}
 *   onChange={handleSubscribe}
 *   label="Subscribe to newsletter"
 * />
 * ```
 * 
 * @remarks
 * - Use checkboxes for independent binary choices
 * - Use radio buttons for mutually exclusive choices
 * - Always provide labels for better accessibility
 * - Consider using Switch for instant-apply settings
 * - Indeterminate state is useful for "select all" patterns
 * 
 * @see {@link Radio} For mutually exclusive choices
 * @see {@link Switch} For instant-apply toggles
 * @see {@link FormField} For checkbox with error messages
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/} ARIA Checkbox Pattern
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
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
      <div className={clsx(checkboxStyles({ variant, size }))} data-accent-color={color}>
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
              size,
              // @ts-ignore - TypeScript has issues with vanilla-extract recipe types
              error: error || false,
              // @ts-ignore - TypeScript has issues with vanilla-extract recipe types
              disabled: disabled || false,
            })
          )}
          aria-hidden="true"
        >
          {indeterminate ? (
            <svg viewBox="0 0 10 2" fill="none">
              <rect width={10} height={2} fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 10 8" fill="none">
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="currentColor"
                strokeWidth={2}
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
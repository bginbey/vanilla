import { forwardRef, SelectHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { selectStyles, iconStyles } from './Select.css';
import type { AccentColor } from '../../constants/colors';

/**
 * Available select style variants
 */
export type SelectVariant = 
  /** Border with transparent background */
  | 'outline'
  /** Filled background with subtle border */
  | 'filled'
  /** No styling, for custom implementations */
  | 'unstyled';

/**
 * Props for the Select component
 */
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Visual style variant of the select
   * @default 'outline'
   */
  variant?: SelectVariant;
  
  /**
   * Whether the select is in an error state
   * @default false
   * @remarks Shows red border and can be paired with error messages
   */
  error?: boolean;
  
  /**
   * Whether the select should take the full width of its container
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Override the theme accent color for focus states
   * @default Uses theme accent color
   * @see {@link AccentColor} for available colors
   */
  color?: AccentColor;
}

/**
 * Select - Dropdown selection input
 * 
 * @description
 * A styled select component for choosing from a list of options.
 * Provides consistent styling with custom dropdown arrow and supports
 * the same visual variants as other form inputs for a cohesive form experience.
 * 
 * @example
 * ```tsx
 * // Basic select
 * <Select value={country} onChange={(e) => setCountry(e.target.value)}>
 *   <option value="">Select a country</option>
 *   <option value="us">United States</option>
 *   <option value="uk">United Kingdom</option>
 *   <option value="ca">Canada</option>
 * </Select>
 * ```
 * 
 * @example
 * ```tsx
 * // Select with error state
 * <Select
 *   variant="outline"
 *   error={!selectedOption}
 *   required
 * >
 *   <option value="">Choose an option</option>
 *   <option value="1">Option 1</option>
 *   <option value="2">Option 2</option>
 * </Select>
 * ```
 * 
 * @example
 * ```tsx
 * // Themed select with custom color
 * <Select
 *   variant="filled"
 *   color="blue"
 *   fullWidth
 * >
 *   <option value="small">Small</option>
 *   <option value="medium">Medium</option>
 *   <option value="large">Large</option>
 * </Select>
 * ```
 * 
 * @remarks
 * - Use outline variant for primary selects
 * - Use filled variant for search filters or secondary selects
 * - Always include a placeholder option for clarity
 * - Group related options with optgroup when appropriate
 * - Consider using a custom dropdown component for complex needs
 * 
 * @see {@link FormField} For select with label and error message
 * @see {@link Input} For text input fields
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/combobox/} ARIA Combobox Pattern
 */
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
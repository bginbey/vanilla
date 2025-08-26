import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { inputStyles } from './Input.css';
import type { AccentColor } from '../../constants/colors';

/**
 * Available input style variants
 */
export type InputVariant = 
  /** Border with transparent background */
  | 'outline'
  /** Filled background with subtle border */
  | 'filled'
  /** No styling, for custom implementations */
  | 'unstyled';

/**
 * Props for the Input component
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Visual style variant of the input
   * @default 'outline'
   */
  variant?: InputVariant;
  
  /**
   * Whether the input is in an error state
   * @default false
   * @remarks Shows red border and can be paired with error messages
   */
  error?: boolean;
  
  /**
   * Whether the input should take the full width of its container
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
 * Input - Text input field for user data entry
 * 
 * @description
 * A flexible input component that supports multiple visual styles and states.
 * Provides consistent styling for text inputs across your application with
 * built-in support for error states, theming, and full width layouts.
 * 
 * @example
 * ```tsx
 * // Basic input
 * <Input
 *   placeholder="Enter your name"
 *   value={name}
 *   onChange={(e) => setName(e.target.value)}
 * />
 * ```
 * 
 * @example
 * ```tsx
 * // Input with error state
 * <Input
 *   variant="outline"
 *   error={hasError}
 *   placeholder="Email address"
 *   type="email"
 * />
 * ```
 * 
 * @example
 * ```tsx
 * // Themed input with custom color
 * <Input
 *   variant="filled"
 *   color="blue"
 *   fullWidth
 *   placeholder="Search..."
 * />
 * ```
 * 
 * @remarks
 * - Use outline variant for primary inputs
 * - Use filled variant for search or secondary inputs
 * - Use unstyled variant when building custom input components
 * - Always provide proper labels for accessibility (use FormField wrapper)
 * - Error state should be accompanied by error messages
 * 
 * @see {@link FormField} For input with label and error message
 * @see {@link Select} For dropdown selection
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/textbox/} ARIA Textbox Pattern
 */
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
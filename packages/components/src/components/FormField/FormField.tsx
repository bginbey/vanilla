import { forwardRef, ReactElement, cloneElement, useId } from 'react';
import { clsx } from 'clsx';
import { fieldStyles, labelStyles, helperTextStyles, errorTextStyles } from './FormField.css';

/**
 * Props for the FormField component
 */
export interface FormFieldProps {
  /**
   * Label text for the form field
   * @remarks Automatically associates with the input for accessibility
   */
  label?: string;
  
  /**
   * Helper text to provide additional context
   * @remarks Displayed below the input when no error is present
   */
  helperText?: string;
  
  /**
   * Whether the field has an error
   * @default false
   * @remarks Passed to the child input and affects styling
   */
  error?: boolean;
  
  /**
   * Error message to display
   * @remarks Replaces helper text when present and announces to screen readers
   */
  errorMessage?: string;
  
  /**
   * Whether the field is required
   * @default false
   * @remarks Adds asterisk to label and aria-required to input
   */
  required?: boolean;
  
  /**
   * Whether the field is disabled
   * @default false
   * @remarks Disables the input and reduces opacity of labels
   */
  disabled?: boolean;
  
  /**
   * The form input element to wrap
   * @remarks Must be a single React element (Input, Select, Checkbox, etc.)
   */
  children: ReactElement;
  
  /**
   * Additional CSS class names
   */
  className?: string;
}

/**
 * FormField - Wrapper for form inputs with labels and validation
 * 
 * @description
 * A wrapper component that provides consistent form field layout with
 * labels, helper text, and error messages. Automatically handles
 * accessibility attributes like aria-describedby, aria-invalid, and
 * proper label associations. Works with any form input component.
 * 
 * @example
 * ```tsx
 * // Basic form field with label
 * <FormField label="Email Address" required>
 *   <Input type="email" placeholder="Enter your email" />
 * </FormField>
 * ```
 * 
 * @example
 * ```tsx
 * // Form field with validation
 * <FormField
 *   label="Password"
 *   error={!!errors.password}
 *   errorMessage={errors.password}
 *   helperText="Must be at least 8 characters"
 * >
 *   <Input type="password" value={password} onChange={handleChange} />
 * </FormField>
 * ```
 * 
 * @example
 * ```tsx
 * // Form field with select
 * <FormField
 *   label="Country"
 *   helperText="Select your country of residence"
 * >
 *   <Select value={country} onChange={handleCountryChange}>
 *     <option value="">Choose a country</option>
 *     <option value="us">United States</option>
 *     <option value="uk">United Kingdom</option>
 *   </Select>
 * </FormField>
 * ```
 * 
 * @remarks
 * - Automatically generates IDs if not provided
 * - Error messages replace helper text when present
 * - Required fields show an asterisk in the label
 * - Error messages are announced to screen readers
 * - Works with Input, Select, Checkbox, Radio, Switch, and custom inputs
 * 
 * @see {@link Input} For text input fields
 * @see {@link Select} For dropdown selections
 * @see {@link Checkbox} For binary choices
 * @see {@link https://www.w3.org/WAI/tutorials/forms/labels/} WCAG Form Labels
 */
export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      label,
      helperText,
      error = false,
      errorMessage,
      required = false,
      disabled = false,
      children,
      className,
    },
    ref
  ) => {
    const generatedId = useId();
    const fieldId = children.props.id || generatedId;
    const helperId = helperText ? `${fieldId}-helper` : undefined;
    const errorId = errorMessage ? `${fieldId}-error` : undefined;
    const ariaDescribedBy = [helperId, errorId].filter(Boolean).join(' ') || undefined;

    // Clone the child element and add necessary props
    const enhancedChild = cloneElement(children, {
      id: fieldId,
      'aria-invalid': error || undefined,
      'aria-describedby': ariaDescribedBy || children.props['aria-describedby'],
      'aria-required': required || undefined,
      disabled: disabled || children.props.disabled,
      error: error || children.props.error,
    });

    return (
      <div ref={ref} className={clsx(fieldStyles, className)}>
        {label && (
          <label
            htmlFor={fieldId}
            className={clsx(labelStyles({ disabled }))}
          >
            {label}
            {required && <span aria-label="required"> *</span>}
          </label>
        )}
        
        {enhancedChild}
        
        {helperText && !errorMessage && (
          <p id={helperId} className={clsx(helperTextStyles({ disabled }))}>
            {helperText}
          </p>
        )}
        
        {errorMessage && (
          <p id={errorId} className={clsx(errorTextStyles)} role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
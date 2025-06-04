import { forwardRef, ReactElement, cloneElement, useId } from 'react';
import { clsx } from 'clsx';
import { fieldStyles, labelStyles, helperTextStyles, errorTextStyles } from './FormField.css';

export interface FormFieldProps {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  children: ReactElement;
  className?: string;
}

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
          <p id={errorId} className={errorTextStyles} role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { switchStyles, inputStyles, trackStyles, thumbStyles, labelStyles } from './Switch.css';
import type { AccentColor } from '../../constants/colors';

/**
 * Available switch sizes
 */
export type SwitchSize = 
  /** Small - compact size for dense UIs */
  | 'sm'
  /** Medium - default size for most use cases */
  | 'md'
  /** Large - increased touch target for mobile */
  | 'lg';

/**
 * Props for the Switch component
 */
export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * Size of the switch
   * @default 'md'
   */
  size?: SwitchSize;
  
  /**
   * Whether the switch has an error state
   * @default false
   * @remarks Shows red styling to indicate validation errors
   */
  error?: boolean;
  
  /**
   * Label text to display next to the switch
   * @remarks When provided, wraps the switch in a label element for better accessibility
   */
  label?: string;
  
  /**
   * Override the theme accent color for checked state
   * @default Uses theme accent color
   * @see {@link AccentColor} for available colors
   */
  color?: AccentColor;
}

/**
 * Switch - Toggle control for instant-apply settings
 * 
 * @description
 * A switch component for binary on/off settings that take effect immediately.
 * Unlike checkboxes, switches represent an action that occurs immediately when
 * toggled, without requiring a separate submit action.
 * 
 * @example
 * ```tsx
 * // Basic switch
 * <Switch
 *   checked={notifications}
 *   onChange={(e) => setNotifications(e.target.checked)}
 *   label="Enable notifications"
 * />
 * ```
 * 
 * @example
 * ```tsx
 * // Settings panel with switches
 * <div>
 *   <Switch
 *     size="sm"
 *     checked={darkMode}
 *     onChange={toggleDarkMode}
 *     label="Dark mode"
 *   />
 *   <Switch
 *     size="sm"
 *     checked={autoSave}
 *     onChange={toggleAutoSave}
 *     label="Auto-save"
 *   />
 * </div>
 * ```
 * 
 * @example
 * ```tsx
 * // Themed switch with custom color
 * <Switch
 *   size="lg"
 *   color="green"
 *   checked={isPublished}
 *   onChange={handlePublishToggle}
 *   label="Published"
 * />
 * ```
 * 
 * @remarks
 * - Use switches for instant-apply settings
 * - Use checkboxes for settings that require confirmation
 * - The thumb animates smoothly between states
 * - Switches should save their state immediately
 * - Consider adding loading states for async operations
 * 
 * @see {@link Checkbox} For binary choices requiring confirmation
 * @see {@link Radio} For mutually exclusive choices
 * @see {@link FormField} For switch with error messages
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/switch/} ARIA Switch Pattern
 */
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
import React, { forwardRef, ElementType, ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';
import { button, buttonIcon } from './Button.css';
import { Icon } from '../Icon';
import type { IconProps } from '../Icon';
import type { AccentColor } from '../../constants/colors';

// Export types for reuse
export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Constants
const ICON_SIZE_MAP: Record<ButtonSize, IconProps['size']> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

// Define the button-specific props
export interface ButtonOwnProps {
  /** Visual style variant of the button */
  variant?: ButtonVariant;
  /** Size of the button affecting padding and font size */
  size?: ButtonSize;
  /** Whether the button should take the full width of its container */
  fullWidth?: boolean;
  /** Render as a different element or component */
  as?: ElementType;
  /** Icon to display on the left side of the button text */
  leftIcon?: IconProps['icon'];
  /** Icon to display on the right side of the button text */
  rightIcon?: IconProps['icon'];
  /** Additional props to pass to icon components */
  iconProps?: Omit<IconProps, 'icon'>;
  /** Override the theme accent color for this specific button */
  color?: AccentColor;
}

// Create a type that combines button props with element props
export type ButtonProps<C extends ElementType = 'button'> = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<C>, keyof ButtonOwnProps>;

// Type for the Button component itself
export interface ButtonComponent {
  <C extends ElementType = 'button'>(
    props: ButtonProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] }
  ): React.ReactElement | null;
  displayName?: string;
}

// Implementation with explicit typing
export const Button: ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      as,
      className,
      variant = 'solid',
      size = 'md',
      fullWidth = false,
      leftIcon,
      rightIcon,
      iconProps,
      color,
      children,
      style,
      ...props
    },
    ref
  ) {
    const Component = as || 'button';
    const iconSize = ICON_SIZE_MAP[size];

    return (
      <Component
        ref={ref}
        className={clsx(button({ variant, size, fullWidth }), className)}
        {...props}
        style={style}
        data-accent-color={color}
      >
        {leftIcon && (
          <Icon
            icon={leftIcon}
            size={iconSize}
            className={buttonIcon.left}
            {...iconProps}
          />
        )}
        {children}
        {rightIcon && (
          <Icon
            icon={rightIcon}
            size={iconSize}
            className={buttonIcon.right}
            {...iconProps}
          />
        )}
      </Component>
    );
  }
) as ButtonComponent;

Button.displayName = 'Button';
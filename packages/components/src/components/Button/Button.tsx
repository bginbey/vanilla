import React, { forwardRef, ElementType, ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';
import { button, buttonIcon } from './Button.css';
import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

// Define the button-specific props
export interface ButtonOwnProps {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  as?: ElementType;
  leftIcon?: IconProps['icon'];
  rightIcon?: IconProps['icon'];
  iconProps?: Omit<IconProps, 'icon'>;
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
      children,
      ...props
    },
    ref
  ) {
    const Component = as || 'button';
    
    // Icon size mapping based on button size
    const iconSize = {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }[size] as IconProps['size'];

    return (
      <Component
        ref={ref}
        className={clsx(button({ variant, size, fullWidth }), className)}
        {...props}
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
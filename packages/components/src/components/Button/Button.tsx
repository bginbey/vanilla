import React, { forwardRef, ElementType, ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';
import { button } from './Button.css';

// Define the button-specific props
export interface ButtonOwnProps {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  as?: ElementType;
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
      ...props
    },
    ref
  ) {
    const Component = as || 'button';

    return (
      <Component
        ref={ref}
        className={clsx(button({ variant, size, fullWidth }), className)}
        {...props}
      />
    );
  }
) as ButtonComponent;

Button.displayName = 'Button';
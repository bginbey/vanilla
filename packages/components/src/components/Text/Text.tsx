import React, { forwardRef, ElementType, ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';
import { text } from './Text.css';

// Define the text-specific props
export interface TextOwnProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'brand' | 'success' | 'warning' | 'error' | 'info';
  align?: 'left' | 'center' | 'right';
  truncate?: boolean;
  as?: ElementType;
}

// Create a type that combines text props with element props
export type TextProps<C extends ElementType = 'span'> = TextOwnProps &
  Omit<ComponentPropsWithoutRef<C>, keyof TextOwnProps>;

// Type for the Text component itself
export interface TextComponent {
  <C extends ElementType = 'span'>(
    props: TextProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] }
  ): React.ReactElement | null;
  displayName?: string;
}

// Implementation with explicit typing
export const Text: TextComponent = forwardRef<HTMLSpanElement, TextProps>(
  function Text(
    {
      as,
      className,
      size,
      weight,
      color,
      align,
      truncate,
      ...props
    },
    ref
  ) {
    const Component = as || 'span';

    return (
      <Component
        ref={ref}
        className={clsx(text({ size, weight, color, align, truncate }), className)}
        {...props}
      />
    );
  }
) as TextComponent;

Text.displayName = 'Text';
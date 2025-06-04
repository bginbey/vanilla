import { ElementType } from 'react';
import { clsx } from 'clsx';
import { text } from './Text.css';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from '../../utils/polymorphic';
import { polymorphicForwardRef } from '../../utils/forwardRef';

type TextVariants = {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'brand' | 'success' | 'warning' | 'error' | 'info';
  align?: 'left' | 'center' | 'right';
  truncate?: boolean;
};

export type TextProps<C extends ElementType = 'span'> = PolymorphicComponentPropWithRef<
  C,
  TextVariants
>;

export const Text = polymorphicForwardRef<'span', TextVariants>(
  <C extends ElementType = 'span'>(
    {
      as,
      className,
      size,
      weight,
      color,
      align,
      truncate,
      ...props
    }: TextProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Component = as || 'span';

    return (
      <Component
        ref={ref}
        className={clsx(text({ size, weight, color, align, truncate }), className)}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';
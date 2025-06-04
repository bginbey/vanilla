import { ElementType } from 'react';
import { clsx } from 'clsx';
import { button } from './Button.css';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from '../../utils/polymorphic';
import { polymorphicForwardRef } from '../../utils/forwardRef';

type ButtonVariants = {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
};

export type ButtonProps<C extends ElementType = 'button'> = PolymorphicComponentPropWithRef<
  C,
  ButtonVariants
>;

export const Button = polymorphicForwardRef<'button', ButtonVariants>(
  <C extends ElementType = 'button'>(
    {
      as,
      className,
      variant = 'solid',
      size = 'md',
      fullWidth = false,
      ...props
    }: ButtonProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Component = as || 'button';

    return (
      <Component
        ref={ref}
        className={clsx(button({ variant, size, fullWidth }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
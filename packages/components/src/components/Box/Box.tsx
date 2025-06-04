import { ElementType } from 'react';
import { clsx } from 'clsx';
import { sprinkles, Sprinkles } from '../../styles/sprinkles.css';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from '../../utils/polymorphic';
import { polymorphicForwardRef } from '../../utils/forwardRef';

export type BoxProps<C extends ElementType = 'div'> = PolymorphicComponentPropWithRef<
  C,
  Sprinkles
>;

export const Box = polymorphicForwardRef<'div', Sprinkles>(
  <C extends ElementType = 'div'>(
    { as, className, ...props }: BoxProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Component = as || 'div';
    const { otherProps, sprinkleProps } = extractSprinkleProps(props);

    return (
      <Component
        ref={ref}
        className={clsx(sprinkles(sprinkleProps), className)}
        {...otherProps}
      />
    );
  }
);

Box.displayName = 'Box';

function extractSprinkleProps(props: Record<string, any>) {
  const sprinkleProps: Record<string, any> = {};
  const otherProps: Record<string, any> = {};

  const sprinkleKeys = [
    'display', 'flexDirection', 'justifyContent', 'alignItems', 'gap',
    'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
    'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
    'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'textAlign',
    'color', 'backgroundColor', 'borderColor', 'borderRadius', 'boxShadow',
    'fontFamily', 'position', 'top', 'right', 'bottom', 'left', 'zIndex',
    'overflow', 'opacity', 'p', 'pt', 'pb', 'pl', 'pr', 'px', 'py',
    'm', 'mt', 'mb', 'ml', 'mr', 'mx', 'my', 'cursor', 'userSelect', 'border',
    'transitionProperty', 'transitionDuration', 'transitionTimingFunction'
  ];

  Object.keys(props).forEach(key => {
    if (sprinkleKeys.includes(key)) {
      sprinkleProps[key] = props[key];
    } else {
      otherProps[key] = props[key];
    }
  });

  return { sprinkleProps, otherProps };
}
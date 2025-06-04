import React from 'react';
import { clsx } from 'clsx';
import { sprinkles, Sprinkles } from '../../styles/sprinkles.css';

// Define all props that Box accepts
export interface BoxOwnProps extends Sprinkles {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  minHeight?: React.CSSProperties['minHeight'];
  minWidth?: React.CSSProperties['minWidth'];
  maxHeight?: React.CSSProperties['maxHeight'];
  maxWidth?: React.CSSProperties['maxWidth'];
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
}

// Combined props type for Box
export type BoxProps<C extends React.ElementType = 'div'> = BoxOwnProps &
  Omit<React.ComponentPropsWithRef<C>, keyof BoxOwnProps>;

// Box component with simpler typing
export const Box = React.forwardRef<HTMLElement, BoxOwnProps>(
  ({ as: Component = 'div', className, style, minHeight, minWidth, maxHeight, maxWidth, height, width, ...restProps }, ref) => {
    const { otherProps, sprinkleProps } = extractSprinkleProps(restProps);

    // Combine style props
    const combinedStyle: React.CSSProperties = {
      ...style,
      ...(minHeight && { minHeight }),
      ...(minWidth && { minWidth }),
      ...(maxHeight && { maxHeight }),
      ...(maxWidth && { maxWidth }),
      ...(height && { height }),
      ...(width && { width }),
    };

    return React.createElement(Component, {
      ref,
      className: clsx(sprinkles(sprinkleProps), className),
      style: Object.keys(combinedStyle).length > 0 ? combinedStyle : undefined,
      ...otherProps,
    });
  }
);

Box.displayName = 'Box';

function extractSprinkleProps(props: Record<string, unknown>) {
  const sprinkleProps: Record<string, unknown> = {};
  const otherProps: Record<string, unknown> = {};

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
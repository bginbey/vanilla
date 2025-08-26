import React from 'react';
import { clsx } from 'clsx';
import { sprinkles, Sprinkles } from '../../styles/sprinkles.css';

/**
 * Props for the Box component
 */
export interface BoxOwnProps extends Sprinkles {
  /**
   * Render as a different element or component
   * @default 'div'
   * @example 'section', 'article', 'aside'
   */
  as?: React.ElementType;
  
  /**
   * Additional CSS class names
   */
  className?: string;
  
  /**
   * Child elements to render
   */
  children?: React.ReactNode;
  
  /**
   * Inline styles
   */
  style?: React.CSSProperties;
  
  /**
   * Minimum height constraint
   * @remarks Useful for maintaining layout consistency
   */
  minHeight?: React.CSSProperties['minHeight'];
  
  /**
   * Minimum width constraint
   */
  minWidth?: React.CSSProperties['minWidth'];
  
  /**
   * Maximum height constraint
   * @remarks Useful for scrollable containers
   */
  maxHeight?: React.CSSProperties['maxHeight'];
}

// Combined props type for Box
export type BoxProps<C extends React.ElementType = 'div'> = BoxOwnProps &
  Omit<React.ComponentPropsWithRef<C>, keyof BoxOwnProps>;

/**
 * Box - Primitive building block for layouts
 * 
 * @description
 * The most fundamental component in the system, Box provides a polymorphic
 * container with access to all design tokens through the Sprinkles prop
 * system. It serves as the foundation for building more complex layouts
 * and can be rendered as any HTML element.
 * 
 * @example
 * ```tsx
 * // Basic box with padding and background
 * <Box p={4} backgroundColor="gray.2" borderRadius="md">
 *   Content goes here
 * </Box>
 * ```
 * 
 * @example
 * ```tsx
 * // Responsive box with different padding at breakpoints
 * <Box
 *   p={{ base: 2, sm: 4, md: 6 }}
 *   display={{ base: 'block', md: 'flex' }}
 * >
 *   Responsive content
 * </Box>
 * ```
 * 
 * @example
 * ```tsx
 * // Box as semantic HTML element
 * <Box as="section" py={8} maxWidth="container.lg" mx="auto">
 *   <Box as="header" mb={4}>
 *     <Text as="h2">Section Title</Text>
 *   </Box>
 *   <Box as="article">Article content</Box>
 * </Box>
 * ```
 * 
 * @remarks
 * - Box accepts all Sprinkles props for styling
 * - Use semantic HTML elements via the `as` prop
 * - Prefer specialized layout components (Flex, Grid) for complex layouts
 * - Box is the foundation for all other components
 * - Responsive props use object syntax: `{ base, sm, md, lg, xl }`
 * 
 * @see {@link Flex} For flexbox layouts
 * @see {@link Grid} For CSS grid layouts
 * @see {@link Container} For centered, max-width containers
 */
export const Box = React.forwardRef<HTMLElement, BoxOwnProps>(
  ({ as: Component = 'div', className, style, minHeight, minWidth, maxHeight, ...restProps }, ref) => {
    const { otherProps, sprinkleProps } = extractSprinkleProps(restProps);

    // Combine style props
    const combinedStyle: React.CSSProperties = {
      ...style,
      ...(minHeight && { minHeight }),
      ...(minWidth && { minWidth }),
      ...(maxHeight && { maxHeight }),
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
    'display', 'flexDirection', 'flexWrap', 'justifyContent', 'alignItems', 
    'alignContent', 'justifyItems', 'alignSelf', 'justifySelf',
    'gap', 'columnGap', 'rowGap',
    'gridTemplateColumns', 'gridTemplateRows', 'gridAutoFlow', 
    'gridAutoColumns', 'gridAutoRows',
    'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
    'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
    'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing', 'textAlign',
    'color', 'backgroundColor', 'borderColor', 'borderRadius', 'boxShadow',
    'fontFamily', 'position', 'top', 'right', 'bottom', 'left', 'zIndex',
    'overflow', 'opacity', 'p', 'pt', 'pb', 'pl', 'pr', 'px', 'py',
    'm', 'mt', 'mb', 'ml', 'mr', 'mx', 'my', 'cursor', 'userSelect', 'border',
    'transitionProperty', 'transitionDuration', 'transitionTimingFunction',
    'width', 'height', 'maxWidth'
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
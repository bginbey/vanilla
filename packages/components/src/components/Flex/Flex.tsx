import React from 'react';
import { Box, BoxProps } from '../Box';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type AlignItems = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface FlexOwnProps {
  /**
   * The direction of the flex container
   * @default 'row'
   */
  direction?: FlexDirection | {
    mobile?: FlexDirection;
    tablet?: FlexDirection;
    desktop?: FlexDirection;
  };
  
  /**
   * How to align items on the cross axis
   */
  align?: AlignItems | {
    mobile?: AlignItems;
    tablet?: AlignItems;
    desktop?: AlignItems;
  };
  
  /**
   * How to justify content on the main axis
   */
  justify?: JustifyContent | {
    mobile?: JustifyContent;
    tablet?: JustifyContent;
    desktop?: JustifyContent;
  };
  
  /**
   * Whether flex items should wrap
   * @default 'nowrap'
   */
  wrap?: FlexWrap | {
    mobile?: FlexWrap;
    tablet?: FlexWrap;
    desktop?: FlexWrap;
  };
  
  /**
   * Shorthand for both gap values
   */
  gap?: BoxProps<'div'>['gap'];
  
  /**
   * Gap between columns
   */
  gapX?: BoxProps<'div'>['columnGap'];
  
  /**
   * Gap between rows
   */
  gapY?: BoxProps<'div'>['rowGap'];
}

export type FlexProps<C extends React.ElementType = 'div'> = FlexOwnProps &
  Omit<BoxProps<C>, keyof FlexOwnProps | 'display'>;

// Map our prop values to Sprinkles values
const mapAlign = (value: AlignItems): BoxProps<'div'>['alignItems'] => {
  const alignMap: Record<AlignItems, BoxProps<'div'>['alignItems']> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline',
  };
  return alignMap[value];
};

const mapJustify = (value: JustifyContent): BoxProps<'div'>['justifyContent'] => {
  const justifyMap: Record<JustifyContent, BoxProps<'div'>['justifyContent']> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
  };
  return justifyMap[value];
};

export const Flex = React.forwardRef<HTMLElement, FlexProps>(
  ({ 
    direction = 'row', 
    align, 
    justify, 
    wrap = 'nowrap',
    gap,
    gapX,
    gapY,
    ...restProps 
  }, ref) => {
    // Handle responsive direction
    const flexDirection = typeof direction === 'object' 
      ? direction 
      : direction;
    
    // Handle responsive align
    const alignItems = align
      ? (typeof align === 'object' 
        ? Object.entries(align).reduce((acc, [key, value]) => ({
            ...acc,
            [key]: mapAlign(value)
          }), {})
        : mapAlign(align))
      : undefined;
    
    // Handle responsive justify
    const justifyContent = justify
      ? (typeof justify === 'object'
        ? Object.entries(justify).reduce((acc, [key, value]) => ({
            ...acc,
            [key]: mapJustify(value)
          }), {})
        : mapJustify(justify))
      : undefined;
    
    // Handle responsive wrap
    const flexWrap = typeof wrap === 'object' ? wrap : wrap;
    
    return (
      <Box
        ref={ref}
        display="flex"
        flexDirection={flexDirection}
        alignItems={alignItems}
        justifyContent={justifyContent}
        flexWrap={flexWrap}
        gap={gap}
        columnGap={gapX}
        rowGap={gapY}
        {...restProps}
      />
    );
  }
);

Flex.displayName = 'Flex';
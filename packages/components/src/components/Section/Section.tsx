import React from 'react';
import { Box, BoxProps } from '../Box';

type SectionSize = '1' | '2' | '3' | '4';

export interface SectionOwnProps {
  /**
   * The vertical padding size of the section
   * @default '3'
   */
  size?: SectionSize | {
    mobile?: SectionSize;
    tablet?: SectionSize;
    desktop?: SectionSize;
  };
}

export type SectionProps<C extends React.ElementType = 'section'> = SectionOwnProps &
  Omit<BoxProps<C>, keyof SectionOwnProps>;

// Map size to padding values
const sizeToSpacing: Record<SectionSize, 4 | 8 | 12 | 16> = {
  '1': 4,
  '2': 8,
  '3': 12,
  '4': 16,
};

export const Section = React.forwardRef<HTMLElement, SectionOwnProps & { as?: React.ElementType }>(
  ({ 
    size = '3',
    as = 'section',
    ...restProps 
  }, ref) => {
    // Handle responsive sizes
    const paddingY = typeof size === 'object'
      ? Object.entries(size).reduce((acc, [breakpoint, value]) => ({
          ...acc,
          [breakpoint]: sizeToSpacing[value]
        }), {})
      : sizeToSpacing[size];
    
    return (
      <Box
        ref={ref}
        as={as}
        py={paddingY}
        width="100%"
        {...restProps}
      />
    );
  }
);

Section.displayName = 'Section';
import React from 'react';
import { Box, BoxProps } from '../Box';

type GridColumns = '1' | '2' | '3' | '4' | '5' | '6' | '12' | string;
type GridRows = '1' | '2' | '3' | '4' | '5' | '6' | string;
type GridFlow = 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
type GridAlign = 'start' | 'center' | 'end' | 'stretch';
type GridJustify = 'start' | 'center' | 'end' | 'stretch';

export interface GridOwnProps {
  /**
   * Number of columns or custom grid template
   * @example "3" | "1fr 2fr 1fr" | "repeat(auto-fit, minmax(250px, 1fr))"
   */
  columns?: GridColumns | {
    mobile?: GridColumns;
    tablet?: GridColumns;
    desktop?: GridColumns;
  };
  
  /**
   * Number of rows or custom grid template
   * @example "2" | "100px 1fr" | "repeat(3, 200px)"
   */
  rows?: GridRows | {
    mobile?: GridRows;
    tablet?: GridRows;
    desktop?: GridRows;
  };
  
  /**
   * Grid auto flow direction
   * @default 'row'
   */
  flow?: GridFlow | {
    mobile?: GridFlow;
    tablet?: GridFlow;
    desktop?: GridFlow;
  };
  
  /**
   * Align grid items
   */
  align?: GridAlign | {
    mobile?: GridAlign;
    tablet?: GridAlign;
    desktop?: GridAlign;
  };
  
  /**
   * Justify grid items
   */
  justify?: GridJustify | {
    mobile?: GridJustify;
    tablet?: GridJustify;
    desktop?: GridJustify;
  };
  
  /**
   * Gap between grid items
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

export type GridProps<C extends React.ElementType = 'div'> = GridOwnProps &
  Omit<BoxProps<C>, keyof GridOwnProps | 'display'>;

// Helper to determine if a value is a preset or custom
const isPresetColumns = (value: string): value is ('1' | '2' | '3' | '4' | '5' | '6' | '12') => {
  return ['1', '2', '3', '4', '5', '6', '12'].includes(value);
};

const isPresetRows = (value: string): value is ('1' | '2' | '3' | '4' | '5' | '6') => {
  return ['1', '2', '3', '4', '5', '6'].includes(value);
};

// Map alignment values
const mapAlign = (value: GridAlign): BoxProps<'div'>['alignItems'] => {
  const alignMap: Record<GridAlign, BoxProps<'div'>['alignItems']> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
  };
  return alignMap[value];
};

const mapJustify = (value: GridJustify): BoxProps<'div'>['justifyItems'] => {
  return value as BoxProps<'div'>['justifyItems'];
};

export const Grid = React.forwardRef<HTMLElement, GridProps>(
  ({ 
    columns,
    rows,
    flow = 'row',
    align,
    justify,
    gap,
    gapX,
    gapY,
    style,
    ...restProps 
  }, ref) => {
    // Handle columns
    let gridTemplateColumns: BoxProps<'div'>['gridTemplateColumns'] | undefined;
    let customColumnsStyle: React.CSSProperties | undefined;
    
    if (columns) {
      if (typeof columns === 'string') {
        if (isPresetColumns(columns)) {
          gridTemplateColumns = columns;
        } else {
          customColumnsStyle = { gridTemplateColumns: columns };
        }
      } else {
        // Handle responsive columns with custom values
        const responsiveStyles: React.CSSProperties = {};
        let hasCustom = false;
        
        Object.entries(columns).forEach(([breakpoint, value]) => {
          if (value && !isPresetColumns(value)) {
            hasCustom = true;
            // We'll use CSS variables for responsive custom values
            (responsiveStyles as any)[`--grid-columns-${breakpoint}`] = value;
          }
        });
        
        if (hasCustom) {
          customColumnsStyle = {
            ...responsiveStyles,
            gridTemplateColumns: 'var(--grid-columns-mobile, 1fr)',
            '@media (min-width: 768px)': {
              gridTemplateColumns: 'var(--grid-columns-tablet, var(--grid-columns-mobile, 1fr))',
            },
            '@media (min-width: 1024px)': {
              gridTemplateColumns: 'var(--grid-columns-desktop, var(--grid-columns-tablet, var(--grid-columns-mobile, 1fr)))',
            },
          } as React.CSSProperties;
        } else {
          gridTemplateColumns = columns as any;
        }
      }
    }
    
    // Handle rows similarly
    let gridTemplateRows: BoxProps<'div'>['gridTemplateRows'] | undefined;
    let customRowsStyle: React.CSSProperties | undefined;
    
    if (rows) {
      if (typeof rows === 'string') {
        if (isPresetRows(rows)) {
          gridTemplateRows = rows;
        } else {
          customRowsStyle = { gridTemplateRows: rows };
        }
      } else {
        // Handle responsive rows with custom values
        const responsiveStyles: React.CSSProperties = {};
        let hasCustom = false;
        
        Object.entries(rows).forEach(([breakpoint, value]) => {
          if (value && !isPresetRows(value)) {
            hasCustom = true;
            (responsiveStyles as any)[`--grid-rows-${breakpoint}`] = value;
          }
        });
        
        if (hasCustom) {
          customRowsStyle = {
            ...responsiveStyles,
            gridTemplateRows: 'var(--grid-rows-mobile, auto)',
            '@media (min-width: 768px)': {
              gridTemplateRows: 'var(--grid-rows-tablet, var(--grid-rows-mobile, auto))',
            },
            '@media (min-width: 1024px)': {
              gridTemplateRows: 'var(--grid-rows-desktop, var(--grid-rows-tablet, var(--grid-rows-mobile, auto)))',
            },
          } as React.CSSProperties;
        } else {
          gridTemplateRows = rows as any;
        }
      }
    }
    
    // Handle align items
    const alignItems = align
      ? (typeof align === 'object' 
        ? Object.entries(align).reduce((acc, [key, value]) => ({
            ...acc,
            [key]: mapAlign(value)
          }), {})
        : mapAlign(align))
      : undefined;
    
    // Handle justify items
    const justifyItems = justify
      ? (typeof justify === 'object'
        ? Object.entries(justify).reduce((acc, [key, value]) => ({
            ...acc,
            [key]: mapJustify(value)
          }), {})
        : mapJustify(justify))
      : undefined;
    
    // Combine custom styles
    const combinedStyle: React.CSSProperties = {
      ...customColumnsStyle,
      ...customRowsStyle,
      ...style,
    };
    
    return (
      <Box
        ref={ref}
        display="grid"
        gridTemplateColumns={gridTemplateColumns}
        gridTemplateRows={gridTemplateRows}
        gridAutoFlow={flow}
        alignItems={alignItems}
        justifyItems={justifyItems}
        gap={gap}
        columnGap={gapX}
        rowGap={gapY}
        style={Object.keys(combinedStyle).length > 0 ? combinedStyle : undefined}
        {...restProps}
      />
    );
  }
);

Grid.displayName = 'Grid';
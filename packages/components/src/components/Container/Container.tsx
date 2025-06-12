import React from 'react';
import { clsx } from 'clsx';
import { Box, BoxProps } from '../Box';
import { containerBase, sizes, align as alignStyles } from './Container.css';

export interface ContainerOwnProps {
  /**
   * The maximum width size of the container
   * @default '4'
   */
  size?: '1' | '2' | '3' | '4' | {
    mobile?: '1' | '2' | '3' | '4';
    tablet?: '1' | '2' | '3' | '4';
    desktop?: '1' | '2' | '3' | '4';
  };
  
  /**
   * Horizontal alignment of the container
   * @default 'center'
   */
  align?: 'left' | 'center' | 'right';
}

export type ContainerProps<C extends React.ElementType = 'div'> = ContainerOwnProps &
  Omit<BoxProps<C>, keyof ContainerOwnProps>;

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ 
    size = '4',
    align = 'center',
    className,
    ...restProps 
  }, ref) => {
    // For responsive size, we'll need to handle it differently
    const isResponsive = typeof size === 'object';
    
    let sizeClasses = '';
    if (!isResponsive) {
      sizeClasses = sizes[size];
    }
    
    // Handle responsive sizes with inline styles for now
    const responsiveStyle: React.CSSProperties = {};
    if (isResponsive) {
      // Default to largest size
      responsiveStyle.maxWidth = '1280px';
      
      // We'll use CSS custom properties for responsive behavior
      if (size.mobile) {
        const mobileMax = {
          '1': '640px',
          '2': '768px',
          '3': '1024px',
          '4': '1280px',
        }[size.mobile];
        responsiveStyle.maxWidth = mobileMax;
      }
      
      // For tablet and desktop, we'd need media queries which we can't do inline
      // So we'll apply the desktop size as the max
      if (size.desktop) {
        const desktopMax = {
          '1': '640px',
          '2': '768px',
          '3': '1024px',
          '4': '1280px',
        }[size.desktop];
        responsiveStyle.maxWidth = desktopMax;
      }
    }
    
    return (
      <Box
        ref={ref}
        className={clsx(
          containerBase,
          !isResponsive && sizeClasses,
          alignStyles[align],
          className
        )}
        style={isResponsive ? responsiveStyle : undefined}
        {...restProps}
      />
    );
  }
);

Container.displayName = 'Container';
import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { iconButton } from './IconButton.css';
import { Icon } from '../Icon';
import type { IconProps } from '../Icon';
import type { AccentColor } from '../../constants/colors';

// Export types for reuse
export type IconButtonVariant = 'solid' | 'outline' | 'ghost';
export type IconButtonSize = 'sm' | 'md' | 'lg';

// Constants
const ICON_SIZE_MAP: Record<IconButtonSize, IconProps['size']> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /**
   * The icon to display
   */
  icon: IconProps['icon'];
  
  /**
   * Visual style variant
   * @default 'solid'
   */
  variant?: IconButtonVariant;
  
  /**
   * Size of the button
   * @default 'md'
   */
  size?: IconButtonSize;
  
  /**
   * Accessible label for the button (required)
   */
  'aria-label': string;
  
  /**
   * Additional icon props
   */
  iconProps?: Omit<IconProps, 'icon'>;
  
  /**
   * Override the theme accent color for this specific button
   */
  color?: AccentColor;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ 
    icon, 
    variant = 'solid', 
    size = 'md', 
    className,
    iconProps,
    color,
    style,
    ...props 
  }, ref) => {
    const iconSize = ICON_SIZE_MAP[size];

    return (
      <button
        ref={ref}
        className={clsx(iconButton({ variant, size }), className)}
        style={style}
        data-accent-color={color}
        {...props}
      >
        <Icon
          icon={icon}
          size={iconSize}
          color="current"
          {...iconProps}
        />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
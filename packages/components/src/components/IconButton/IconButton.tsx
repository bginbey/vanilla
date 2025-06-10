import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { iconButton } from './IconButton.css';
import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /**
   * The icon to display
   */
  icon: IconProps['icon'];
  
  /**
   * Visual style variant
   * @default 'solid'
   */
  variant?: 'solid' | 'outline' | 'ghost';
  
  /**
   * Size of the button
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Accessible label for the button (required)
   */
  'aria-label': string;
  
  /**
   * Additional icon props
   */
  iconProps?: Omit<IconProps, 'icon'>;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ 
    icon, 
    variant = 'solid', 
    size = 'md', 
    className,
    iconProps,
    ...props 
  }, ref) => {
    // Icon size mapping based on button size
    const iconSize = {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }[size] as IconProps['size'];

    return (
      <button
        ref={ref}
        className={clsx(iconButton({ variant, size }), className)}
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
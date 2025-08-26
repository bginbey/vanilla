import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { iconButton } from './IconButton.css';
import { Icon } from '../Icon';
import type { IconProps } from '../Icon';
import type { AccentColor } from '../../constants/colors';

/**
 * Available icon button style variants
 */
export type IconButtonVariant = 
  /** Filled background, high emphasis */
  | 'solid'
  /** Border only, medium emphasis */
  | 'outline'
  /** No background or border, low emphasis */
  | 'ghost';

/**
 * Available icon button sizes
 */
export type IconButtonSize = 
  /** Small - compact size for toolbars */
  | 'sm'
  /** Medium - default size for most use cases */
  | 'md'
  /** Large - increased touch target for mobile */
  | 'lg';

// Constants
const ICON_SIZE_MAP: Record<IconButtonSize, IconProps['size']> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

/**
 * Props for the IconButton component
 */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /**
   * The icon to display in the button
   * @example IconPlus, IconClose, IconMenu
   */
  icon: IconProps['icon'];
  
  /**
   * Visual style variant of the button
   * @default 'solid'
   */
  variant?: IconButtonVariant;
  
  /**
   * Size of the button affecting padding and icon size
   * @default 'md'
   */
  size?: IconButtonSize;
  
  /**
   * Accessible label for the button
   * @remarks Required for screen readers since there's no text content
   */
  'aria-label': string;
  
  /**
   * Additional props to pass to the icon component
   */
  iconProps?: Omit<IconProps, 'icon'>;
  
  /**
   * Override the theme accent color for this specific button
   * @default Uses theme accent color
   * @see {@link AccentColor} for available colors
   */
  color?: AccentColor;
}

/**
 * IconButton - Interactive button with only an icon
 * 
 * @description
 * A button component designed specifically for icon-only interactions.
 * Provides the same visual variants as Button but optimized for square
 * icon layouts. Commonly used for toolbars, close buttons, and compact
 * UI actions where text would be redundant or space is limited.
 * 
 * @example
 * ```tsx
 * // Basic icon button
 * <IconButton
 *   icon={IconClose}
 *   aria-label="Close dialog"
 *   onClick={handleClose}
 * />
 * ```
 * 
 * @example
 * ```tsx
 * // Toolbar with icon buttons
 * <Flex gap={2}>
 *   <IconButton icon={IconBold} variant="ghost" aria-label="Bold" />
 *   <IconButton icon={IconItalic} variant="ghost" aria-label="Italic" />
 *   <IconButton icon={IconUnderline} variant="ghost" aria-label="Underline" />
 * </Flex>
 * ```
 * 
 * @example
 * ```tsx
 * // Themed icon button with custom color
 * <IconButton
 *   icon={IconHeart}
 *   variant="outline"
 *   size="lg"
 *   color="red"
 *   aria-label="Add to favorites"
 * />
 * ```
 * 
 * @remarks
 * - Always provide an aria-label for accessibility
 * - Use solid variant for primary actions
 * - Use ghost variant for toolbars and inline actions
 * - Consider touch target size on mobile (prefer 'lg' size)
 * - Icons automatically inherit button color
 * 
 * @see {@link Button} For buttons with text
 * @see {@link Icon} For non-interactive icons
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/button/} ARIA Button Pattern
 */
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
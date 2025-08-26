import React, { forwardRef, ElementType, ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';
import { button, buttonIcon } from './Button.css';
import { Icon } from '../Icon';
import type { IconProps } from '../Icon';
import type { AccentColor } from '../../constants/colors';

/**
 * Available button style variants
 */
export type ButtonVariant = 
  /** Filled background, high emphasis */ 
  | 'solid' 
  /** Border only, medium emphasis */
  | 'outline' 
  /** No background or border, low emphasis */
  | 'ghost';

/**
 * Available button sizes
 */
export type ButtonSize = 
  /** Small - compact size for dense UIs */
  | 'sm' 
  /** Medium - default size for most use cases */
  | 'md' 
  /** Large - increased touch target for mobile or prominent actions */
  | 'lg';

// Constants
const ICON_SIZE_MAP: Record<ButtonSize, IconProps['size']> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

/**
 * Props for the Button component
 */
export interface ButtonOwnProps {
  /**
   * Visual style variant of the button
   * @default 'solid'
   */
  variant?: ButtonVariant;
  
  /**
   * Size of the button affecting padding and font size
   * @default 'md'
   */
  size?: ButtonSize;
  
  /**
   * Whether the button should take the full width of its container
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Render as a different element or component
   * @default 'button'
   * @example 'a' for links, CustomLink for routing
   */
  as?: ElementType;
  
  /**
   * Icon to display on the left side of the button text
   * @example IconPlus, IconArrowLeft
   */
  leftIcon?: IconProps['icon'];
  
  /**
   * Icon to display on the right side of the button text
   * @example IconArrowRight, IconExternalLink
   */
  rightIcon?: IconProps['icon'];
  
  /**
   * Additional props to pass to icon components
   */
  iconProps?: Omit<IconProps, 'icon'>;
  
  /**
   * Override the theme accent color for this specific button
   * @default Uses theme accent color
   * @see {@link AccentColor} for available colors
   */
  color?: AccentColor;
}

// Create a type that combines button props with element props
export type ButtonProps<C extends ElementType = 'button'> = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<C>, keyof ButtonOwnProps>;

// Type for the Button component itself
export interface ButtonComponent {
  <C extends ElementType = 'button'>(
    props: ButtonProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] }
  ): React.ReactElement | null;
  displayName?: string;
}

/**
 * Button - Interactive element for triggering actions
 * 
 * @description
 * A flexible button component that supports multiple visual styles, sizes,
 * and can be rendered as different HTML elements or custom components via
 * the polymorphic `as` prop. Buttons are the primary way users interact
 * with your application.
 * 
 * @example
 * ```tsx
 * // Basic button
 * <Button onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 * 
 * @example
 * ```tsx
 * // Button with icon and custom color
 * <Button
 *   variant="outline"
 *   size="lg"
 *   leftIcon={IconPlus}
 *   color="green"
 * >
 *   Add Item
 * </Button>
 * ```
 * 
 * @example
 * ```tsx
 * // Button as a link
 * <Button as="a" href="/learn-more">
 *   Learn More
 * </Button>
 * ```
 * 
 * @remarks
 * - Use solid variant for primary actions
 * - Use outline variant for secondary actions
 * - Use ghost variant for tertiary actions
 * - Ensure proper contrast ratios for accessibility
 * 
 * @see {@link IconButton} For icon-only buttons
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/button/} ARIA Button Pattern
 */
export const Button: ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      as,
      className,
      variant = 'solid',
      size = 'md',
      fullWidth = false,
      leftIcon,
      rightIcon,
      iconProps,
      color,
      children,
      style,
      ...props
    },
    ref
  ) {
    const Component = as || 'button';
    const iconSize = ICON_SIZE_MAP[size];

    return (
      <Component
        ref={ref}
        className={clsx(button({ variant, size, fullWidth }), className)}
        {...props}
        style={style}
        data-accent-color={color}
      >
        {leftIcon && (
          <Icon
            icon={leftIcon}
            size={iconSize}
            className={buttonIcon.left}
            {...iconProps}
          />
        )}
        {children}
        {rightIcon && (
          <Icon
            icon={rightIcon}
            size={iconSize}
            className={buttonIcon.right}
            {...iconProps}
          />
        )}
      </Component>
    );
  }
) as ButtonComponent;

Button.displayName = 'Button';
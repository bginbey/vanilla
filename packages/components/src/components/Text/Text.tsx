import React, { forwardRef, ElementType, ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';
import { text } from './Text.css';
import type { AccentColor } from '../../constants/colors';

/**
 * Available text size variants
 */
export type TextSize = 
  /** Extra small - 12px */
  | 'xs'
  /** Small - 14px */
  | 'sm'
  /** Base - 16px (default body text) */
  | 'base'
  /** Large - 18px */
  | 'lg'
  /** Extra large - 20px */
  | 'xl'
  /** 2X large - 24px */
  | '2xl'
  /** 3X large - 30px */
  | '3xl'
  /** 4X large - 36px */
  | '4xl'
  /** 5X large - 48px */
  | '5xl';

/**
 * Available font weight variants
 */
export type TextWeight = 
  /** Regular weight - 400 */
  | 'normal'
  /** Medium weight - 500 */
  | 'medium'
  /** Semibold weight - 600 */
  | 'semibold'
  /** Bold weight - 700 */
  | 'bold';

/**
 * Text alignment options
 */
export type TextAlign = 'left' | 'center' | 'right';

/**
 * Semantic colors for text hierarchy
 */
export type SemanticTextColor = 
  /** Primary text - highest emphasis */
  | 'primary'
  /** Secondary text - medium emphasis */
  | 'secondary'
  /** Tertiary text - low emphasis */
  | 'tertiary'
  /** Inverse text - for dark backgrounds */
  | 'inverse';

/**
 * All text color options
 */
export type TextColor = SemanticTextColor | AccentColor;

/**
 * Props for the Text component
 */
export interface TextOwnProps {
  /**
   * Text size variant
   * @default Inherits from parent
   */
  size?: TextSize;
  
  /**
   * Font weight variant
   * @default 'normal'
   */
  weight?: TextWeight;
  
  /**
   * Text color - can be semantic or accent color
   * @default 'primary'
   * @remarks Semantic colors (primary, secondary, etc.) for hierarchy, accent colors for branding
   * @see {@link SemanticTextColor} for hierarchy colors
   * @see {@link AccentColor} for brand colors
   */
  color?: TextColor;
  
  /**
   * Text alignment
   * @default 'left'
   */
  align?: TextAlign;
  
  /**
   * Whether to truncate text with ellipsis
   * @default false
   * @remarks Requires a constrained width to function
   */
  truncate?: boolean;
  
  /**
   * Render as a different element or component
   * @default 'span'
   * @example 'p' for paragraphs, 'h1' for headings
   */
  as?: ElementType;
}

// Create a type that combines text props with element props
export type TextProps<C extends ElementType = 'span'> = TextOwnProps &
  Omit<ComponentPropsWithoutRef<C>, keyof TextOwnProps>;

// Type for the Text component itself
export interface TextComponent {
  <C extends ElementType = 'span'>(
    props: TextProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] }
  ): React.ReactElement | null;
  displayName?: string;
}

/**
 * Text - Typography component for consistent text styling
 * 
 * @description
 * A flexible typography component that provides consistent text styling
 * across your application. Supports semantic HTML elements through the
 * polymorphic `as` prop and offers both semantic colors for hierarchy
 * and accent colors for branding.
 * 
 * @example
 * ```tsx
 * // Basic text
 * <Text size="base" color="primary">
 *   This is primary body text
 * </Text>
 * ```
 * 
 * @example
 * ```tsx
 * // Heading with semantic HTML
 * <Text as="h1" size="4xl" weight="bold">
 *   Page Title
 * </Text>
 * <Text as="p" size="lg" color="secondary">
 *   Subtitle or description text
 * </Text>
 * ```
 * 
 * @example
 * ```tsx
 * // Branded text with accent color
 * <Text size="2xl" weight="semibold" color="blue">
 *   Special announcement
 * </Text>
 * ```
 * 
 * @example
 * ```tsx
 * // Truncated text with ellipsis
 * <Text truncate style={{ maxWidth: '200px' }}>
 *   This is a very long text that will be truncated with ellipsis
 * </Text>
 * ```
 * 
 * @remarks
 * - Use semantic colors (primary, secondary, tertiary) for text hierarchy
 * - Use accent colors for branded or special emphasis text
 * - Always use semantic HTML elements via the `as` prop
 * - Consider readability when choosing size and weight combinations
 * - Truncate requires a width constraint to function properly
 * 
 * @see {@link Button} For interactive text elements
 * @see {@link https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html} WCAG Contrast Guidelines
 */
export const Text: TextComponent = forwardRef<HTMLSpanElement, TextProps>(
  function Text(
    {
      as,
      className,
      size,
      weight,
      color,
      align,
      truncate,
      ...props
    },
    ref
  ) {
    const Component = as || 'span';

    // Determine if color is semantic or accent
    const isSemanticColor = color && ['primary', 'secondary', 'tertiary', 'inverse'].includes(color);
    const semanticColor = isSemanticColor ? color as SemanticTextColor : undefined;
    const accentColor = !isSemanticColor ? color as AccentColor : undefined;

    return (
      <Component
        ref={ref}
        className={clsx(text({ size, weight, color: semanticColor, align, truncate }), className)}
        data-accent-color={accentColor}
        {...props}
      />
    );
  }
) as TextComponent;

Text.displayName = 'Text';
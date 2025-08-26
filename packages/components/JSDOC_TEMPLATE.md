# JSDoc Template for Components

This file provides standard JSDoc templates for documenting components in the Vanilla Design System.

## Component Documentation Template

```typescript
/**
 * [ComponentName] - [Brief one-line description]
 * 
 * @description
 * [Detailed description of the component's purpose, behavior, and use cases.
 * Explain what problem it solves and when to use it.]
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <ComponentName prop="value">
 *   Content
 * </ComponentName>
 * ```
 * 
 * @example
 * ```tsx
 * // Advanced usage with multiple props
 * <ComponentName
 *   variant="outline"
 *   size="lg"
 *   onClick={handleClick}
 * >
 *   Advanced Example
 * </ComponentName>
 * ```
 * 
 * @remarks
 * [Any important notes, limitations, or considerations]
 * 
 * @see {@link https://example.com/design/component} Design Guidelines
 * @see {@link RelatedComponent} Related component
 */
export const ComponentName = ...
```

## Props Interface Documentation Template

```typescript
/**
 * Props for the [ComponentName] component
 */
export interface ComponentNameProps {
  /**
   * [Prop description - what it does and when to use it]
   * @default '[default value]'
   */
  propName?: PropType;
  
  /**
   * [Required prop description]
   */
  requiredProp: RequiredType;
  
  /**
   * [Prop with multiple possible values]
   * @default 'default'
   * @see {@link TypeName} for available options
   */
  variant?: 'default' | 'alternate' | 'special';
  
  /**
   * [Callback prop description]
   * @param event - The event object
   * @returns void
   */
  onClick?: (event: React.MouseEvent) => void;
  
  /**
   * [Complex prop with detailed explanation]
   * @remarks
   * This prop affects X, Y, and Z behaviors. Use carefully when...
   */
  complexProp?: ComplexType;
}
```

## Type Export Documentation Template

```typescript
/**
 * Available variants for the [ComponentName] component
 */
export type ComponentVariant = 'solid' | 'outline' | 'ghost';

/**
 * Size options for the [ComponentName] component
 * @remarks
 * Sizes affect padding, font-size, and icon scaling
 */
export type ComponentSize = 'sm' | 'md' | 'lg';
```

## Real Example - Button Component

```typescript
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
export const Button = ...

/**
 * Props for the Button component
 */
export interface ButtonProps {
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
   * @example 'a' for links, CustomComponent for routing
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
   * Override the theme accent color for this specific button
   * @default Uses theme accent color
   * @see {@link AccentColor} for available colors
   */
  color?: AccentColor;
  
  /**
   * Whether the button is disabled
   * @default false
   * @remarks Disabled buttons cannot be interacted with and have reduced opacity
   */
  disabled?: boolean;
}

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
```

## Guidelines

1. **Always include**:
   - Component-level JSDoc with description
   - At least one @example
   - @default values for optional props
   - Clear prop descriptions

2. **When applicable, include**:
   - @remarks for important notes
   - @see links to related components or docs
   - @deprecated for deprecated features
   - Parameter descriptions for callbacks

3. **Best practices**:
   - Start prop descriptions with what it does, not what it is
   - Use active voice ("Controls the..." not "The control for...")
   - Include units for numeric props (px, ms, etc.)
   - Explain the impact of the prop on behavior or appearance
   - Reference type definitions with @see when complex

4. **For Storybook autodocs**:
   - Examples will be shown in the docs
   - Default values appear in the props table
   - Descriptions appear in props table and on hover
   - Component description appears at the top of the doc page
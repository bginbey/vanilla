# Vanilla Component Patterns

This document outlines the core patterns used throughout the Vanilla component library. These patterns ensure consistency, maintainability, and a predictable developer experience.

## Core Philosophy

1. **Semantic CSS Variables** - Use meaningful variable names that describe purpose, not appearance
2. **Data Attributes for Customization** - Leverage data attributes for component-level theming
3. **Progressive Enhancement** - Start with base styles, layer on variants and overrides
4. **Type Safety** - Single source of truth for types, exported for consumer use

## Component Structure

Every component follows this consistent structure:

```
components/
  ComponentName/
    ComponentName.tsx       # Component implementation
    ComponentName.css.ts    # Styles using vanilla-extract
    index.ts               # Public exports
```

## CSS Architecture Pattern

Component CSS files follow this three-layer pattern:

### 1. Base Recipe with Semantic Variables
Define the component's base styles and variants using vanilla-extract recipes:

```typescript
export const button = recipe({
  base: {
    // Use semantic CSS variables that can be overridden
    backgroundColor: 'var(--button-accent-base, var(--color-accent-base))',
    color: 'var(--button-accent-text, var(--color-accent-text))',
    // ... other base styles
  },
  variants: {
    variant: { solid: {}, outline: {}, ghost: {} },
    size: { sm: {}, md: {}, lg: {} }
  }
});
```

### 2. Style Variants for Sub-elements
Define additional styles for component parts:

```typescript
export const buttonIcon = styleVariants({
  left: { marginRight: '-0.125rem' },
  right: { marginLeft: '-0.125rem' }
});
```

### 3. Data Attribute Overrides
Use globalStyle to create CSS variable overrides based on data attributes:

```typescript
ACCENT_COLORS.forEach((color) => {
  globalStyle(`[data-accent-color="${color}"]`, {
    vars: {
      '--button-accent-base': `var(--${color}-9)`,
      '--button-accent-hover': `var(--${color}-10)`,
      '--button-accent-text': 'white',
      // ... other overrides
    }
  });
});
```

## Color Override Pattern

The color override pattern allows components to accept a `color` prop that overrides the theme's accent color for that specific component instance.

### Implementation in Component

```typescript
export interface ButtonProps {
  color?: AccentColor;  // Import from constants/colors
  // ... other props
}

export const Button = ({ color, ...props }) => {
  return (
    <button
      data-accent-color={color}  // Apply as data attribute
      {...props}
    />
  );
};
```

### CSS Variable Naming Convention

Component-specific CSS variables follow this pattern:
- `--[component]-[semantic]-[state]`

Examples:
- `--button-accent-base` - Base accent color for buttons
- `--button-accent-hover` - Hover state accent color
- `--input-border-focus` - Focus state border for inputs

The fallback pattern ensures theme defaults are used when no override is present:
- `var(--button-accent-base, var(--color-accent-base))`

## Type Definitions

All color and theme-related types are defined in `constants/colors.ts`:

```typescript
// Single source of truth for colors
export const ACCENT_COLORS = ['blue', 'green', ...] as const;
export type AccentColor = typeof ACCENT_COLORS[number];

export const GRAY_COLORS = ['gray', 'mauve', ...] as const;
export type GrayColor = typeof GRAY_COLORS[number];
```

Components import these types rather than defining their own:

```typescript
import type { AccentColor } from '../../constants/colors';
```

## Component API Consistency

### Props that all themeable components should support:
- `color?: AccentColor` - Override the accent color
- `variant?: 'solid' | 'outline' | 'ghost'` - Visual variant (component-specific options)
- `size?: 'sm' | 'md' | 'lg'` - Size variant
- `fullWidth?: boolean` - Whether to take full container width
- `className?: string` - Additional CSS classes
- `style?: CSSProperties` - Inline styles

### Example Usage

```tsx
// Uses theme accent color (blue)
<Button>Default</Button>

// Override with specific color
<Button color="crimson">Crimson</Button>

// Consistent across all components
<Input color="green" />
<Select color="amber" />
<Checkbox color="violet" />
```

## Benefits of This Pattern

1. **Predictable** - Developers can guess the API
2. **Performant** - All styling is CSS-based, no runtime overhead
3. **Debuggable** - Easy to inspect in DevTools
4. **Extensible** - Adding new colors is trivial
5. **Consistent** - Same pattern everywhere
6. **Type-safe** - TypeScript ensures valid colors
7. **Theme-aware** - Respects theme while allowing overrides

## Adding a New Component

When creating a new component that supports color overrides:

1. Import color types from `constants/colors`
2. Add `color?: AccentColor` prop
3. Apply `data-accent-color={color}` to root element
4. Define CSS variables using the component name prefix
5. Use globalStyle to create override rules for each color
6. Follow the three-layer CSS pattern

## Example: Adding Color Support to Input

```typescript
// Input.tsx
import type { AccentColor } from '../../constants/colors';

export interface InputProps {
  color?: AccentColor;
  // ... other props
}

export const Input = ({ color, ...props }) => {
  return <input data-accent-color={color} {...props} />;
};

// Input.css.ts
ACCENT_COLORS.forEach((color) => {
  globalStyle(`[data-accent-color="${color}"]`, {
    vars: {
      '--input-border-focus': `var(--${color}-8)`,
      '--input-outline-focus': `var(--${color}-7)`,
    }
  });
});
```

## Non-Goals

This pattern intentionally avoids:
- Creating abstraction layers over CSS
- Generating styles dynamically at runtime
- Using complex utility functions
- Making components overly configurable

The goal is a simple, consistent pattern that leverages web platform features effectively.
# Storybook Story Patterns

## Overview
This document defines the standardized approach for writing Storybook stories in the Vanilla Design System. All components should follow these patterns to ensure consistency, predictability, and maintainability.

## Core Principles

1. **Minimal**: Each story should have a single, clear purpose
2. **Consistent**: Same story names and structure across all components
3. **Predictable**: Developers know exactly what stories to expect
4. **Interactive**: Props story allows full exploration of the component

## Standard Story Structure

Every component should have these stories (when applicable):

### 1. Default
**Purpose**: Show the component in its simplest form with minimal props  
**Implementation**: Only required props, no extra configuration  
```typescript
export const Default: Story = {
  args: {
    children: 'Button', // or other minimal required props
  },
};
```

### 2. Props
**Purpose**: Interactive playground for exploring all component props  
**Implementation**: All props with reasonable defaults, full argTypes configuration  
```typescript
export const Props: Story = {
  args: {
    children: 'Interactive playground',
    variant: 'solid',
    size: 'md',
    disabled: false,
    // ... all other props with defaults
  },
};
```

### 3. Variants
**When to include**: Only if component has a `variant` prop  
**Purpose**: Show all variant options side-by-side for comparison  
```typescript
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Component variant="solid">Solid</Component>
      <Component variant="outline">Outline</Component>
      <Component variant="ghost">Ghost</Component>
    </div>
  ),
};
```

### 4. Sizes
**When to include**: Only if component has a `size` prop  
**Purpose**: Show all size options side-by-side for comparison  
```typescript
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Component size="sm">Small</Component>
      <Component size="md">Medium</Component>
      <Component size="lg">Large</Component>
    </div>
  ),
};
```

### 5. States
**When to include**: Only for interactive components (forms, buttons, etc.)  
**Purpose**: Show different states (normal, disabled, error, loading, etc.)  
```typescript
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Component>Normal</Component>
      <Component disabled>Disabled</Component>
      <Component error>Error</Component>
      <Component loading>Loading</Component>
    </div>
  ),
};
```

### 6. Colors
**When to include**: Only if component has a `color` prop for theming  
**Purpose**: Show theme color customization options  
```typescript
export const Colors: Story = {
  render: () => {
    const colors: AccentColor[] = ['blue', 'green', 'red', 'amber', 'violet', 'teal'];
    
    return (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {colors.map(color => (
          <Component key={color} color={color}>
            {color}
          </Component>
        ))}
      </div>
    );
  },
};
```

## What NOT to Include

### Avoid These Story Types:
- **WithIcons** - Props story can demonstrate this
- **Controlled** - Props story is already interactive
- **WithLabel** - Props story can show this
- **FullWidth** - Props story has this control
- **AsLink** - Props story can demonstrate polymorphic behavior
- **RealWorldExample** - Keep stories focused on the component itself
- **ComplexLayout** - Too specific, not reusable learning

### Exceptions:
Only add additional stories if they demonstrate:
- A unique pattern that can't be shown in Props
- Critical accessibility features
- Complex component composition that needs explanation

## Component Categories

### Interactive Components (Button, Input, Select, etc.)
Should typically have: Default, Props, Variants, Sizes, States, Colors

### Layout Components (Box, Flex, Grid, etc.)
Should typically have: Default, Props
(Usually no variants, sizes, or colors)

### Display Components (Text, Icon, etc.)
Should typically have: Default, Props, Sizes, Colors
(May not have variants or states)

### Special Components (Theme, Provider, etc.)
May not follow this pattern - document their unique purpose

## ArgTypes Configuration

All stories should have comprehensive argTypes for the Props story:

```typescript
argTypes: {
  variant: {
    control: 'select',
    options: ['solid', 'outline', 'ghost'],
  },
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg'],
  },
  disabled: {
    control: 'boolean',
  },
  color: {
    control: 'select',
    options: [/* all color options */],
  },
  // ... other props
}
```

## File Organization

```
stories/
├── ComponentName.stories.tsx    # Story definitions
├── ComponentName.mdx            # Only if extra docs needed (rare)
└── Introduction.mdx             # Welcome page (keep this)
```

## Migration Checklist

When updating an existing component's stories:

- [ ] Remove all stories not in the standard structure
- [ ] Add Default story (minimal props)
- [ ] Add Props story (interactive playground)
- [ ] Add Variants story (if applicable)
- [ ] Add Sizes story (if applicable)
- [ ] Add States story (if interactive)
- [ ] Add Colors story (if themeable)
- [ ] Ensure argTypes are comprehensive
- [ ] Remove any .mdx file (unless special case)
- [ ] Test all stories render correctly

## Examples

### Good Example: Button
```typescript
// Button has: variant, size, disabled, color props
// Stories: Default, Props, Variants, Sizes, States, Colors ✅
```

### Good Example: Input  
```typescript
// Input has: variant, error, disabled, color props (no size)
// Stories: Default, Props, Variants, States, Colors ✅
```

### Good Example: Flex
```typescript
// Flex is a layout component with many props but no variant/size/color
// Stories: Default, Props ✅
```

## Summary

- **Maximum 6 stories per component** (most will have 3-4)
- **Consistent naming** across all components
- **Props story is the playground** - no need for multiple examples
- **Each story has one clear purpose**
- **Remove everything else** unless it's truly unique and valuable

This approach reduces story count by ~60% while improving consistency and usability.
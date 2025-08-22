# Button Component

## Overview

The Button component is a flexible, accessible button implementation that supports multiple variants, sizes, and now theme color overrides.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'outline' \| 'ghost'` | `'solid'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `fullWidth` | `boolean` | `false` | Whether button takes full width |
| `color` | `AccentColor` | - | Override theme accent color |
| `as` | `ElementType` | `'button'` | Polymorphic component prop |
| `leftIcon` | `IconProps['icon']` | - | Icon to display on the left |
| `rightIcon` | `IconProps['icon']` | - | Icon to display on the right |
| `iconProps` | `Omit<IconProps, 'icon'>` | - | Props passed to icon components |

## Color Override

The `color` prop allows you to override the theme's accent color for a specific button:

```tsx
// Uses theme accent color (default)
<Button>Default</Button>

// Override with specific color
<Button color="crimson">Crimson</Button>
<Button color="grass">Grass</Button>
```

### Available Colors

All 25 accent colors are available:
- Core: `blue`, `green`, `red`, `yellow`, `orange`, `purple`
- Warm: `gold`, `bronze`, `brown`, `amber`, `tomato`, `ruby`, `crimson`
- Cool: `pink`, `plum`, `violet`, `iris`, `indigo`, `cyan`, `teal`, `jade`, `grass`, `lime`, `mint`, `sky`

## Theming

The Button component uses semantic color tokens that automatically adapt to the theme:

### Color Tokens Used

- **Solid variant:**
  - Background: `--color-accent-base` (accent-9)
  - Hover: `--color-accent-hover` (accent-10)
  - Text: `--color-accent-text` (white)

- **Outline variant:**
  - Text: `--color-accent-active` (accent-11)
  - Border: `--color-border-hover` (gray-7)
  - Hover border: `--color-border-focus` (accent-8)
  - Hover background: `--color-accent-surface` (accent-3)

- **Ghost variant:**
  - Text: `--color-text` (gray-12)
  - Hover background: `--color-surface` (gray-3)

- **Focus state:**
  - Ring: `--color-focus-ring` (accent-8)

## Examples

### Basic Usage
```tsx
<Button variant="solid">Click me</Button>
<Button variant="outline">Click me</Button>
<Button variant="ghost">Click me</Button>
```

### With Theme
```tsx
<Theme accentColor="purple">
  <Button>Purple theme</Button>
  <Button color="green">Green override</Button>
</Theme>
```

### With Icons
```tsx
<Button leftIcon={PlusIcon}>Add Item</Button>
<Button rightIcon={ArrowRightIcon}>Continue</Button>
```

## Accessibility

- Proper focus states with visible focus ring
- Keyboard navigation support
- Disabled state handling
- ARIA attributes preserved when using `as` prop
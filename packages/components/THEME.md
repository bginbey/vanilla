# Vanilla Design System - Theme Specification

## Overview

The Vanilla Design System theme provides a comprehensive color system with support for 30 color scales from Radix UI Colors, automatic color pairing, and flexible theming options.

## Theme Component API

### Props

```typescript
interface ThemeProps {
  accentColor?: AccentColor;      // Default: 'blue'
  grayColor?: GrayColor;          // Default: 'auto'
  appearance?: Appearance;        // Default: 'inherit'
  panelBackground?: PanelBackground; // Default: 'solid'
  scaling?: Scaling;              // Default: '100%'
  radius?: Radius;                // Default: 'medium'
  highContrast?: boolean;         // Default: false
  className?: string;
  asChild?: boolean;              // Default: false
}
```

## Color System

### Accent Colors (25 colors)

**Core Colors:**
- `blue`, `green`, `red`, `yellow`, `orange`, `purple`

**Warm Colors:**
- `gold`, `bronze`, `brown`, `amber`, `tomato`, `ruby`, `crimson`

**Cool Colors:**
- `pink`, `plum`, `violet`, `iris`, `indigo`, `cyan`, `teal`
- `jade`, `grass`, `lime`, `mint`, `sky`

### Gray Colors (6 colors + auto)

- `gray` - Pure gray, no tint
- `mauve` - Gray with purple tint
- `slate` - Gray with blue tint
- `sage` - Gray with green tint
- `olive` - Gray with yellow-green tint
- `sand` - Gray with yellow tint
- `auto` - Automatically pairs with accent color (default)

### Automatic Gray Pairing

When `grayColor="auto"` (default), the theme automatically selects a complementary gray:

| Accent Colors | Paired Gray |
|--------------|-------------|
| blue, sky, cyan, indigo | slate |
| purple, violet, plum, pink | mauve |
| green, grass, jade, mint | sage |
| yellow, amber, orange, brown | sand |
| lime, teal, olive | olive |
| red, ruby, crimson, tomato, gold, bronze, iris | gray |

## CSS Variables

### Dynamic Color Mapping

The theme dynamically maps color scales to CSS variables:

```css
/* Accent color variables */
--accent-1 through --accent-12    /* Solid colors */
--accent-a1 through --accent-a12  /* Alpha colors */

/* Gray color variables */
--gray-1 through --gray-12        /* Solid colors */
--gray-a1 through --gray-a12      /* Alpha colors */
```

### Semantic Color Tokens

```css
/* Background colors */
--color-background          /* App background (gray-1) */
--color-panel              /* Panel background (gray-2) */
--color-overlay            /* Modal overlay (blackA-8) */

/* Surface colors */
--color-surface            /* UI element background (gray-3) */
--color-surface-hover      /* Hover state (gray-4) */
--color-surface-active     /* Active state (gray-5) */

/* Text colors */
--color-text               /* Primary text (gray-12) */
--color-text-secondary     /* Secondary text (gray-11) */
--color-text-tertiary      /* Tertiary text (gray-10) */
--color-text-disabled      /* Disabled text (gray-8) */

/* Border colors */
--color-border             /* Default border (gray-6) */
--color-border-hover       /* Hover border (gray-7) */
--color-border-focus       /* Focus border (accent-8) */

/* Interactive colors */
--color-accent-base        /* Primary action (accent-9) */
--color-accent-hover       /* Hover state (accent-10) */
--color-accent-active      /* Active state (accent-11) */
--color-accent-text        /* Text on accent (white) */

/* Accent surface colors */
--color-accent-surface     /* Subtle background (accent-3) */
--color-accent-surface-hover /* Hover (accent-4) */
--color-accent-surface-active /* Active (accent-5) */

/* Other */
--color-selection          /* Text selection (accent-a5) */
--color-selection-text     /* Selection text (inherit) */
--color-focus-ring         /* Focus ring (accent-8) */
```

### High Contrast Mode

When `highContrast={true}`, the following adjustments are made:
- Borders use steps 8-9 instead of 6-7
- Text secondary becomes full contrast (gray-12)
- Accent colors use steps 11-12 instead of 9-10
- Focus rings use accent-11

### Translucent Panels

When `panelBackground="translucent"`, panels use alpha colors:
- Panel: gray-a2
- Surface: gray-a3
- Surface hover: gray-a4
- Surface active: gray-a5

## Usage Examples

### Basic Theme
```tsx
<Theme>
  {/* Uses blue accent with auto-paired slate gray */}
</Theme>
```

### Custom Colors
```tsx
<Theme accentColor="crimson" grayColor="sand">
  {/* Crimson accent with warm sand gray */}
</Theme>
```

### High Contrast
```tsx
<Theme accentColor="green" highContrast>
  {/* Higher contrast for accessibility */}
</Theme>
```

### Nested Themes
```tsx
<Theme accentColor="blue">
  <div>
    {/* Blue theme */}
    <Theme accentColor="purple" asChild>
      <div>{/* Purple theme */}</div>
    </Theme>
  </div>
</Theme>
```

## Implementation Details

### Color Import
The theme requires importing the color CSS from `@beauginbey/vanilla-colors`:
```typescript
import '@beauginbey/vanilla-colors/css';
```

### Dynamic CSS Variables
Instead of hardcoding selectors for each color, the theme uses inline styles to dynamically map color variables:
```typescript
style={{
  '--accent-1': `var(--${accentColor}-1)`,
  '--gray-1': `var(--${resolvedGrayColor}-1)`,
  // ... etc
}}
```

This approach ensures:
- Support for any color scale without code changes
- Smaller CSS bundle size
- Better maintainability
- Future-proof design

## Migration Guide

### From Previous Version
If you were using the theme without specifying `grayColor`, the behavior changes:
- **Before**: Always used pure `gray`
- **Now**: Uses `auto` which pairs with your accent color

To maintain the old behavior:
```tsx
<Theme grayColor="gray">
```

### Color Names
All color names match Radix UI Colors exactly, ensuring compatibility with their ecosystem and documentation.
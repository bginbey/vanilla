# @beauginbey/vanilla-colors

A comprehensive color system inspired by Radix UI Colors, providing accessible color scales with automatic dark mode support.

## Installation

```bash
npm install @beauginbey/vanilla-colors
```

## Usage

### CSS Variables

Import the CSS file to use color variables:

```css
/* Import all colors */
@import "@beauginbey/vanilla-colors/css";

/* Or import specific colors */
@import "@beauginbey/vanilla-colors/css/gray.css";
@import "@beauginbey/vanilla-colors/css/blue.css";
```

Then use the CSS variables in your styles:

```css
.component {
  background: var(--gray-1);  /* App background */
  color: var(--gray-12);      /* High-contrast text */
  border: 1px solid var(--gray-7); /* UI element border */
}

/* Dark mode automatically applied with .dark class */
.dark .component {
  /* Variables automatically switch to dark values */
}
```

### JavaScript/TypeScript

```typescript
import { gray, blue, green } from '@beauginbey/vanilla-colors';

// Use in CSS-in-JS
const styles = {
  backgroundColor: gray[1],
  color: gray[12],
  borderColor: gray[7],
};
```

## The 12-Step Scale

Each color scale has 12 steps with specific use cases:

### Background Colors (Steps 1-5)
- **Step 1**: App background
- **Step 2**: Subtle background
- **Step 3**: UI element background
- **Step 4**: Hovered UI element background
- **Step 5**: Active/selected UI element background

### Border Colors (Steps 6-8)
- **Step 6**: Subtle borders and separators
- **Step 7**: UI element border and focus rings
- **Step 8**: Hovered UI element border

### Solid Colors (Steps 9-10)
- **Step 9**: Solid backgrounds (buttons, badges)
- **Step 10**: Hovered solid backgrounds

### Text Colors (Steps 11-12)
- **Step 11**: Low-contrast text
- **Step 12**: High-contrast text

## Available Colors

### Neutrals
- `gray`, `grayA` - Default neutral scale

### Colors
- `blue`, `blueA` - Primary brand color
- `green`, `greenA` - Success states
- `red`, `redA` - Error/danger states
- `yellow`, `yellowA` - Warning states (dark text)
- `orange`, `orangeA` - Alternative accent (dark text)
- `purple`, `purpleA` - Secondary accent

### Overlays
- `blackA` - Black with alpha
- `whiteA` - White with alpha

## Dark Mode

Dark mode is automatically enabled when the `.dark` class is applied to the document:

```javascript
// Enable dark mode
document.documentElement.classList.add('dark');

// Disable dark mode
document.documentElement.classList.remove('dark');
```

## Creating Custom Scales

Generate custom color scales from your brand colors:

```typescript
import { createCustomScale } from '@beauginbey/vanilla-colors';

const brandColors = createCustomScale({
  name: 'brand',
  baseColor: '#5B21B6', // Your brand color
});

// Returns:
// - brand (light scale)
// - brandDark (dark scale)
// - brandA (light alpha)
// - brandDarkA (dark alpha)
```

## Accessibility

All color scales are designed with APCA (Accessible Perceptual Contrast Algorithm) to ensure:
- Step 11 has Lc 60 contrast against step 2 (for body text)
- Step 12 has Lc 90 contrast against step 2 (for headings)
- Step 9 is optimized for white foreground text

## Integration with Vanilla Extract

```typescript
import { vars } from './theme.css';

// Map to CSS variables
export const theme = {
  color: {
    gray1: 'var(--gray-1)',
    gray2: 'var(--gray-2)',
    // ... etc
  }
};
```
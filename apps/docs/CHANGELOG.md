# @beauginbey/vanilla-docs

## 0.0.5

### Patch Changes

- Add IconButton component and documentation improvements

  - Add new IconButton component with solid, outline, and ghost variants
  - Fix icon rendering issues in components
  - Reorganize documentation with individual component pages
  - Add theme toggle functionality to docs
  - Improve LiveExample component with padding
  - Style improvements for docs navigation

- a020ccf: feat: Add flexible Icon component system

  - New Icon component with support for any icon library
  - Size presets (xs, sm, md, lg, xl) and custom sizes
  - Color integration with new color system (semantic colors and scale values)
  - IconProvider for global icon configuration
  - Button integration with leftIcon and rightIcon props
  - Full accessibility support with ARIA labels
  - Storybook stories and documentation

- Updated dependencies
- Updated dependencies [a020ccf]
  - @beauginbey/vanilla-components@1.3.0

## 0.0.4

### Patch Changes

- 2b01cec: Introduce new color system package and migrate to Radix UI Colors approach

  ### @beauginbey/vanilla-colors (New Package)

  - 🎨 New color system package with 12-step scales inspired by Radix UI Colors
  - 🌓 Automatic dark mode support with `.dark` class
  - 🎯 APCA contrast calculations for accessibility
  - 📦 CSS variables and JS/TS exports
  - 🌈 Includes gray, blue, green, red, yellow, orange, and purple scales

  ### @beauginbey/vanilla-components

  - 💔 BREAKING: Removed `light`, `cream`, and `dark` theme exports
  - 🔄 Migrated all components to use new color scales
  - ✨ Single `theme` export that works with CSS variables
  - 🎨 Updated color props to use semantic values (primary=12, secondary=11, etc.)

  ### Other packages

  - Updated to use new color system
  - Removed references to old themes
  - Documentation updated to reflect new approach

- Updated dependencies [2b01cec]
  - @beauginbey/vanilla-colors@0.1.0
  - @beauginbey/vanilla-components@1.2.0
  - @beauginbey/vanilla-tokens@1.1.1

## 0.0.3

### Patch Changes

- Updated dependencies
- Updated dependencies
  - @beauginbey/vanilla-tokens@1.1.0
  - @beauginbey/vanilla-components@1.1.1

## 0.0.2

### Patch Changes

- Updated dependencies
  - @beauginbey/vanilla-components@1.1.0

## 0.0.1

### Patch Changes

- Updated dependencies
  - @beauginbey/vanilla-components@1.0.1

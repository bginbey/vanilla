# @beauginbey/vanilla-tokens

## 1.1.1

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

## 1.1.0

### Minor Changes

- Add animation tokens (durations and easings), enhance shadow tokens, and add theme-specific token variations

## 1.0.0

### Major Changes

- Initial release of Vanilla Design System

  ### Features

  - **@beauginbey/vanilla-tokens**: Design tokens powered by Style Dictionary
    - Color system with primitive and semantic colors
    - Typography scales and font families
    - Spacing system
    - Border radius tokens
    - Shadow tokens
    - Outputs: CSS variables, JavaScript/TypeScript constants, SCSS variables
  - **@beauginbey/vanilla-components**: React component library
    - Box: Polymorphic layout component with sprinkles system
    - Button: Accessible button with 3 variants and 3 sizes
    - Text: Typography component with semantic styles
    - Built with vanilla-extract for zero-runtime CSS
    - Full TypeScript support with polymorphic components
    - WCAG compliant accessibility

# @beauginbey/vanilla-components

## 1.3.0

### Minor Changes

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

## 1.2.0

### Minor Changes

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

## 1.1.1

### Patch Changes

- Fix Button component svg background on hover state

## 1.1.0

### Minor Changes

- Added new form components and utilities:

  - **Input**: Text input component with variants (outline, filled, unstyled), error states, and full width option
  - **Select**: Dropdown select component with custom styling and icon
  - **Checkbox**: Checkbox with label support, indeterminate state, and two variants (default, rounded)
  - **Radio**: Radio button component with label support and error states
  - **Switch**: Toggle switch component with three sizes (sm, md, lg) and smooth animations
  - **FormField**: Form field wrapper providing labels, helper text, error messages, and accessibility features

  All components include:

  - Full TypeScript support
  - Comprehensive test coverage
  - Accessibility features (ARIA attributes, keyboard navigation)
  - Theme support with proper token usage
  - Storybook documentation

## 1.0.1

### Patch Changes

- Fix theme styling and add new cream theme

  - Fixed CSS import path in package.json exports
  - Added new 'cream' theme with Uber-inspired minimal aesthetics
  - Renamed 'lightTheme' to 'light' for consistency
  - Fixed theme application to use document root for proper CSS variable scoping
  - Updated global styles to work within theme context
  - Added theme switching functionality in documentation

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

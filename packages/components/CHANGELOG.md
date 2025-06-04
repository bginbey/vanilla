# @beauginbey/vanilla-components

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

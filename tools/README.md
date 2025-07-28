# Vanilla Design System Tools

This directory contains development tools and utilities for the Vanilla Design System.

## Figma Plugins

### Token Importer (`figma-plugins/token-importer`)
Imports design tokens from the Vanilla Design System into Figma as Variables.
- Colors (with light/dark modes)
- Typography scales
- Spacing values
- Effects (shadows, radii)
- Animation tokens

### Component Importer (`figma-plugins/component-importer`)
Generates Figma components from React component definitions.
- Maps component props to Figma variants
- Creates proper component structure with Auto Layout
- Binds design tokens as Variables
- Maintains parity with code implementation

### Shared Utilities (`figma-plugins/shared`)
Common utilities and helpers used by both plugins.

## Development

Each plugin is built with:
- TypeScript
- Figma Plugin API
- Webpack for bundling

See individual plugin directories for specific setup instructions.
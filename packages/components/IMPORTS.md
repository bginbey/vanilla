# Import Guidelines for @beauginbey/vanilla-components

This document outlines the proper way to import and use the Vanilla Components library.

## Standard Import Pattern

Always use package imports, never relative paths to the source or dist directories.

### Component Imports

```typescript
// ✅ Correct - Import components from the main package
import { Button, Box, Text, Theme } from '@beauginbey/vanilla-components';

// Note: RadixTheme is deprecated, use Theme instead
import { RadixTheme } from '@beauginbey/vanilla-components'; // ⚠️ Deprecated

// ❌ Wrong - Don't import from source files
import { Button } from '../packages/components/src/components/Button';

// ❌ Wrong - Don't import from dist files
import { Button } from '../packages/components/dist/index.js';
```

### Style Imports

The library provides pre-built CSS that must be imported in your application:

```typescript
// ✅ Correct - Import styles using the package export
import '@beauginbey/vanilla-components/styles.css';

// ❌ Wrong - Don't use relative paths
import '../../../packages/components/dist/styles.css';

// ❌ Wrong - Don't import individual component styles
import '../packages/components/src/components/Button/Button.css';
```

### Complete Setup Example

```typescript
// In your app's root file (e.g., _app.tsx, main.tsx, or App.tsx)
import React from 'react';
import { Theme } from '@beauginbey/vanilla-components';
import '@beauginbey/vanilla-components/styles.css';
import '@beauginbey/vanilla-colors/css'; // For color system CSS variables

function App() {
  return (
    <Theme>
      {/* Your app content */}
    </Theme>
  );
}
```

## For Storybook

Storybook should consume the library exactly like any other application:

```typescript
// .storybook/preview.tsx
import type { Preview } from '@storybook/react';
import { theme } from '@beauginbey/vanilla-components';
import '@beauginbey/vanilla-components/styles.css';
import '@beauginbey/vanilla-colors/css';
```

## Package Exports

The library provides the following exports:

- **Main export** (`@beauginbey/vanilla-components`): All components and utilities
- **Styles export** (`@beauginbey/vanilla-components/styles.css`): All component styles

## Build System

The library uses a proper build pipeline that generates:
- CommonJS files (`.js`) for Node.js compatibility
- ES Modules (`.mjs`) for modern bundlers
- TypeScript definitions (`.d.ts`, `.d.mts`)
- CSS files with source maps

A build validation script ensures all required files are generated correctly.

## Development Workflow

When developing:

1. Run `pnpm dev` in the components package for watch mode
2. Run `pnpm dev` in your app/Storybook to see changes
3. The build system handles all transformations automatically

## Common Issues

### Issue: "Failed to fetch dynamically imported module"
**Solution**: Ensure you've built the components package (`pnpm build`) and are using package imports, not relative paths.

### Issue: Styles not loading
**Solution**: Make sure you're importing `@beauginbey/vanilla-components/styles.css` in your app's entry point.

### Issue: TypeScript errors
**Solution**: The package includes TypeScript definitions. Ensure your `tsconfig.json` includes the `node_modules` directory.

## Summary

- Always use package imports (`@beauginbey/vanilla-components`)
- Import styles once at your app's entry point
- Let the build system handle all transformations
- No special configuration needed for consumers
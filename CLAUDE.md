# Vanilla Design System - Project Summary

## Overview
A modern design system built with React, TypeScript, and vanilla-extract, featuring a monorepo structure, comprehensive design tokens, accessible components, and full documentation.

## Project Structure
```
vanilla/
├── packages/
│   ├── tokens/          # Design tokens (Style Dictionary)
│   ├── components/      # React component library
│   └── utils/          # Shared utilities
├── apps/
│   ├── storybook/      # Component documentation
│   └── docs/           # Nextra documentation site
└── configuration files
```

## Key Features Implemented

### 1. Monorepo Setup
- **Package Manager**: pnpm with workspaces
- **Build System**: Turbo for parallel builds and caching
- **Dependencies**: Shared at root level for consistency

### 2. Design Tokens (@vanilla/tokens)
- **Tool**: Style Dictionary
- **Tokens**: Colors (primitive + semantic), typography, spacing, radii, shadows, animations (durations + easings)
- **Outputs**: CSS variables, JS/TS constants, SCSS variables
- **Build**: `pnpm build` generates token artifacts
- **Features**:
  - Light and dark theme tokens
  - Animation duration tokens (fast: 150ms, normal: 250ms, slow: 500ms)
  - Easing function tokens (ease-in-out, ease-out, spring)
  - Enhanced shadow tokens for depth
  - Theme-specific semantic colors

### 3. Component Library (@vanilla/components)
- **Framework**: React 18 with TypeScript
- **Styling**: vanilla-extract (zero-runtime CSS-in-JS)
- **Components**:
  - `Box`: Polymorphic layout component with Sprinkles system
  - `Button`: 3 variants (solid, outline, ghost), 3 sizes, full accessibility, hover state fixes
  - `Text`: Typography component with semantic styles
  - `Input`: Text input with variants (outline, filled, unstyled), error states
  - `Select`: Dropdown with custom styling and icon
  - `Checkbox`: Accessible checkbox with custom styling
  - `Radio`: Radio button with group support
  - `Switch`: Toggle switch component
  - `FormField`: Wrapper with label and error handling
- **Features**: 
  - Polymorphic components (as prop)
  - Full TypeScript support
  - Responsive props
  - WCAG compliant
  - Dark mode support
  - Animation tokens integration

### 4. Documentation

#### Storybook (@vanilla/storybook)
- Interactive component playground
- MDX documentation
- Auto-generated controls
- Accessibility testing

#### Nextra Docs (@vanilla/docs)
- Full documentation site
- Live code examples with Sandpack (with React 18 JSX runtime fixes)
- Search functionality
- Responsive design
- Dark mode support with theme switcher
- Interactive component examples

### 5. Testing & Quality
- **Unit Tests**: Jest + Testing Library
- **Visual Testing**: Chromatic integration ready
- **Linting**: ESLint with TypeScript, React, and a11y plugins
- **Formatting**: Prettier
- **CSS Linting**: Stylelint
- **Type Checking**: TypeScript strict mode

### 6. CI/CD & Publishing
- **Version Management**: Changesets
- **CI Pipeline**: GitHub Actions
  - Lint, test, and build on every PR
  - Automated releases on main branch
- **Deployment**: Vercel configuration for docs
- **Publishing**: Automated npm publishing with Changesets

## Development Commands

```bash
# Install dependencies
pnpm install

# Development
pnpm dev              # Start all dev servers
pnpm storybook       # Start Storybook only
pnpm docs:dev        # Start docs only

# Building
pnpm build           # Build all packages
pnpm tokens:build    # Build design tokens

# Testing
pnpm test            # Run all tests
pnpm test:watch      # Run tests in watch mode
pnpm test:coverage   # Run tests with coverage

# Code Quality
pnpm lint            # Run all linters
pnpm format          # Format all code
pnpm type-check      # TypeScript type checking

# Publishing
pnpm changeset       # Create a changeset
pnpm version-packages # Version packages
pnpm release         # Build and publish packages
```

## Package Versions
- React: ^18.2.0
- TypeScript: ^5.3.3
- vanilla-extract: ^1.14.0
- Style Dictionary: ^3.9.2
- Storybook: ^7.6.10
- Nextra: ^2.13.2
- Jest: ^29.7.0
- @beauginbey/vanilla-components: 1.4.0 (latest npm)
- @beauginbey/vanilla-tokens: 1.1.0 (latest npm)

## Key Design Decisions

1. **vanilla-extract over CSS Modules/Emotion**
   - Zero runtime overhead
   - Type-safe styles
   - Better tree shaking

2. **Polymorphic Components**
   - Flexible rendering with `as` prop
   - Maintains type safety
   - Better semantic HTML

3. **Design Tokens First**
   - Single source of truth
   - Platform agnostic
   - Easy theming

4. **Monorepo with pnpm**
   - Efficient dependency management
   - Better workspace support
   - Faster installations

## Next Steps for Extension

1. **Add More Components**
   - Form elements (Input, Select, Checkbox)
   - Layout components (Stack, Grid)
   - Feedback components (Toast, Modal)

2. **Dark Mode**
   - Create dark theme using existing tokens
   - Add theme switcher

3. **Icons**
   - Add icon system
   - Consider using Radix Icons or Heroicons

4. **Advanced Testing**
   - Add E2E tests with Playwright
   - Increase test coverage

5. **Performance**
   - Add bundle size tracking
   - Implement lazy loading for docs

## Important URLs
- Storybook: http://localhost:6006
- Docs: http://localhost:3000
- NPM: Published under @beauginbey scope
  - https://www.npmjs.com/package/@beauginbey/vanilla-components
  - https://www.npmjs.com/package/@beauginbey/vanilla-tokens

## Import Guidelines
Always use package imports for components and styles:
```typescript
import { Button, Theme } from '@beauginbey/vanilla-components';
import '@beauginbey/vanilla-components/styles.css';
```
See `packages/components/IMPORTS.md` for detailed import guidelines.

## Recent Updates

### August 2025
- **JSDoc Documentation Standardization**:
  - Created JSDOC_TEMPLATE.md with comprehensive documentation patterns
  - Added JSDoc to all components with descriptions, examples, and type exports
  - Enabled Storybook autodocs for automatic documentation generation
  - All component-specific types are now properly exported

- **Storybook Story Simplification**:
  - Created STORYBOOK_PATTERNS.md documenting standardized story structure
  - Reduced story count by ~60% while maintaining full coverage
  - Standardized to: Default, Props, Variants, Sizes, States, and Colors stories
  - Each story now has a single, clear purpose

- **Theme System Fixes**:
  - Fixed color contrast issues for light accent colors in dark mode
  - Resolved circular reference bug in base gray scale
  - Added proper text/icon contrast using semantic --black-a-12 variable
  - All 25 accent colors now have proper contrast in both light and dark modes

### Previous Updates
- **Component Library**: Full set of form, layout, and interactive components
- **Theme System**: Comprehensive theming with 25 accent colors and dark mode support
- **Figma Plugins**: Token and Component importers for design-to-code workflow
- **Published Versions**: 
  - @beauginbey/vanilla-components@1.4.0
  - @beauginbey/vanilla-tokens@1.1.0

## Next Steps

### Priority 1: Missing Core Components
1. **Feedback Components** (Essential for user feedback)
   - Alert/Banner for important messages
   - Toast/Notification for temporary notifications
   - Spinner/Loading indicators
   - Progress bars (linear and circular)
   - Skeleton loaders

2. **Layout Components** (Complete the set)
   - Stack for vertical spacing
   - Inline for horizontal spacing  
   - Divider for visual separation

3. **Overlay Components** (Critical for modern UIs)
   - Modal/Dialog for overlays
   - Popover for contextual information
   - Tooltip for hover hints
   - Dropdown Menu for actions

### Priority 2: Documentation & Testing
- Increase test coverage across all components
- Add visual regression tests with Chromatic
- Create more comprehensive usage examples
- Add accessibility documentation

### Priority 3: Advanced Features
- CLI tool for component scaffolding
- Enhanced Figma plugin features
- Framework adapters (Vue, Web Components)
- Performance monitoring and optimization

## Implementation Notes

### Minimal Styling Approach
When adding default styles, maintain the "vanilla" philosophy:
- Keep styles minimal and easily overridable
- Use semantic color tokens exclusively
- Ensure all interactive states are accessible
- Provide unstyled variants for maximum flexibility

### Theme Implementation Strategy
```typescript
// Example theme structure
const themes = {
  light: lightTheme,
  dark: createTheme(vars, {
    color: {
      background: {
        primary: '#18181b',
        secondary: '#27272a',
        // ... etc
      }
    }
  })
};
```

## Code Standards & Patterns

### Component Standards
- **JSDoc Documentation**: All components have comprehensive JSDoc with descriptions, examples, and type exports
- **Storybook Stories**: Follow standardized pattern (Default, Props, Variants, Sizes, States, Colors)
- **Type Exports**: All component-specific types are exported for developer use
- **Three-Layer CSS Pattern**: Base styles → Variants → Data attribute overrides
- **Accessibility**: WCAG compliant with proper ARIA attributes
- **Polymorphic Components**: Support `as` prop for flexible rendering

### Development Guidelines
1. **Before Making Changes**:
   - Fork from `main` branch
   - Run `pnpm install` and `pnpm build`
   - Use Node.js >= 18.0.0 and pnpm >= 8.0.0

2. **When Developing**:
   - Follow JSDoc template in `packages/components/JSDOC_TEMPLATE.md`
   - Follow Storybook patterns in `STORYBOOK_PATTERNS.md`
   - Use design tokens for all styling values
   - Add tests for new functionality
   - Run `pnpm lint`, `pnpm format`, and `pnpm type-check`

3. **Publishing Process**:
   - Create changeset: `pnpm changeset`
   - Version packages: `pnpm changeset version`
   - Build all packages: `pnpm build`
   - Publish to npm: `npm publish` in each package directory

## Important Patterns & References

- **Component Patterns**: See `packages/components/PATTERNS.md`
- **JSDoc Template**: See `packages/components/JSDOC_TEMPLATE.md` 
- **Storybook Patterns**: See `STORYBOOK_PATTERNS.md`
- **Theme Documentation**: See `packages/components/THEME.md`
- **Import Guidelines**: See `packages/components/IMPORTS.md`

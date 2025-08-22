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
- @beauginbey/vanilla-components: 1.1.1 (latest npm)
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

## Recent Updates & Fixes

### January 2025
- **Fixed Sandpack errors** in documentation site by:
  - Adding TypeScript type definitions to dependencies
  - Updating React imports for proper JSX runtime support
  - Including tsconfig.json in Sandpack files
  - Removing unsupported compilerOptions from customSetup
- **Published npm updates**:
  - @beauginbey/vanilla-components@1.1.1: Fixed Button svg background hover state
  - @beauginbey/vanilla-tokens@1.1.0: Added animation tokens and enhanced shadows
- **Resolved git sync issues** between local and GitHub repositories

## Roadmap & Suggested Next Steps

### Phase 1: Enhanced Styling & Theming (Priority: High)
1. **Minimal Default Styling**
   - ✓ Add subtle default styles to components (refined borders, shadows, hover states)
   - ✓ Implement focus-visible styles for better accessibility
   - ✓ Add smooth transitions for interactive states
   
2. **Theme System**
   - ✓ Create a dark theme variant
   - ✓ Add theme switching functionality
   - ✓ Implement CSS custom properties for runtime theming
   - ✓ Create theme provider component

3. **Animation Tokens**
   - ✓ Add duration tokens (fast, normal, slow)
   - ✓ Create easing function tokens
   - ✓ Implement motion preferences (prefers-reduced-motion)

### Phase 2: Component Expansion (Priority: High)
1. **Form Components**
   - ✓ Input (text, number, email, etc.)
   - ✓ Select
   - ✓ Checkbox
   - ✓ Radio
   - ✓ Switch/Toggle
   - ✓ Form field wrapper with labels and error states

2. **Layout Components**
   - Stack (vertical spacing)
   - Inline (horizontal spacing)
   - Grid
   - Container (max-width wrapper)
   - Divider

3. **Feedback Components**
   - Alert/Banner
   - Toast/Notification
   - Spinner/Loading
   - Progress (bar and circular)
   - Skeleton loader

### Phase 3: Advanced Components (Priority: Medium)
1. **Overlay Components**
   - Modal/Dialog
   - Popover
   - Tooltip
   - Dropdown menu

2. **Navigation Components**
   - Tabs
   - Breadcrumb
   - Pagination
   - Navigation menu

3. **Data Display**
   - Card
   - Table (with sorting/filtering)
   - Avatar
   - Badge

### Phase 4: Developer Experience (Priority: Medium)
1. **CLI Tool**
   - Component scaffolding
   - Token generation
   - Theme creation wizard

2. **Figma Integration**
   - Design token sync
   - Component documentation
   - Auto-generated Figma components

3. **Testing & Quality**
   - Visual regression tests with Chromatic
   - Accessibility testing automation
   - Performance benchmarks

### Phase 5: Advanced Features (Priority: Low)
1. **Advanced Theming**
   - Component-level theme overrides
   - Dynamic color generation
   - Contrast checking utilities

2. **Documentation Enhancements**
   - Interactive theme builder
   - Component playground improvements
   - Usage analytics

3. **Framework Support**
   - Vue adapter
   - Web Components build
   - React Native components

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

## Contributing Guidelines Summary (from CONTRIBUTING.md)

### Key Workflow Requirements:
1. **Before Making Changes**:
   - Fork from `main` branch
   - Run `pnpm install` and `pnpm build`
   - Use Node.js >= 18.0.0 and pnpm >= 8.0.0

2. **When Developing**:
   - Add tests for new code
   - Update documentation for API changes
   - Run `pnpm lint` and `pnpm format`
   - Run `pnpm type-check` for TypeScript
   - Create changesets with `pnpm changeset`

3. **Code Standards**:
   - Follow accessibility guidelines (WCAG compliant)
   - Use semantic HTML and proper ARIA attributes
   - Use design tokens for all styling values
   - Maintain strict TypeScript typing (no `any`)
   - Write unit tests for all logic
   - Follow Conventional Commits for messages

4. **Publishing Process**:
   - Create changeset: `pnpm changeset`
   - Version packages: `pnpm changeset version`
   - Build all packages: `pnpm build`
   - Publish to npm: `npm publish` in each package directory

# Comprehensive Component Refactor Plan

## Overview
Refactor all components to follow the standards established by Button and documented in PATTERNS.md. This ensures consistency, maintainability, and predictable developer experience across the entire component library.

## Standards to Apply (from Button & PATTERNS.md)

### 1. Type Organization
- Export component-specific types (e.g., `ButtonVariant`, `ButtonSize`)
- Use types from `constants/colors.ts` for colors
- Create descriptive interfaces for props
- Use consistent naming: `ComponentNameProps`, `ComponentNameVariant`, etc.

### 2. CSS Architecture (Three-Layer Pattern)
- Layer 1: Base recipe with semantic CSS variables
- Layer 2: Style variants for sub-elements
- Layer 3: Data attribute overrides for customization
- Add explanatory comment at top of CSS files

### 3. Color Override Pattern
- Add `color?: AccentColor` prop where applicable
- Apply via `data-accent-color={color}`
- Define component-scoped CSS variables
- Use globalStyle for color overrides

### 4. Consistent Props API
- `variant`: Visual style options
- `size`: Component sizing
- `fullWidth`: Take full container width
- `color`: Override accent color (where applicable)
- `className` & `style`: Always supported

## Components to Refactor

### Phase 1: Interactive Components (Need color overrides)

#### 1. **IconButton** (High Priority)
- [ ] Add `color?: AccentColor` prop
- [ ] Extract types: `IconButtonVariant`, `IconButtonSize`
- [ ] Add data-attribute color overrides
- [ ] Update CSS to use semantic variables
- [ ] Add pattern comment to CSS file

#### 2. **Switch** (High Priority)
- [ ] Add `color?: AccentColor` prop
- [ ] Extract type: `SwitchSize`
- [ ] Implement color overrides for track and thumb
- [ ] Update CSS structure to three-layer pattern
- [ ] Use semantic CSS variables

#### 3. **Radio** (High Priority)
- [ ] Add `color?: AccentColor` prop
- [ ] Implement color overrides for checked state
- [ ] Add size variants (sm, md, lg) to match other inputs
- [ ] Update CSS to match Checkbox pattern

### Phase 2: Typography & Content Components

#### 4. **Text** (Medium Priority)
- [ ] Refactor color prop to use AccentColor for brand colors
- [ ] Keep semantic colors (primary, secondary, etc.) as-is
- [ ] Extract types: `TextSize`, `TextWeight`, `TextColor`
- [ ] Consider if truncate should be part of variant

#### 5. **FormField** (Medium Priority)
- [ ] Add `color?: AccentColor` prop for error states
- [ ] Ensure consistent error styling across form components
- [ ] Update to use semantic CSS variables

### Phase 3: Layout Components (May not need color overrides)

#### 6. **Box** (Low Priority)
- [ ] Review Sprinkles system for consistency
- [ ] Ensure CSS variables are used throughout
- [ ] Document any special patterns

#### 7. **Container, Flex, Grid, Section** (Low Priority)
- [ ] Ensure consistent spacing variables
- [ ] Review responsive props pattern
- [ ] Document layout-specific patterns

### Phase 4: Utility Components

#### 8. **Icon** (Low Priority)
- [ ] Review if color prop should use AccentColor
- [ ] Ensure consistent sizing system
- [ ] Update IconProvider if needed

#### 9. **Theme & ThemeProvider** (Already Done)
- [x] Already uses types from constants/colors.ts
- [ ] Review for any additional consistency updates

## Implementation Order

### Interactive Components First
1. **IconButton** - Most similar to Button, good starting point
2. **Switch** - Establish pattern for toggle controls
3. **Radio** - Complete the form control set

### Typography & Content
4. **Text** - Central typography component
5. **FormField** - Unifies form component patterns

### Layout & Structure
6. **Box** - Review Sprinkles system
7. **Container, Flex, Grid, Section** - Ensure consistency

### Utilities
8. **Icon** - Review color system
9. **Final review** - Ensure all components align

## Checklist for Each Component

- [ ] Import types from `constants/colors.ts`
- [ ] Export component-specific types
- [ ] Add `color` prop where applicable
- [ ] Implement data-attribute pattern
- [ ] Update CSS to three-layer pattern
- [ ] Add pattern comment to CSS file
- [ ] Use semantic CSS variables
- [ ] Test color overrides work
- [ ] Update component stories
- [ ] Ensure TypeScript types are exported

## Testing Plan

1. **Visual Testing**
   - Each component with different color overrides
   - Focus states with custom colors
   - Hover states with custom colors
   - Disabled states remain consistent

2. **API Testing**
   - Props work as expected
   - TypeScript autocomplete works
   - No type errors

3. **Build Testing**
   - Run `pnpm build` after each component
   - Verify CSS is generated correctly
   - Check bundle size doesn't increase significantly

## Success Criteria

- All interactive components support `color` prop
- CSS follows three-layer pattern consistently
- Types are centralized and reused
- Developer can predict API without documentation
- All components feel like part of the same system

## Implementation Notes

- Start with IconButton as it's most similar to Button
- Switch and Radio will establish pattern for form controls
- Keep changes focused on consistency, not new features
- Document any decisions that deviate from the pattern
- Run Storybook throughout to test changes immediately

This plan provides a clear, methodical approach to bringing all components up to the standard set by Button, ensuring the entire library feels cohesive and professional.

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
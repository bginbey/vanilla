# Vanilla Design System

A modern, accessible, and performant design system built with React, TypeScript, and vanilla-extract.

## Features

- 🎨 **Design Tokens** - Consistent design language powered by Style Dictionary
- 🚀 **Performance** - Zero-runtime CSS with vanilla-extract
- ♿ **Accessibility** - WCAG compliant components with proper ARIA attributes
- 📦 **Tree-shakeable** - Import only what you need
- 🔧 **Customizable** - Extend and theme components to match your brand
- 📝 **TypeScript** - Full type safety and IntelliSense support
- 🎯 **Polymorphic** - Components can render as any HTML element
- 📱 **Responsive** - Mobile-first responsive design utilities

## Packages

This monorepo contains the following packages:

### Published Packages (npm)
- [`@beauginbey/vanilla-tokens`](https://www.npmjs.com/package/@beauginbey/vanilla-tokens) - Design tokens powered by Style Dictionary
- [`@beauginbey/vanilla-components`](https://www.npmjs.com/package/@beauginbey/vanilla-components) - React component library

### Private Packages (development only)
- `@beauginbey/vanilla-storybook` - Component documentation with Storybook
- `@beauginbey/vanilla-docs` - Documentation site built with Nextra

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm 8.0 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/beauginbey/vanilla-design-system.git

# Install dependencies
pnpm install

# Build all packages
pnpm build
```

### Development

```bash
# Start all development servers
pnpm dev

# Start individual development servers
pnpm --filter @beauginbey/vanilla-storybook dev  # Storybook on http://localhost:6006
pnpm --filter @beauginbey/vanilla-docs dev       # Documentation on http://localhost:3000

# Build packages
pnpm build                            # Build all packages
pnpm --filter @beauginbey/vanilla-tokens build   # Build design tokens
pnpm --filter @beauginbey/vanilla-components build # Build components

# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format
```

### Using the Design System

Install the packages in your project:

```bash
# Using pnpm
pnpm add @beauginbey/vanilla-components @beauginbey/vanilla-tokens

# Using npm
npm install @beauginbey/vanilla-components @beauginbey/vanilla-tokens

# Using yarn
yarn add @beauginbey/vanilla-components @beauginbey/vanilla-tokens
```

Import and use components:

```tsx
import { Button, Box, Text } from '@beauginbey/vanilla-components';
import { lightTheme } from '@beauginbey/vanilla-components';

function App() {
  return (
    <div className={lightTheme}>
      <Box p={4}>
        <Text as="h1" size="2xl" weight="bold">
          Hello Vanilla!
        </Text>
        <Button variant="solid">Get Started</Button>
      </Box>
    </div>
  );
}
```

## Documentation

- [Storybook](http://localhost:6006) - Component playground and documentation
- [Docs Site](http://localhost:3000) - Full documentation with live examples

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Creating a Changeset

When making changes to packages, create a changeset:

```bash
pnpm changeset
```

Follow the prompts to describe your changes. This will create a changeset file that will be used to version and publish packages.

## Architecture

### Design Tokens

Design tokens are the foundation of our design system. They're defined in JSON and processed by Style Dictionary to generate:

- CSS variables
- JavaScript/TypeScript constants
- SCSS variables

### Components

Components are built with:

- **React** - UI library
- **TypeScript** - Type safety
- **vanilla-extract** - Zero-runtime CSS-in-JS
- **Polymorphic components** - Flexible element rendering

### Testing

- **Jest** - Test runner
- **Testing Library** - Component testing
- **Chromatic** - Visual regression testing

### Documentation

- **Storybook** - Component documentation and playground
- **Nextra** - Documentation site
- **Sandpack** - Live code examples

## Published Packages

The following packages are published to npm:
- [@beauginbey/vanilla-components@1.0.0](https://www.npmjs.com/package/@beauginbey/vanilla-components)
- [@beauginbey/vanilla-tokens@1.0.0](https://www.npmjs.com/package/@beauginbey/vanilla-tokens)

## Roadmap

### ✅ Phase 1: Enhanced Styling & Theming
**Goal:** Add minimal, elegant default styles while maintaining flexibility

- [x] **Refined Default Styles**
  - Subtle borders and shadows for depth
  - Smooth hover and focus states
  - Improved button pressed states
  - Consistent focus-visible outlines
  
- [x] **Dark Theme**
  - Create dark theme tokens
  - Add theme switcher component
  - Support system preference detection
  - Smooth theme transitions

- [x] **Animation System**
  - Motion tokens (duration, easing)
  - Micro-interactions for components
  - Respect prefers-reduced-motion

### 📦 Phase 2: Essential Components
**Goal:** Build the most commonly needed UI components

- [ ] **Form Components**
  - Input, Textarea, Select
  - Checkbox, Radio, Switch
  - Form validation states
  - Field wrapper with labels
  
- [ ] **Layout Components**
  - Stack (vertical spacing)
  - Inline (horizontal spacing)
  - Grid system
  - Container component

- [ ] **Feedback Components**
  - Alert/Banner
  - Toast notifications
  - Loading spinners
  - Progress indicators

### 🚀 Phase 3: Advanced Components
**Goal:** Add complex interactive components

- [ ] **Overlay Components**
  - Modal/Dialog
  - Popover
  - Tooltip
  - Dropdown menu

- [ ] **Navigation**
  - Tabs
  - Breadcrumb
  - Pagination
  - Navigation menu

- [ ] **Data Display**
  - Card
  - Table
  - Avatar
  - Badge

### 🛠 Phase 4: Developer Experience
**Goal:** Make the design system easier to use and maintain

- [ ] **Tooling**
  - CLI for component scaffolding
  - VS Code extension
  - Design token generator

- [ ] **Integration**
  - Figma plugin
  - Sketch library
  - Adobe XD kit

- [ ] **Quality**
  - Visual regression testing
  - Automated accessibility checks
  - Performance monitoring

## Contributing to the Roadmap

We welcome community input on our roadmap! If you have suggestions or want to contribute:

1. Open an issue to discuss new component ideas
2. Submit a PR to implement a roadmap item
3. Share feedback on proposed features
4. Help with documentation and examples

See our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

MIT © Beau Ginbey
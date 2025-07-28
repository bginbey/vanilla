# Vanilla Design System - Figma Plugins

Two Figma plugins to bridge the gap between code and design for the Vanilla Design System.

## Token Importer Plugin

Imports all design tokens from the Vanilla Design System as Figma Variables.

### Features
- **Color tokens**: Primitive and semantic colors with light/dark mode support
- **Spacing tokens**: Consistent spacing scale as variables
- **Typography tokens**: Font sizes, weights, and line heights
- **Effect tokens**: Shadows and border radii
- **Animation tokens**: Durations and easing functions

### Usage
1. Run the plugin in Figma
2. Select which token categories to import
3. Click "Import Tokens"
4. Variables will be created/updated in your document

## Component Importer Plugin

Generates Figma components that match the React components in structure and behavior.

### Features
- **Component variants**: Maps component props to Figma variants
- **Interactive states**: Hover, pressed, disabled states
- **Auto Layout**: Responsive component structure
- **Variable bindings**: Uses imported design tokens
- **Boolean properties**: For toggles like disabled, fullWidth, etc.

### Supported Components
- Button (solid, outline, ghost)
- Input (outline, filled, unstyled)
- Checkbox
- Radio
- Switch
- Select

## Development Setup

### Prerequisites
- Node.js >= 18
- pnpm >= 8
- Figma desktop app

### Installation & Build

```bash
# IMPORTANT: First install dependencies from the project root
cd /path/to/vanilla  # Go to project root
pnpm install

# Then navigate to the specific plugin directory to build
cd tools/figma-plugins/token-importer
pnpm build

# Or for the component importer
cd tools/figma-plugins/component-importer
pnpm build
```

### Development

```bash
# From within a plugin directory (after running pnpm install from root)
pnpm dev   # Start development mode with hot reload
pnpm build # Build for production
```

**Note:** Always run `pnpm install` from the project root first to ensure workspace dependencies are properly linked before building individual plugins.

### Loading in Figma
1. Open Figma desktop app
2. Go to Plugins → Development → Import plugin from manifest
3. Select the `manifest.json` file from either plugin directory
4. The plugin will appear in your plugins menu

## Architecture

### Token Importer Flow
1. Loads token JSON files from the design system
2. Creates variable collections for each token category
3. Sets up light/dark modes for color variables
4. Maps semantic tokens to primitive variables using aliases

### Component Importer Flow
1. Reads component definitions with variants and properties
2. Creates component sets with all variant combinations
3. Applies auto layout and spacing using variables
4. Sets up interactive states and boolean properties

## Best Practices

### For Designers
- Run token importer first to ensure variables are available
- Components use variable references, not hard-coded values
- Boolean properties control visibility of optional elements
- Use instance swap for icon slots

### For Developers
- Keep component definitions in sync with React props
- Update semantic color mappings when adding new tokens
- Test both light and dark modes
- Ensure auto layout matches CSS flexbox behavior

## Troubleshooting

### Variables not showing
- Ensure you have edit access to the file
- Check that collections were created successfully
- Try refreshing the Figma file

### Components not rendering correctly
- Verify token variables exist first
- Check console for any errors
- Ensure fonts are available in Figma

## Future Enhancements
- Two-way sync between Figma and code
- Automatic prop documentation
- Theme variant support
- Component usage analytics
- Batch updates for existing components
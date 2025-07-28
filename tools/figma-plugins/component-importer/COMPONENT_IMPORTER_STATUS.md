# Component Importer Plugin Status

## Current Status (as of January 2025)

### ✅ What's Working

1. **Plugin Infrastructure**
   - Plugin builds successfully with webpack
   - UI renders with React and communicates with plugin code
   - Follows same webpack configuration as token-importer (inline scripts)
   - TypeScript compilation working

2. **Component Architecture**
   - Comprehensive component specification system
   - Variable resolver for binding design tokens
   - Component factory for generating Figma components
   - Support for multiple component types (Button, Input, Checkbox, Radio, Switch, Select)

3. **Token Integration**
   - Dependency checking for required design tokens
   - Variable binding to imported tokens from token-importer
   - Supports colors, spacing, typography, radius, and shadow tokens
   - Shows missing dependencies in UI

4. **UI Features**
   - Component selection with checkboxes
   - Dependency validation warnings
   - Toggle to show/hide token dependencies
   - Real-time dependency checking
   - Clear feedback for missing tokens

## Architecture Overview

### Component Specification (`componentSpecs.ts`)
- Defines structure, variants, dependencies, and styling for each component
- Maps React component props to Figma variants
- Specifies token dependencies for each component
- Supports size-based adjustments

### Variable Resolver (`variableResolver.ts`)
- Caches all imported variables on initialization
- Validates dependencies before component creation
- Binds variables to component properties
- Handles different variable types (colors, spacing, typography)

### Component Factory (`componentFactory.ts`)
- Creates component sets with all variant combinations
- Applies structure (auto-layout, constraints)
- Binds design tokens to properties
- Handles variant-specific styling
- Positions components on canvas

## Component Support

| Component | Variants | Properties | Token Bindings |
|-----------|----------|------------|----------------|
| Button | variant (solid/outline/ghost), size (sm/md/lg) | fullWidth, disabled | Colors, spacing, typography, radius, shadows |
| Input | variant (outline/filled/unstyled), size | error, disabled, fullWidth | Colors, spacing, typography, radius |
| Checkbox | size | checked, disabled, indeterminate | Colors, spacing, typography, radius |
| Radio | size | checked, disabled | Colors, spacing, typography |
| Switch | size | checked, disabled | Colors, shadows |
| Select | variant, size | error, disabled, fullWidth | Colors, spacing, typography, radius |

## Key Commands

```bash
# From component-importer directory
pnpm install        # Install dependencies
pnpm build         # Build plugin
pnpm dev           # Watch mode (if configured)
```

## Testing the Plugin

1. Ensure token-importer has been run first to import design tokens
2. Build the plugin: `pnpm build`
3. In Figma: Plugins → Development → Import plugin from manifest
4. Navigate to `tools/figma-plugins/component-importer/manifest.json`
5. Run the plugin
6. Select components to import
7. Check for any missing token dependencies
8. Click "Create Components" to generate

## Important Technical Details

1. **Token Dependencies**
   - Components require specific tokens to be imported first
   - Plugin validates all dependencies before creation
   - Shows warnings for missing tokens in UI

2. **Variable Binding**
   - Uses Figma's variable system for dynamic theming
   - Binds colors, spacing, and typography to variables
   - Some properties (like cornerRadius) set values directly due to API limitations

3. **Component Structure**
   - Uses auto-layout for proper responsive behavior
   - Applies constraints for flexible sizing
   - Supports fullWidth variants that stretch

4. **Variant Generation**
   - Creates all possible variant combinations
   - Uses Figma's component set API
   - Names variants using property=value convention

## Recent Fixes (January 2025)

1. **Fixed API Method Error**
   - Changed `getLocalVariableCollections()` to `getLocalVariableCollectionsAsync()`
   - Plugin now properly loads when document is open

2. **Added Collection Detection**
   - Shows friendly message when no token collections found
   - Suggests running token-importer first
   - Displays available collections when found

3. **Improved Error Handling**
   - Better initialization error messages
   - UI gracefully handles missing tokens
   - Clear feedback for users

## Known Limitations

1. **Figma API Constraints**
   - Cannot bind variables to all properties (e.g., cornerRadius)
   - Counter axis alignment doesn't support STRETCH (mapped to CENTER)
   - Some properties require direct value setting

2. **Missing Features**
   - Interactive states (hover, pressed) not yet implemented
   - Icon instance swapping not configured
   - No support for custom content in components

## Next Steps

1. **Enhanced Features**
   - Add interactive component states
   - Implement icon library integration
   - Support for more complex components (Modal, Tabs, etc.)

2. **Improvements**
   - Better error handling and recovery
   - Batch creation progress indicator
   - Component update functionality

3. **Documentation**
   - Usage guide for designers
   - Best practices for maintaining components
   - Token dependency reference

## Troubleshooting

### Plugin won't load
- Check console for errors
- Ensure all dependencies are installed
- Rebuild with `pnpm build`

### Missing dependencies error
- Run token-importer first
- Check that all required collections exist
- Verify token names match expectations

### Components not styling correctly
- Check variable bindings in console
- Ensure tokens have correct values
- Verify theme mode is set properly
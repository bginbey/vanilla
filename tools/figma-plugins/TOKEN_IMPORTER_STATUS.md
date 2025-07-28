# Token Importer Plugin Status

## Current Status (as of January 2025)

### ✅ What's Working

1. **Plugin Infrastructure**
   - Plugin loads successfully in Figma
   - UI renders properly with React
   - Communication between UI and plugin code works
   - Webpack bundling with inline scripts (required for Figma)

2. **Successfully Importing**
   - ✅ **Colors** - All primitive colors (gray, blue, green, red, yellow, orange, purple) with light/dark modes
   - ✅ **Spacing** - All spacing tokens (0-24) converted from rem to pixels
   - ✅ **Effects** - Shadow and radius tokens
   - ✅ **Animation** - Duration and easing tokens
   - ✅ **Typography** - Font sizes, weights, line heights, families, and letter spacing

3. **Technical Fixes Applied**
   - Fixed Figma API calls (removed incorrect Async suffixes)
   - Fixed NaN errors by properly extracting values from token objects
   - Added validation for all numeric conversions
   - Added comprehensive logging for debugging
   - Converted rem values to pixels (1rem = 16px)

### ✅ Recently Fixed

1. **Typography Tokens**
   - Fixed mismatch between token structure and import code
   - Updated to use correct path: `typographyTokens.font` instead of `typographyTokens`
   - Updated property names to match token structure (`size`, `weight`, `lineHeight`)
   - Added support for font families (as STRING variables)
   - Added support for letter spacing (converted from em to pixels)

### 📝 Next Steps

1. **Component Importer Plugin**
   - Still needs to be built
   - Should import React components as Figma components
   - Match variants, auto-layout, and other properties

## File Structure

```
tools/figma-plugins/
├── token-importer/
│   ├── manifest.json         # Figma plugin manifest
│   ├── package.json          # Dependencies and scripts
│   ├── webpack.config.js     # Webpack config with inline script plugin
│   ├── tsconfig.json         # TypeScript config
│   └── src/
│       ├── code.ts          # Main plugin code (runs in Figma)
│       ├── ui.tsx           # React UI code
│       └── ui.html          # HTML template
└── component-importer/       # Not yet implemented
```

## Key Commands

```bash
# From project root
pnpm install
pnpm build --filter=@vanilla/figma-token-importer

# From token-importer directory
pnpm build
pnpm dev  # Watch mode
```

## Important Technical Details

1. **Figma Plugin Constraints**
   - Cannot load external scripts - must inline everything
   - Must use ES5/ES2015 compatible code
   - API methods are mostly synchronous (no Async suffix)

2. **Token Value Extraction**
   - Tokens are objects with `value` property: `{ value: "1rem" }`
   - Must extract value before parsing: `token.value`

3. **Unit Conversions**
   - rem → pixels: `parseFloat(value) * 16`
   - Figma uses pixels for numeric values

## Recent Commits to Include

- Added token-importer and component-importer to pnpm workspace
- Created initial plugin structure with manifest, webpack config
- Fixed Figma API compatibility issues
- Added proper token value extraction and validation
- Successfully importing colors, spacing, effects, and animation tokens

## Testing the Plugin

1. Build the plugin: `pnpm build --filter=@vanilla/figma-token-importer`
2. In Figma: Plugins → Development → Import plugin from manifest
3. Navigate to `tools/figma-plugins/token-importer/manifest.json`
4. Run the plugin and select token types to import
5. Check Variables panel in Figma for imported tokens

## Known Issues

- Typography tokens not importing (structure mismatch)
- No error recovery if import partially fails
- No update/merge strategy for existing variables
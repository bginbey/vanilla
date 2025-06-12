# Module Resolution Issue - @beauginbey/vanilla-components

## Issue Description
The docs site fails to start with the error:
```
Module not found: Can't resolve '@beauginbey/vanilla-components'
```

## Root Cause
The components package dist folder mysteriously loses JavaScript and CSS files after build, keeping only TypeScript definition files (.d.ts, .d.mts).

### Expected dist folder contents:
- index.js ✓
- index.mjs ✓
- index.css ✓
- styles.css ✓
- styles.js ✓
- styles.mjs ✓
- Plus .d.ts files and source maps

### Actual dist folder contents (when error occurs):
- index.d.ts ✓
- index.d.mts ✓
- styles.d.ts ✓
- styles.d.mts ✓
- All other files missing ✗

## Current Workaround
In `pages/_app.tsx`, we've implemented the following fixes:

1. **Hardcoded the theme class name** instead of importing it:
```typescript
// Instead of:
// import { theme } from '@beauginbey/vanilla-components';

// We use:
const theme = 'theme_theme__1bozsyx77';
```

2. **Fixed CSS imports**:
```typescript
// Removed non-existent import:
// import '@beauginbey/vanilla-components/styles.css';

// Kept only the colors CSS:
import '@beauginbey/vanilla-colors/css';
```

3. **Removed colors import from components package** (src/index.ts):
```typescript
// Removed to prevent build failures:
// import '@beauginbey/vanilla-colors/css';
```

## Investigation Needed
1. **Why are the JS/CSS files disappearing?**
   - Check for git clean operations
   - Look for watch processes that might be cleaning
   - Investigate build tool configurations
   - Check file system permissions

2. **Possible causes:**
   - Git ignoring dist files (dist is in .gitignore)
   - Concurrent build processes
   - File system issues
   - tsup or build tool misconfiguration

3. **Permanent fix options:**
   - Remove dist from .gitignore for workspace packages
   - Change build output location
   - Add file locks during build
   - Use a different bundler configuration

## Temporary Fix
Run this before starting the docs dev server:
```bash
cd packages/components && pnpm build
```

## Impact
- Docs site cannot import theme constant from components
- CSS imports might also fail if files are missing
- Development experience is degraded

## Next Steps
1. Monitor when files disappear (after build? during dev?)
2. Check if other packages have the same issue
3. Consider alternative build strategies
4. Implement permanent fix once root cause is identified
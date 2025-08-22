# Vanilla Design System - Next Steps

## Current Status (as of conversation end)

### Completed Work
1. **Figma Plugins**
   - ✅ Token Importer: Fixed typography structure, added semantic colors, rem→px conversion
   - ✅ Component Importer: Full implementation with Button variants, proper sizing, grid layout
   - ✅ Documentation: Comprehensive specs and troubleshooting guides
   - ✅ Committed and pushed to GitHub

2. **Existing Components**
   - Form: Input, Select, Checkbox, Radio, Switch, FormField
   - Layout: Box, Flex, Grid, Container, Section
   - Core: Button, Text, Icon, IconButton
   - Theme: Theme, ThemeProvider

3. **Published Versions**
   - @beauginbey/vanilla-components: 1.4.0
   - @beauginbey/vanilla-tokens: 1.1.0
   - @beauginbey/vanilla-colors: (check current version)

## Recommended Next Steps (Priority Order)

### 1. **Expand Theme System** (Priority: High) 🆕
Extend the current theming capabilities to support:
- **Brand Color**: Allow custom brand/primary color that affects all accent colors
- **Link Color**: Dedicated link color that can differ from accent color
- **Neutral Color**: Customizable gray scale for backgrounds and borders
- **Font Family**: Support for custom font stacks (sans-serif, serif, mono)
- **Font Scale**: Adjustable base font size and type scale

Implementation approach:
- Extend Theme component props to accept these customizations
- Generate CSS variables dynamically based on selections
- Ensure all components use these theme tokens
- Add color contrast validation for accessibility

### 2. **Complete Phase 2: Layout Components** (Priority: High)
We already have some layout components (Box, Flex, Grid, Container) but are missing:
- **Stack**: Vertical spacing component with consistent gap handling
- **Inline**: Horizontal spacing component for inline elements
- **Divider**: Visual separator component

### 3. **Add Phase 2: Feedback Components** (Priority: High)
These are essential for user feedback and currently missing:
- **Alert/Banner**: For displaying important messages
- **Toast/Notification**: For temporary notifications
- **Spinner/Loading**: Loading indicators
- **Progress**: Progress bars and circular progress
- **Skeleton**: Loading placeholder components

### 4. **Phase 3: Overlay Components** (Priority: Medium)
Critical for modern UIs:
- **Modal/Dialog**: For overlays and dialogs
- **Popover**: For contextual information
- **Tooltip**: For hover hints
- **Dropdown Menu**: For action menus

### 5. **Phase 3: Navigation Components** (Priority: Medium)
- **Tabs**: Tab navigation component
- **Breadcrumb**: Navigation breadcrumbs
- **Pagination**: Page navigation

### 6. **Phase 3: Data Display Components** (Priority: Medium)
- **Card**: Content container with various layouts
- **Avatar**: User/profile images with fallbacks
- **Badge**: Status indicators and counts

### 7. **Improve Documentation** (Priority: High)
- Add more comprehensive examples in Storybook
- Create usage guidelines for each component
- Add accessibility documentation
- Document component composition patterns

### 8. **Testing Infrastructure** (Priority: High)
- Increase test coverage (currently seems limited)
- Add visual regression tests with Chromatic
- Add accessibility tests with jest-axe
- Performance benchmarks

### 9. **Package Updates**
- Consider publishing new versions with recent fixes
- Update changelog with all recent improvements
- Ensure all packages are in sync

## Suggested Starting Point for Tomorrow

**Option A: Theme System Expansion**
1. Start by extending the Theme component to accept brand, link, neutral, and font props
2. Implement color scale generation from brand color
3. Update CSS variable generation
4. Test with existing components

**Option B: Stack & Inline Components**
1. Create Stack component for vertical layouts
2. Create Inline component for horizontal layouts
3. Use the established patterns from Box/Flex
4. Add to Storybook with examples

**Option C: Alert Component**
1. Design Alert API (variants, icons, dismissible)
2. Implement with proper accessibility
3. Add animation tokens for enter/exit
4. Document usage patterns

## Technical Considerations

1. **Theme Expansion Details**:
   - Need to generate 12-step scales from single brand color
   - Ensure WCAG AA contrast ratios
   - Consider using culori for color manipulation
   - Update all semantic tokens to use new scales

2. **Component Patterns**:
   - Follow existing patterns for props and styling
   - Use vanilla-extract recipes for variants
   - Ensure all components are polymorphic where appropriate
   - Add proper TypeScript types

3. **Testing Strategy**:
   - Unit tests for logic
   - Visual tests for UI states
   - Accessibility tests for WCAG compliance
   - Performance tests for bundle size

## Questions to Consider

1. Should the theme system support multiple brand colors (primary, secondary, tertiary)?
2. Do we want to support CSS-in-JS theme objects or just CSS variables?
3. Should Stack/Inline components support responsive gap values?
4. What animation library should we use for overlay components?
5. How should toast notifications be managed (context, portal, state)?

## Resources

- Existing components: `/packages/components/src/components/`
- Theme implementation: `/packages/components/src/components/Theme/`
- Design tokens: `/packages/tokens/`
- Storybook: `/apps/storybook/`
- Documentation: `/apps/docs/`

---

Last worked on: Figma plugin implementation
Next suggested focus: Theme system expansion or Stack/Inline components
# Layout and Theme Components Update Plan

## Overview
This plan documents the updates needed to properly integrate Theme and Layout components (RadixTheme, ThemeProvider, Flex, Grid, Container, Section) from @beauginbey/vanilla-components v1.3.0 into the documentation site.

## 1. Theme Integration Updates

### Update _app.tsx
- Import `RadixTheme` and `ThemeProvider` from @beauginbey/vanilla-components
- Wrap the app with proper theme providers
- Remove manual theme implementation

### Update ThemeToggle.tsx
- Import `useTheme` from @beauginbey/vanilla-components instead of nextra
- Use `IconButton` component for the toggle button
- Import proper icons from the component library

## 2. Replace Box with Layout Components

### Files to update with Flex component:
- `/components/colors/ColorUsageExample.tsx` - Replace Box display="flex" with Flex
- `/components/colors/ColorScale.tsx` - Use Flex for row layouts
- `/components/colors/ColorGrid.tsx` - Use Flex for flexible layouts
- `/pages/components/icon-example.tsx` - Use Flex for icon demonstrations
- `/pages/components/icon-gallery-example.tsx` - Use Flex for gallery layouts

### Files to update with Grid component:
- `/components/colors/ColorScale.tsx` - Use Grid for color scale grid
- `/components/icons/IconGrid.tsx` - Use Grid for icon grid display

### Files to update with Container:
- Main page layouts in examples
- Documentation pages for consistent max-width

## 3. Create New Documentation Pages

Add these pages to `/pages/components/`:
- `flex.mdx` - Flex component documentation with examples
- `grid.mdx` - Grid component documentation with responsive examples
- `container.mdx` - Container component for page layouts
- `section.mdx` - Section component for content areas
- `theme.mdx` - RadixTheme and ThemeProvider documentation

## 4. Update Navigation Structure

Update `/pages/components/_meta.json`:
```json
{
  "box": "Box",
  "text": "Text",
  "-- Layout": {
    "type": "separator",
    "title": "Layout"
  },
  "container": "Container",
  "section": "Section",
  "flex": "Flex",
  "grid": "Grid",
  "-- Forms": {
    "type": "separator",
    "title": "Forms"
  },
  "button": "Button",
  "checkbox": "Checkbox",
  "form-field": "FormField",
  "input": "Input",
  "radio": "Radio",
  "select": "Select",
  "switch": "Switch",
  "-- Display": {
    "type": "separator",
    "title": "Display"
  },
  "icon": "Icon",
  "icon-button": "IconButton",
  "-- Theme": {
    "type": "separator",
    "title": "Theme"
  },
  "theme": "Theme"
}
```

## 5. Update Example Pages

### Update `/pages/examples.mdx`:
- Add layout pattern examples using Flex, Grid, Container, and Section
- Show responsive layout examples
- Demonstrate theme customization

### Create new examples:
- Common layout patterns (header, sidebar, content)
- Responsive grid layouts
- Theme customization examples

## 6. Update LiveExample Component

- Wrap Sandpack previews with RadixTheme
- Ensure theme context is available in examples
- Update default imports to include layout components

## 7. Implementation Order

1. First, update theme integration (_app.tsx, ThemeToggle.tsx)
2. Create new documentation pages for layout components
3. Update existing components to use Flex/Grid instead of Box
4. Update examples to showcase layout components
5. Update navigation and meta files
6. Test all changes

## Benefits

1. **Consistency**: Uses actual components from the library
2. **Better Examples**: Shows proper usage of layout components
3. **Improved DX**: Semantic components are easier to understand
4. **Type Safety**: Layout components have proper TypeScript props
5. **Complete Documentation**: All exported components documented
6. **Theme Integration**: Proper theme context throughout the app
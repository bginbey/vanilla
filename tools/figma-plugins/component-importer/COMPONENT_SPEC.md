# Figma Component Importer Specification

## Overview

This specification defines how React components from the Vanilla Design System are translated into Figma components, ensuring consistency, proper token usage, and leveraging Figma's features effectively.

## Core Principles

1. **Token-First Approach**: All styling must use variables imported by the token-importer plugin
2. **Structural Parity**: Figma components should mirror their React counterparts
3. **Feature Utilization**: Leverage Figma's variants, auto-layout, variables, and interactive states
4. **Dependency Management**: Automatically handle token dependencies for each component

## Component Specification Structure

```typescript
interface FigmaComponentSpec {
  name: string;
  
  // Variable dependencies from token-importer
  dependencies: {
    colors?: string[];      // e.g., ['Semantic/accent-primary', 'Semantic/text-primary']
    spacing?: string[];     // e.g., ['8', '12', '16']
    typography?: string[];  // e.g., ['Size/sm', 'Weight/medium']
    radius?: string[];      // e.g., ['3', '4']
    shadows?: string[];     // e.g., ['sm', 'md']
  };
  
  // Component structure
  structure: {
    type: 'frame' | 'group' | 'component';
    autolayout: {
      direction: 'horizontal' | 'vertical' | 'none';
      spacing?: string;       // Token reference: 'spacing/8'
      padding?: {            
        vertical?: string;    // Token reference: 'spacing/12'
        horizontal?: string;  // Token reference: 'spacing/16'
      };
      alignment?: {
        primary: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN';
        counter: 'MIN' | 'CENTER' | 'MAX' | 'STRETCH';
      };
    };
    constraints?: {
      horizontal: 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'SCALE';
      vertical: 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'SCALE';
    };
  };
  
  // Figma variants and properties
  variants: {
    [propertyName: string]: {
      type: 'variant' | 'boolean' | 'text' | 'instance';
      values?: string[];
      default?: string | boolean;
    };
  };
  
  // Interactive states
  states: {
    [stateName: string]: {
      trigger?: 'hover' | 'pressed' | 'focus';
      changes: VariableBinding[];
    };
  };
  
  // Style bindings
  styles: {
    fills?: VariableBinding[];
    strokes?: VariableBinding[];
    effects?: VariableBinding[];
    cornerRadius?: VariableBinding;
    strokeWeight?: number;
  };
  
  // Child elements
  children?: ComponentElement[];
}

interface VariableBinding {
  property: string;
  variablePath: string;
  collection: 'Colors' | 'Spacing' | 'Typography' | 'Effects' | 'Animation';
  mode?: 'light' | 'dark' | 'all';
}

interface ComponentElement {
  name: string;
  type: 'text' | 'frame' | 'icon' | 'vector';
  properties: {
    [key: string]: any;
  };
  bindings?: VariableBinding[];
  visible?: boolean | string; // Can be conditional based on variant
}
```

## Component Mapping Examples

### Button Component

```typescript
const ButtonSpec: FigmaComponentSpec = {
  name: 'Button',
  
  dependencies: {
    colors: [
      'Semantic/accent-base',      // Primary button background
      'Semantic/accent-hover',     // Hover state
      'Semantic/accent-text',      // White text on solid buttons
      'Semantic/accent-text-low',  // Text for outline buttons
      'Semantic/accent-border',    // Border for outline variant
      'Semantic/text-primary',     // Text for ghost buttons
      'Semantic/surface',          // Ghost hover background
      'Semantic/border-default'
    ],
    spacing: ['1', '2', '3', '4', '5'],  // Actual spacing tokens used
    typography: ['Size/sm', 'Size/base', 'Size/lg', 'Weight/medium'],
    radius: ['Radius/md'],         // 6px radius
    shadows: ['Shadow/sm', 'Shadow/md', 'Shadow/xs']
  },
  
  structure: {
    type: 'frame',
    autolayout: {
      direction: 'horizontal',
      spacing: '2', // Default gap, dynamic based on size variant
      padding: {
        horizontal: '4', // Default padding, dynamic based on size variant
        vertical: '4'
      },
      alignment: {
        primary: 'CENTER',
        counter: 'CENTER'
      }
    },
    constraints: {
      horizontal: 'MIN',
      vertical: 'MIN'
    }
  },
  
  variants: {
    variant: {
      type: 'variant',
      values: ['solid', 'outline', 'ghost'],
      default: 'solid'
    },
    size: {
      type: 'variant',
      values: ['sm', 'md', 'lg'],
      default: 'md'
    },
    fullWidth: {
      type: 'boolean',
      default: false
    },
    disabled: {
      type: 'boolean',
      default: false
    }
  },
  
  states: {
    hover: {
      trigger: 'hover',
      changes: [
        {
          property: 'fill',
          variablePath: 'Semantic/accent-hover',
          collection: 'Colors'
        },
        {
          property: 'shadow',
          variablePath: 'Shadow/md',
          collection: 'Effects'
        }
      ]
    },
    pressed: {
      trigger: 'pressed',
      changes: [
        {
          property: 'fill',
          variablePath: 'Semantic/accent-pressed',
          collection: 'Colors'
        }
      ]
    }
  },
  
  styles: {
    cornerRadius: {
      property: 'cornerRadius',
      variablePath: 'Radius/md',  // 6px (0.375rem)
      collection: 'Effects'
    }
  },
  
  children: [
    {
      name: 'Icon Left',
      type: 'frame',
      properties: {
        width: 16,
        height: 16
      },
      visible: 'hasLeftIcon' // Controlled by boolean property
    },
    {
      name: 'Label',
      type: 'text',
      properties: {
        characters: 'Button',
        textCase: 'ORIGINAL',
        textDecoration: 'NONE'
      },
      bindings: [
        {
          property: 'fontSize',
          variablePath: 'Size/base', // Dynamic based on size variant
          collection: 'Typography'
        },
        {
          property: 'fontWeight',
          variablePath: 'Weight/medium',
          collection: 'Typography'
        }
      ]
    },
    {
      name: 'Icon Right',
      type: 'frame',
      properties: {
        width: 16,
        height: 16
      },
      visible: 'hasRightIcon'
    }
  ]
};
```

## Variable Resolution Strategy

### 1. Initialization
```typescript
// On plugin start, cache all available variables
const variableCache = {
  Colors: await getCollectionVariables('Colors'),
  Spacing: await getCollectionVariables('Spacing'),
  Typography: await getCollectionVariables('Typography'),
  Effects: await getCollectionVariables('Effects'),
  Animation: await getCollectionVariables('Animation')
};
```

### 2. Dependency Validation
```typescript
// Before creating component, validate all dependencies exist
function validateDependencies(spec: FigmaComponentSpec): ValidationResult {
  const missing = [];
  
  for (const [collection, paths] of Object.entries(spec.dependencies)) {
    for (const path of paths) {
      if (!variableCache[collection]?.[path]) {
        missing.push(`${collection}/${path}`);
      }
    }
  }
  
  return {
    valid: missing.length === 0,
    missing
  };
}
```

### 3. Variable Binding
```typescript
// Apply variable to node property
async function bindVariable(
  node: SceneNode,
  binding: VariableBinding
): Promise<void> {
  const variable = variableCache[binding.collection]?.[binding.variablePath];
  if (!variable) return;
  
  switch (binding.property) {
    case 'fill':
      if ('fills' in node) {
        node.fills = [{
          type: 'SOLID',
          boundVariables: {
            'color': { type: 'VARIABLE_ALIAS', id: variable.id }
          }
        }];
      }
      break;
      
    case 'stroke':
      if ('strokes' in node) {
        node.strokes = [{
          type: 'SOLID',
          boundVariables: {
            'color': { type: 'VARIABLE_ALIAS', id: variable.id }
          }
        }];
      }
      break;
      
    case 'cornerRadius':
      if ('cornerRadius' in node) {
        node.setBoundVariable('cornerRadius', variable);
      }
      break;
      
    case 'itemSpacing':
      if ('itemSpacing' in node) {
        node.setBoundVariable('itemSpacing', variable);
      }
      break;
      
    // ... other properties
  }
}
```

## Size Variant Mapping

Size variants should map to consistent spacing and typography scales:

```typescript
const sizeMapping = {
  sm: {
    fontSize: 'Size/sm',
    paddingHorizontal: '3',    // 12px (0.75rem)
    paddingVertical: '3',      // 12px - results in 32px height with text
    gap: '1',                  // 4px (0.25rem)
    iconSize: 14,
    height: 32                 // Target height (auto-layout will handle this)
  },
  md: {
    fontSize: 'Size/base',
    paddingHorizontal: '4',    // 16px (1rem)
    paddingVertical: '4',      // 16px - results in 40px height with text
    gap: '2',                  // 8px (0.5rem)
    iconSize: 16,
    height: 40                 // Target height (auto-layout will handle this)
  },
  lg: {
    fontSize: 'Size/lg',
    paddingHorizontal: '5',    // 20px (1.25rem)
    paddingVertical: '5',      // 20px - results in 48px height with text
    gap: '2',                  // 8px (0.5rem)
    iconSize: 20,
    height: 48                 // Target height (auto-layout will handle this)
  }
};
```

### Auto-layout Sizing Behavior

Components should use Figma's auto-layout with proper sizing modes:

```typescript
// After creating component and adding content
component.primaryAxisSizingMode = 'AUTO';    // Hug contents horizontally
component.counterAxisSizingMode = 'AUTO';     // Hug contents vertically

// For full-width variants
if (variantProps.fullWidth) {
  component.primaryAxisSizingMode = 'FIXED';
  component.layoutAlign = 'STRETCH';
}
```

**Important**: Don't set explicit heights on auto-layout frames. Let padding and content determine the size.

## Component Creation Pipeline

1. **User Selection**: User selects components to import
2. **Dependency Check**: Validate all required tokens exist
3. **Show Missing**: If dependencies missing, show what needs to be imported first
4. **Create Structure**: Build component hierarchy with proper nesting
5. **Apply Variables**: Bind all token variables to properties
6. **Create Variants**: Generate all variant combinations
7. **Setup Properties**: Configure variant properties and booleans
8. **Add States**: Apply interactive state changes
9. **Position**: Place component set on canvas

## Best Practices

### 1. Naming Conventions
- Component sets: Match React component name exactly
- Variants: Use same property names as React props
- Layers: Use descriptive names that match React structure

### 2. Structure
- Always use auto-layout when React uses flexbox
- Match React component hierarchy
- Use proper constraints for responsive behavior

### 3. Variables
- Never hardcode colors - always use variables
- Use spacing tokens for all spacing values
- Bind typography properties to typography tokens

### 4. States
- Implement all interactive states from React
- Use Figma's interactive components feature
- Ensure state changes use variables

### 5. Performance
- Batch operations when creating multiple components
- Reuse variable references instead of repeated lookups
- Create variants efficiently using array generation

## Error Handling

```typescript
interface ComponentCreationResult {
  success: boolean;
  component?: ComponentNode | ComponentSetNode;
  errors?: string[];
  warnings?: string[];
}

// Graceful error handling
try {
  const result = await createComponent(spec);
  if (!result.success) {
    // Show errors in UI
    showErrors(result.errors);
  }
} catch (error) {
  // Fatal error - show message
  figma.notify('Failed to create component', { error: true });
}
```

## Token Unit Conversion

The token importer automatically converts CSS units to Figma-compatible pixel values:

### Conversion Rules
- **rem to pixels**: Multiplies by 16 (assumes 16px base font size)
  - `0.75rem` → `12px`
  - `1rem` → `16px`
  - `1.25rem` → `20px`
- **em to pixels**: Multiplies by 16 (for spacing/typography)
- **px values**: Used as-is
- **Numeric values**: Used directly

### Affected Token Types
1. **Typography**: Font sizes converted from rem
2. **Spacing**: All spacing values converted from rem
3. **Radius**: Corner radius values converted from rem
4. **Effects**: Shadow values remain as strings (Figma limitation)

## Known Limitations

1. **Shadow Effects**: Cannot be bound to variables via API - must be applied manually
2. **Font Weights**: Must be mapped to available font styles (Regular, Medium, Bold, etc.)
3. **Complex Animations**: Figma doesn't support CSS animations - only duration/easing tokens imported

## Troubleshooting

### Common Issues and Solutions

1. **"Unable to establish connection to Figma"**
   - Check internet connection
   - Refresh Figma tab
   - Plugin includes retry logic with delays

2. **"Variable not found" errors**
   - Ensure token-importer was run first
   - Check that all collections were created
   - Verify token paths match exactly

3. **Font loading errors**
   - Plugin preloads Inter font family
   - Custom fonts must be available in Figma
   - Font weights map to available styles

4. **Component height issues**
   - Let auto-layout determine height
   - Don't set explicit heights
   - Padding + content = final height

5. **Missing semantic colors**
   - Run token-importer with latest tokens
   - Check semantic color mappings
   - Ensure both light/dark modes imported

### Best Practices

1. **API Rate Limiting**: Plugin adds 50ms delays between variable creations
2. **Font Loading**: Always load fonts before setting text properties
3. **Variable Caching**: Plugin caches all variables on initialization
4. **Error Recovery**: Includes retry logic for network errors

## Future Enhancements

1. **Icon Library Integration**: Support for icon instance swapping
2. **Content Templates**: Pre-filled content for different use cases
3. **Theme Switching**: Quick theme mode switching in Figma
4. **Batch Updates**: Update existing components when tokens change
5. **Code Sync**: Keep Figma components in sync with React changes
6. **Shadow Variable Support**: When Figma API supports effect variables
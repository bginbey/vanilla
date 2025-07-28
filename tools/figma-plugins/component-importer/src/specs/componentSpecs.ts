// Component specifications following the documented spec
export interface VariableBinding {
  property: string;
  variablePath: string;
  collection: 'Colors' | 'Spacing' | 'Typography' | 'Effects' | 'Animation';
  mode?: 'light' | 'dark' | 'all';
}

export interface ComponentElement {
  name: string;
  type: 'text' | 'frame' | 'icon' | 'vector';
  properties: {
    [key: string]: any;
  };
  bindings?: VariableBinding[];
  visible?: boolean | string;
}

export interface FigmaComponentSpec {
  name: string;
  
  dependencies: {
    colors?: string[];
    spacing?: string[];
    typography?: string[];
    radius?: string[];
    shadows?: string[];
  };
  
  structure: {
    type: 'frame' | 'group' | 'component';
    autolayout: {
      direction: 'horizontal' | 'vertical' | 'none';
      spacing?: string;
      padding?: {
        vertical?: string;
        horizontal?: string;
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
  
  variants: {
    [propertyName: string]: {
      type: 'variant' | 'boolean' | 'text' | 'instance';
      values?: string[];
      default?: string | boolean;
    };
  };
  
  states?: {
    [stateName: string]: {
      trigger?: 'hover' | 'pressed' | 'focus';
      changes: VariableBinding[];
    };
  };
  
  styles: {
    fills?: VariableBinding[];
    strokes?: VariableBinding[];
    effects?: VariableBinding[];
    cornerRadius?: VariableBinding;
    strokeWeight?: number;
  };
  
  children?: ComponentElement[];
}

// Size mappings matching the actual CSS
export const sizeMapping = {
  sm: {
    fontSize: 'Size/sm',
    paddingHorizontal: '3', // var(--space-3) = 0.75rem = 12px
    paddingVertical: '3',   // To achieve 32px height with font size
    gap: '1',               // var(--space-1) = 0.25rem = 4px
    iconSize: 14,
    height: 32
  },
  md: {
    fontSize: 'Size/base',
    paddingHorizontal: '4', // var(--space-4) = 1rem = 16px
    paddingVertical: '4',   // To achieve 40px height with font size
    gap: '2',               // var(--space-2) = 0.5rem = 8px
    iconSize: 16,
    height: 40
  },
  lg: {
    fontSize: 'Size/lg',
    paddingHorizontal: '5', // var(--space-5) = 1.25rem = 20px
    paddingVertical: '5',   // To achieve 48px height with font size
    gap: '2',               // var(--space-2) = 0.5rem = 8px
    iconSize: 20,
    height: 48
  }
};

// Component specifications
export const componentSpecs: Record<string, FigmaComponentSpec> = {
  Button: {
    name: 'Button',
    
    dependencies: {
      colors: [
        'Semantic/accent-base',
        'Semantic/accent-hover',
        'Semantic/accent-text',
        'Semantic/accent-text-low',
        'Semantic/accent-border',
        'Semantic/accent-border-hover',
        'Semantic/accent-surface',
        'Semantic/accent-surface-hover',
        'Semantic/text-primary',
        'Semantic/text-secondary',
        'Semantic/border-default',
        'Semantic/surface',
        'Semantic/surface-hover',
        'Semantic/background-primary'
      ],
      spacing: ['1', '2', '3', '4', '5', '6', '8'],
      typography: ['Size/sm', 'Size/base', 'Size/lg', 'Weight/medium'],
      radius: ['Radius/md'],
      shadows: ['Shadow/sm', 'Shadow/md', 'Shadow/xs']
    },
    
    structure: {
      type: 'frame',
      autolayout: {
        direction: 'horizontal',
        spacing: '2', // Will be dynamic based on size (default md gap)
        padding: {
          horizontal: '4', // Will be dynamic based on size (default md padding)
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
    
    styles: {
      cornerRadius: {
        property: 'cornerRadius',
        variablePath: 'Radius/md',
        collection: 'Effects'
      },
      // Fills will be applied based on variant
    },
    
    children: [
      {
        name: 'Icon Left',
        type: 'frame',
        properties: {
          width: 16,
          height: 16
        },
        visible: false // Will be controlled by instance swap
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
            variablePath: 'Size/base', // Dynamic based on size
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
        visible: false
      }
    ]
  },

  Input: {
    name: 'Input',
    
    dependencies: {
      colors: [
        'Semantic/background-primary',
        'Semantic/background-secondary',
        'Semantic/border-default',
        'Semantic/border-hover',
        'Semantic/text-primary',
        'Semantic/text-secondary',
        'Semantic/error-base'
      ],
      spacing: ['8', '12', '16'],
      typography: ['Size/sm', 'Size/base', 'Size/lg'],
      radius: ['Radius/base']
    },
    
    structure: {
      type: 'frame',
      autolayout: {
        direction: 'horizontal',
        spacing: '8',
        padding: {
          horizontal: '12',
          vertical: '8'
        },
        alignment: {
          primary: 'MIN',
          counter: 'CENTER'
        }
      },
      constraints: {
        horizontal: 'STRETCH',
        vertical: 'MIN'
      }
    },
    
    variants: {
      variant: {
        type: 'variant',
        values: ['outline', 'filled', 'unstyled'],
        default: 'outline'
      },
      size: {
        type: 'variant',
        values: ['sm', 'md', 'lg'],
        default: 'md'
      },
      error: {
        type: 'boolean',
        default: false
      },
      disabled: {
        type: 'boolean',
        default: false
      },
      fullWidth: {
        type: 'boolean',
        default: false
      }
    },
    
    styles: {
      cornerRadius: {
        property: 'cornerRadius',
        variablePath: 'Radius/base',
        collection: 'Effects'
      }
    },
    
    children: [
      {
        name: 'Placeholder',
        type: 'text',
        properties: {
          characters: 'Placeholder text',
          textCase: 'ORIGINAL'
        },
        bindings: [
          {
            property: 'fill',
            variablePath: 'Semantic/text-secondary',
            collection: 'Colors'
          },
          {
            property: 'fontSize',
            variablePath: 'Size/base',
            collection: 'Typography'
          }
        ]
      }
    ]
  },

  Checkbox: {
    name: 'Checkbox',
    
    dependencies: {
      colors: [
        'Semantic/background-primary',
        'Semantic/border-default',
        'Semantic/accent-primary',
        'Semantic/text-primary'
      ],
      spacing: ['8'],
      typography: ['Size/sm', 'Size/base', 'Size/lg'],
      radius: ['Radius/sm']
    },
    
    structure: {
      type: 'frame',
      autolayout: {
        direction: 'horizontal',
        spacing: '8',
        alignment: {
          primary: 'MIN',
          counter: 'CENTER'
        }
      }
    },
    
    variants: {
      size: {
        type: 'variant',
        values: ['sm', 'md', 'lg'],
        default: 'md'
      },
      checked: {
        type: 'boolean',
        default: false
      },
      disabled: {
        type: 'boolean',
        default: false
      },
      indeterminate: {
        type: 'boolean',
        default: false
      }
    },
    
    styles: {},
    
    children: [
      {
        name: 'Checkbox Box',
        type: 'frame',
        properties: {
          width: 20,
          height: 20
        },
        bindings: [
          {
            property: 'cornerRadius',
            variablePath: 'Radius/sm',
            collection: 'Effects'
          },
          {
            property: 'stroke',
            variablePath: 'Semantic/border-default',
            collection: 'Colors'
          }
        ]
      },
      {
        name: 'Label',
        type: 'text',
        properties: {
          characters: 'Checkbox label'
        },
        bindings: [
          {
            property: 'fill',
            variablePath: 'Semantic/text-primary',
            collection: 'Colors'
          },
          {
            property: 'fontSize',
            variablePath: 'Size/base',
            collection: 'Typography'
          }
        ]
      }
    ]
  },

  Radio: {
    name: 'Radio',
    
    dependencies: {
      colors: [
        'Semantic/background-primary',
        'Semantic/border-default',
        'Semantic/accent-primary',
        'Semantic/text-primary'
      ],
      spacing: ['8'],
      typography: ['Size/sm', 'Size/md', 'Size/lg']
    },
    
    structure: {
      type: 'frame',
      autolayout: {
        direction: 'horizontal',
        spacing: '8',
        alignment: {
          primary: 'MIN',
          counter: 'CENTER'
        }
      }
    },
    
    variants: {
      size: {
        type: 'variant',
        values: ['sm', 'md', 'lg'],
        default: 'md'
      },
      checked: {
        type: 'boolean',
        default: false
      },
      disabled: {
        type: 'boolean',
        default: false
      }
    },
    
    styles: {},
    
    children: [
      {
        name: 'Radio Circle',
        type: 'frame',
        properties: {
          width: 20,
          height: 20,
          cornerRadius: 10
        },
        bindings: [
          {
            property: 'stroke',
            variablePath: 'Semantic/border-default',
            collection: 'Colors'
          }
        ]
      },
      {
        name: 'Label',
        type: 'text',
        properties: {
          characters: 'Radio label'
        },
        bindings: [
          {
            property: 'fill',
            variablePath: 'Semantic/text-primary',
            collection: 'Colors'
          },
          {
            property: 'fontSize',
            variablePath: 'Size/base',
            collection: 'Typography'
          }
        ]
      }
    ]
  },

  Switch: {
    name: 'Switch',
    
    dependencies: {
      colors: [
        'Semantic/background-secondary',
        'Semantic/accent-primary',
        'Semantic/background-primary'
      ],
      shadows: ['Shadow/sm']
    },
    
    structure: {
      type: 'frame',
      autolayout: {
        direction: 'horizontal',
        spacing: '8',
        alignment: {
          primary: 'MIN',
          counter: 'CENTER'
        }
      }
    },
    
    variants: {
      size: {
        type: 'variant',
        values: ['sm', 'md', 'lg'],
        default: 'md'
      },
      checked: {
        type: 'boolean',
        default: false
      },
      disabled: {
        type: 'boolean',
        default: false
      }
    },
    
    styles: {},
    
    children: [
      {
        name: 'Track',
        type: 'frame',
        properties: {
          width: 40,
          height: 22,
          cornerRadius: 11
        },
        bindings: [
          {
            property: 'fill',
            variablePath: 'Semantic/background-secondary',
            collection: 'Colors'
          }
        ]
      }
    ]
  },

  Select: {
    name: 'Select',
    
    dependencies: {
      colors: [
        'Semantic/background-primary',
        'Semantic/background-secondary',
        'Semantic/border-default',
        'Semantic/text-primary',
        'Semantic/text-secondary'
      ],
      spacing: ['8', '12', '16'],
      typography: ['Size/sm', 'Size/base', 'Size/lg'],
      radius: ['Radius/base']
    },
    
    structure: {
      type: 'frame',
      autolayout: {
        direction: 'horizontal',
        spacing: '8',
        padding: {
          horizontal: '12',
          vertical: '8'
        },
        alignment: {
          primary: 'SPACE_BETWEEN',
          counter: 'CENTER'
        }
      },
      constraints: {
        horizontal: 'STRETCH',
        vertical: 'MIN'
      }
    },
    
    variants: {
      variant: {
        type: 'variant',
        values: ['outline', 'filled', 'unstyled'],
        default: 'outline'
      },
      size: {
        type: 'variant',
        values: ['sm', 'md', 'lg'],
        default: 'md'
      },
      error: {
        type: 'boolean',
        default: false
      },
      disabled: {
        type: 'boolean',
        default: false
      },
      fullWidth: {
        type: 'boolean',
        default: false
      }
    },
    
    styles: {
      cornerRadius: {
        property: 'cornerRadius',
        variablePath: 'Radius/base',
        collection: 'Effects'
      }
    },
    
    children: [
      {
        name: 'Select Text',
        type: 'text',
        properties: {
          characters: 'Select option',
          layoutGrow: 1
        },
        bindings: [
          {
            property: 'fill',
            variablePath: 'Semantic/text-primary',
            collection: 'Colors'
          },
          {
            property: 'fontSize',
            variablePath: 'Size/base',
            collection: 'Typography'
          }
        ]
      },
      {
        name: 'Chevron',
        type: 'vector',
        properties: {
          width: 12,
          height: 8
        },
        bindings: [
          {
            property: 'stroke',
            variablePath: 'Semantic/text-secondary',
            collection: 'Colors'
          }
        ]
      }
    ]
  }
};
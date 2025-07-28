// Shared constants for Figma plugins

export const COLLECTION_NAMES = {
  COLORS: 'Colors',
  SPACING: 'Spacing',
  TYPOGRAPHY: 'Typography',
  EFFECTS: 'Effects',
  ANIMATION: 'Animation'
} as const;

export const COLOR_MODES = {
  LIGHT: 'Light',
  DARK: 'Dark'
} as const;

export const SEMANTIC_COLOR_MAPPING = {
  // Backgrounds
  'background-primary': { 
    light: 'Primitive/gray/1', 
    dark: 'Primitive/grayDark/1' 
  },
  'background-secondary': { 
    light: 'Primitive/gray/2', 
    dark: 'Primitive/grayDark/2' 
  },
  'background-tertiary': { 
    light: 'Primitive/gray/3', 
    dark: 'Primitive/grayDark/3' 
  },
  
  // Text
  'text-primary': { 
    light: 'Primitive/gray/12', 
    dark: 'Primitive/grayDark/12' 
  },
  'text-secondary': { 
    light: 'Primitive/gray/11', 
    dark: 'Primitive/grayDark/11' 
  },
  'text-tertiary': { 
    light: 'Primitive/gray/10', 
    dark: 'Primitive/grayDark/10' 
  },
  
  // Borders
  'border-default': { 
    light: 'Primitive/gray/6', 
    dark: 'Primitive/grayDark/6' 
  },
  'border-subtle': { 
    light: 'Primitive/gray/4', 
    dark: 'Primitive/grayDark/4' 
  },
  
  // Accent colors
  'accent-primary': { 
    light: 'Primitive/blue/9', 
    dark: 'Primitive/blueDark/9' 
  },
  'accent-hover': { 
    light: 'Primitive/blue/10', 
    dark: 'Primitive/blueDark/10' 
  },
  
  // Status colors
  'success': { 
    light: 'Primitive/green/9', 
    dark: 'Primitive/greenDark/9' 
  },
  'warning': { 
    light: 'Primitive/yellow/9', 
    dark: 'Primitive/yellowDark/9' 
  },
  'error': { 
    light: 'Primitive/red/9', 
    dark: 'Primitive/redDark/9' 
  }
} as const;

export const DEFAULT_FONT = {
  family: 'Inter',
  style: 'Regular'
} as const;

export const COMPONENT_DEFAULTS = {
  CORNER_RADIUS: 6,
  STROKE_WEIGHT: 1,
  ICON_SIZE: {
    sm: 14,
    md: 16,
    lg: 18
  },
  PADDING: {
    sm: 8,
    md: 12,
    lg: 16
  },
  HEIGHT: {
    sm: 32,
    md: 40,
    lg: 48
  }
} as const;
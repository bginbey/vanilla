import { createTheme, createThemeContract } from '@vanilla-extract/css';

// Color scale contract - maps to CSS variables from colors package
const colorScaleContract = () => ({
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
  10: null,
  11: null,
  12: null,
});

export const vars = createThemeContract({
  color: {
    // Core scales
    gray: colorScaleContract(),
    grayA: colorScaleContract(),
    blue: colorScaleContract(),
    blueA: colorScaleContract(),
    green: colorScaleContract(),
    greenA: colorScaleContract(),
    red: colorScaleContract(),
    redA: colorScaleContract(),
    yellow: colorScaleContract(),
    yellowA: colorScaleContract(),
    orange: colorScaleContract(),
    orangeA: colorScaleContract(),
    purple: colorScaleContract(),
    purpleA: colorScaleContract(),
    
    // Overlay scales
    blackA: colorScaleContract(),
    whiteA: colorScaleContract(),
  },
  
  // Non-color tokens remain the same
  font: {
    family: {
      sans: null,
      mono: null,
    },
    size: {
      xs: null,
      sm: null,
      base: null,
      lg: null,
      xl: null,
      '2xl': null,
      '3xl': null,
      '4xl': null,
      '5xl': null,
    },
    weight: {
      normal: null,
      medium: null,
      semibold: null,
      bold: null,
    },
    lineHeight: {
      tight: null,
      normal: null,
      relaxed: null,
    },
    letterSpacing: {
      tight: null,
      normal: null,
      wide: null,
    },
  },
  spacing: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    8: null,
    10: null,
    12: null,
    16: null,
    20: null,
    24: null,
  },
  radius: {
    none: null,
    sm: null,
    base: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
    full: null,
  },
  shadow: {
    xs: null,
    sm: null,
    base: null,
    md: null,
    lg: null,
    xl: null,
    none: null,
  },
  duration: {
    instant: null,
    fast: null,
    normal: null,
    slow: null,
    slowest: null,
  },
  easing: {
    linear: null,
    easeIn: null,
    easeOut: null,
    easeInOut: null,
    bounce: null,
    smooth: null,
  },
  transition: {
    property: {
      none: null,
      all: null,
      colors: null,
      opacity: null,
      shadow: null,
      transform: null,
      common: null,
    },
  },
});

// Helper to create color scale mappings
const createColorScale = (name: string) => ({
  1: `var(--${name}-1)`,
  2: `var(--${name}-2)`,
  3: `var(--${name}-3)`,
  4: `var(--${name}-4)`,
  5: `var(--${name}-5)`,
  6: `var(--${name}-6)`,
  7: `var(--${name}-7)`,
  8: `var(--${name}-8)`,
  9: `var(--${name}-9)`,
  10: `var(--${name}-10)`,
  11: `var(--${name}-11)`,
  12: `var(--${name}-12)`,
});

// Single theme that uses CSS variables
export const theme = createTheme(vars, {
  color: {
    // Map to CSS variables from colors package
    gray: createColorScale('gray'),
    grayA: createColorScale('gray-a'),
    blue: createColorScale('blue'),
    blueA: createColorScale('blue-a'),
    green: createColorScale('green'),
    greenA: createColorScale('green-a'),
    red: createColorScale('red'),
    redA: createColorScale('red-a'),
    yellow: createColorScale('yellow'),
    yellowA: createColorScale('yellow-a'),
    orange: createColorScale('orange'),
    orangeA: createColorScale('orange-a'),
    purple: createColorScale('purple'),
    purpleA: createColorScale('purple-a'),
    blackA: createColorScale('black-a'),
    whiteA: createColorScale('white-a'),
  },
  
  font: {
    family: {
      sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
    },
    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
    },
  },
  
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
  },
  
  radius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  
  shadow: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    base: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    md: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    lg: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    xl: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    none: 'none',
  },
  
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '250ms',
    slow: '400ms',
    slowest: '600ms',
  },
  
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  },
  
  transition: {
    property: {
      none: 'none',
      all: 'all',
      colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
      common: 'color, background-color, border-color, box-shadow, transform, opacity',
    },
  },
});

// Export the old theme names for backward compatibility during migration
// These will be removed once migration is complete
export const light = theme;
export const dark = theme;
export const cream = theme;
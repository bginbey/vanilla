import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    background: {
      primary: null,
      secondary: null,
      tertiary: null,
    },
    text: {
      primary: null,
      secondary: null,
      tertiary: null,
      inverse: null,
    },
    border: {
      primary: null,
      secondary: null,
    },
    brand: {
      primary: null,
      secondary: null,
    },
    feedback: {
      success: null,
      warning: null,
      error: null,
      info: null,
    },
  },
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
});

export const light = createTheme(vars, {
  color: {
    background: {
      primary: '#fafafa',
      secondary: '#f4f4f5',
      tertiary: '#e4e4e7',
    },
    text: {
      primary: '#09090b',
      secondary: '#3f3f46',
      tertiary: '#71717a',
      inverse: '#fafafa',
    },
    border: {
      primary: '#e4e4e7',
      secondary: '#d4d4d8',
    },
    brand: {
      primary: '#2563eb',
      secondary: '#1d4ed8',
    },
    feedback: {
      success: '#16a34a',
      warning: '#d97706',
      error: '#dc2626',
      info: '#2563eb',
    },
  },
  font: {
    family: {
      sans: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, sans-serif',
      mono: '\'SF Mono\', Monaco, \'Cascadia Code\', \'Roboto Mono\', Consolas, \'Courier New\', monospace',
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
});

export const cream = createTheme(vars, {
  color: {
    background: {
      primary: '#FCFBF4',      // Warm cream base
      secondary: '#F7F3E9',    // Slightly darker cream
      tertiary: '#EDE7D9',     // Warm beige
    },
    text: {
      primary: '#000000',      // Pure black for maximum contrast
      secondary: '#545454',    // Dark gray for secondary text
      tertiary: '#8F8F8F',     // Medium gray
      inverse: '#FFFFFF',
    },
    border: {
      primary: '#E8E3D3',      // Warm light border
      secondary: '#D4CCBB',    // Slightly darker border
    },
    brand: {
      primary: '#000000',      // Black primary like Uber
      secondary: '#276EF1',    // Uber blue accent
    },
    feedback: {
      success: '#05944F',      // Uber green
      warning: '#FBBF24',      // Warm yellow
      error: '#E11900',        // Uber red
      info: '#276EF1',         // Uber blue
    },
  },
  font: {
    family: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", "UberMove", "Helvetica Neue", Helvetica, Arial, sans-serif',
      mono: 'Monaco, Menlo, "Ubuntu Mono", "Droid Sans Mono", Consolas, monospace',
    },
    size: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '2rem',     // 32px
      '4xl': '2.5rem',   // 40px
      '5xl': '3.5rem',   // 56px
    },
    weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.625',
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.02em',
    },
  },
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
  },
  radius: {
    none: '0',
    sm: '2px',
    base: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    full: '9999px',
  },
  shadow: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
    sm: '0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    base: '0 4px 8px 0 rgba(0, 0, 0, 0.08)',
    md: '0 8px 16px 0 rgba(0, 0, 0, 0.08)',
    lg: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
    xl: '0 20px 40px 0 rgba(0, 0, 0, 0.1)',
    none: 'none',
  },
});
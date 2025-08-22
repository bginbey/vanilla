import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { globalStyle } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { ACCENT_COLORS } from '../../constants/colors';

/**
 * Radio Component Styles - Following the Three-Layer Pattern:
 * 
 * 1. BASE RECIPE: Defines core styles and variants using semantic CSS variables
 *    - Variables follow pattern: var(--radio-[semantic]-[state], var(--fallback))
 *    - This allows theme defaults while enabling overrides
 * 
 * 2. STYLE VARIANTS: Additional styles for indicator element
 * 
 * 3. DATA ATTRIBUTE OVERRIDES: Color customization via data-accent-color
 *    - Uses globalStyle to set component-scoped CSS variables
 *    - Enables per-instance color overrides without runtime styles
 * 
 * This pattern aligns with Checkbox while maintaining radio-specific behavior.
 */

const sizeConfig = {
  sm: {
    size: '16px',
    dotSize: '6px',
  },
  md: {
    size: '20px',
    dotSize: '8px',
  },
  lg: {
    size: '24px',
    dotSize: '10px',
  },
};

export const radioStyles = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  variants: {
    size: {
      sm: {
        width: sizeConfig.sm.size,
        height: sizeConfig.sm.size,
      },
      md: {
        width: sizeConfig.md.size,
        height: sizeConfig.md.size,
      },
      lg: {
        width: sizeConfig.lg.size,
        height: sizeConfig.lg.size,
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const inputStyles = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0,
  cursor: 'pointer',
  margin: 0,
  
  ':disabled': {
    cursor: 'not-allowed',
  },
});

export const indicatorStyles = recipe({
  base: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--radio-bg-unchecked, var(--color-background))',
    border: '2px solid var(--radio-border, var(--color-border))',
    borderRadius: vars.radius.full,
    transition: `${vars.transition.property.common} ${vars.duration.fast} ${vars.easing.easeInOut}`,
    
    '::after': {
      content: '""',
      position: 'absolute',
      borderRadius: vars.radius.full,
      backgroundColor: 'var(--radio-dot-color, white)',
      transform: 'scale(0)',
      transition: `transform ${vars.duration.fast} ${vars.easing.easeInOut}`,
    },
    
    selectors: {
      [`${inputStyles}:hover:not(:disabled) + &`]: {
        borderColor: 'var(--radio-border-hover, var(--color-border-hover))',
      },
      
      [`${inputStyles}:focus-visible + &`]: {
        boxShadow: '0 0 0 2px var(--radio-focus-ring, var(--color-focus-ring))',
      },
      
      [`${inputStyles}:checked + &`]: {
        backgroundColor: 'var(--radio-accent-base, var(--color-accent-base))',
        borderColor: 'var(--radio-accent-base, var(--color-accent-base))',
      },
      
      [`${inputStyles}:checked + &::after`]: {
        transform: 'scale(1)',
      },
      
      [`${inputStyles}:checked:hover:not(:disabled) + &`]: {
        backgroundColor: 'var(--radio-accent-hover, var(--color-accent-hover))',
        borderColor: 'var(--radio-accent-hover, var(--color-accent-hover))',
      },
    },
  },
  
  variants: {
    size: {
      sm: {
        '::after': {
          width: sizeConfig.sm.dotSize,
          height: sizeConfig.sm.dotSize,
        },
      },
      md: {
        '::after': {
          width: sizeConfig.md.dotSize,
          height: sizeConfig.md.dotSize,
        },
      },
      lg: {
        '::after': {
          width: sizeConfig.lg.dotSize,
          height: sizeConfig.lg.dotSize,
        },
      },
    },
    
    error: {
      true: {
        borderColor: vars.color.red[8],
        
        selectors: {
          [`${inputStyles}:hover:not(:disabled) + &`]: {
            borderColor: vars.color.red[8],
          },
          
          [`${inputStyles}:focus-visible + &`]: {
            boxShadow: `0 0 0 2px ${vars.color.red[8]}`,
          },
          
          [`${inputStyles}:checked + &`]: {
            backgroundColor: vars.color.red[9],
            borderColor: vars.color.red[9],
          },
        },
      },
      false: {},
    },
    
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        
        selectors: {
          [`${inputStyles}:disabled + &`]: {
            backgroundColor: vars.color.gray[3],
          },
        },
      },
      false: {},
    },
  },
  
  defaultVariants: {
    size: 'md',
    error: false,
    disabled: false,
  },
});

export const labelStyles = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: vars.spacing[2],
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: vars.font.size.md,
    lineHeight: vars.font.lineHeight.normal,
    color: vars.color.gray[12],
  },
  
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
      false: {},
    },
  },
  
  defaultVariants: {
    disabled: false,
  },
});

/**
 * Color override styles using data attributes
 * Each accent color gets its own set of CSS custom properties
 * when the data-accent-color attribute is set on Radio
 */
ACCENT_COLORS.forEach((color) => {
  globalStyle(`[data-accent-color="${color}"]`, {
    vars: {
      '--radio-accent-base': `var(--${color}-9)`,
      '--radio-accent-hover': `var(--${color}-10)`,
      '--radio-accent-active': `var(--${color}-11)`,
      '--radio-bg-unchecked': `var(--color-background)`,
      '--radio-border': `var(--${color}-7)`,
      '--radio-border-hover': `var(--${color}-8)`,
      '--radio-focus-ring': `var(--${color}-8)`,
      '--radio-dot-color': 'white',
    }
  });
});
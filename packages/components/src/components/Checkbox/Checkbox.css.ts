import { style, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';
import { ACCENT_COLORS } from '../../constants/colors';

/**
 * Checkbox Component Styles - Following the Three-Layer Pattern:
 * 
 * 1. BASE RECIPE: Defines core styles and variants using semantic CSS variables
 *    - Variables follow pattern: var(--checkbox-[semantic]-[state], var(--fallback))
 *    - This allows theme defaults while enabling overrides
 * 
 * 2. STYLE VARIANTS: Additional styles for icon element
 * 
 * 3. DATA ATTRIBUTE OVERRIDES: Color customization via data-accent-color
 *    - Uses globalStyle to set component-scoped CSS variables
 *    - Enables per-instance color overrides without runtime styles
 * 
 * This pattern ensures consistency with other form components while maintaining
 * checkbox-specific behavior and contrast-aware checkmarks.
 */

const sizeConfig = {
  sm: {
    size: '16px',
    checkmarkScale: 0.75,
  },
  md: {
    size: '20px',
    checkmarkScale: 1,
  },
  lg: {
    size: '24px',
    checkmarkScale: 1.2,
  },
};

export const checkboxStyles = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  variants: {
    variant: {
      default: {},
      rounded: {},
    },
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
    variant: 'default',
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

export const iconStyles = recipe({
  base: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.color.gray[1], // App background
    border: `2px solid ${vars.color.gray[7]}`, // UI element border
    transition: `${vars.transition.property.common} ${vars.duration.fast} ${vars.easing.easeInOut}`,
    color: 'transparent',
    pointerEvents: 'none',
    
    selectors: {
      [`${inputStyles}:hover:not(:disabled) + &`]: {
        borderColor: 'var(--checkbox-border-hover, var(--color-border-hover))', // Hover border
      },
      
      [`${inputStyles}:focus-visible + &`]: {
        boxShadow: '0 0 0 2px var(--checkbox-focus-ring, var(--color-focus-ring))', // Focus ring
      },
      
      [`${inputStyles}:checked + &`]: {
        backgroundColor: 'var(--checkbox-accent-base, var(--color-accent-base))', // Solid color
        borderColor: 'var(--checkbox-accent-base, var(--color-accent-base))',
        color: 'var(--checkbox-checkmark-color, white)', // Use dynamic checkmark color
      },
      
      [`${inputStyles}:checked:hover:not(:disabled) + &`]: {
        backgroundColor: 'var(--checkbox-accent-hover, var(--color-accent-hover))', // Hover solid
        borderColor: 'var(--checkbox-accent-hover, var(--color-accent-hover))',
      },
      
      [`${inputStyles}:indeterminate + &`]: {
        backgroundColor: 'var(--checkbox-accent-base, var(--color-accent-base))', // Solid color
        borderColor: 'var(--checkbox-accent-base, var(--color-accent-base))',
        color: 'var(--checkbox-checkmark-color, white)', // Use dynamic checkmark color
      },
    },
  },
  
  variants: {
    variant: {
      default: {
        borderRadius: vars.radius.sm,
      },
      rounded: {
        borderRadius: vars.radius.full,
      },
    },
    
    size: {
      sm: {
        '& svg': {
          width: '10px',
          height: '8px',
          transform: `scale(${sizeConfig.sm.checkmarkScale})`,
        },
      },
      md: {
        '& svg': {
          width: '10px',
          height: '8px',
          transform: `scale(${sizeConfig.md.checkmarkScale})`,
        },
      },
      lg: {
        '& svg': {
          width: '10px',
          height: '8px',
          transform: `scale(${sizeConfig.lg.checkmarkScale})`,
        },
      },
    },
    
    error: {
      true: {
        borderColor: vars.color.red[7], // Error border
        
        selectors: {
          [`${inputStyles}:hover:not(:disabled) + &`]: {
            borderColor: vars.color.red[8], // Error hover
          },
          
          [`${inputStyles}:focus-visible + &`]: {
            boxShadow: `0 0 0 2px ${vars.color.red[8]}`, // Error focus
          },
          
          [`${inputStyles}:checked + &`]: {
            backgroundColor: vars.color.red[9], // Error solid
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
            backgroundColor: vars.color.gray[2], // Subtle background
          },
        },
      },
      false: {},
    },
  },
  
  defaultVariants: {
    variant: 'default',
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
    color: vars.color.gray[12], // High-contrast text
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
 * when the data-accent-color attribute is set
 */

// Colors that need dark checkmarks for contrast on light backgrounds
const LIGHT_COLORS = ['yellow', 'amber', 'lime', 'mint', 'sky'] as const;

ACCENT_COLORS.forEach((color) => {
  // Determine appropriate checkmark color based on the accent color
  const needsDarkCheckmark = LIGHT_COLORS.includes(color as any);
  // Use black-a-12 for light colors - always dark regardless of theme
  const checkmarkColor = needsDarkCheckmark ? 'var(--black-a-12)' : 'white';
  
  globalStyle(`[data-accent-color="${color}"]`, {
    vars: {
      '--checkbox-accent-base': `var(--${color}-9)`,
      '--checkbox-accent-hover': `var(--${color}-10)`,
      '--checkbox-border-hover': `var(--${color}-8)`,
      '--checkbox-focus-ring': `var(--${color}-8)`,
      '--checkbox-checkmark-color': checkmarkColor,
    }
  });
});
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { globalStyle } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { ACCENT_COLORS } from '../../constants/colors';

/**
 * Switch Component Styles - Following the Three-Layer Pattern:
 * 
 * 1. BASE RECIPE: Defines core styles and variants using semantic CSS variables
 *    - Variables follow pattern: var(--switch-[semantic]-[state], var(--fallback))
 *    - This allows theme defaults while enabling overrides
 * 
 * 2. STYLE VARIANTS: Additional styles for track and thumb elements
 * 
 * 3. DATA ATTRIBUTE OVERRIDES: Color customization via data-accent-color
 *    - Uses globalStyle to set component-scoped CSS variables
 *    - Enables per-instance color overrides without runtime styles
 * 
 * This pattern ensures consistency while maintaining the toggle-specific behavior.
 */

const sizeConfig = {
  sm: {
    width: '36px',
    height: '20px',
    thumbSize: '14px',
    thumbOffset: '3px',
    thumbTranslate: '16px',
  },
  md: {
    width: '44px',
    height: '24px',
    thumbSize: '18px',
    thumbOffset: '3px',
    thumbTranslate: '20px',
  },
  lg: {
    width: '52px',
    height: '28px',
    thumbSize: '22px',
    thumbOffset: '3px',
    thumbTranslate: '24px',
  },
};

export const switchStyles = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    flexShrink: 0,
  },
  variants: {
    size: {
      sm: {
        width: sizeConfig.sm.width,
        height: sizeConfig.sm.height,
      },
      md: {
        width: sizeConfig.md.width,
        height: sizeConfig.md.height,
      },
      lg: {
        width: sizeConfig.lg.width,
        height: sizeConfig.lg.height,
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

export const trackStyles = recipe({
  base: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'var(--color-surface-hover)',
    borderRadius: vars.radius.full,
    border: `2px solid var(--color-border)`,
    transition: `${vars.transition.property.common} ${vars.duration.normal} ${vars.easing.easeInOut}`,
    overflow: 'hidden',
    
    selectors: {
      [`${inputStyles}:hover:not(:disabled) + &`]: {
        borderColor: 'var(--color-border-hover)',
      },
      
      [`${inputStyles}:focus-visible + &`]: {
        boxShadow: `0 0 0 2px var(--switch-focus-ring, var(--color-focus-ring))`,
      },
      
      [`${inputStyles}:checked + &`]: {
        backgroundColor: `var(--switch-accent-base, var(--color-accent-base))`,
        borderColor: `var(--switch-accent-base, var(--color-accent-base))`,
      },
      
      [`${inputStyles}:checked:hover:not(:disabled) + &`]: {
        backgroundColor: `var(--switch-accent-hover, var(--color-accent-hover))`,
        borderColor: `var(--switch-accent-hover, var(--color-accent-hover))`,
      },
    },
  },
  
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
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
            backgroundColor: 'var(--color-surface)',
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

export const thumbStyles = recipe({
  base: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: vars.radius.full,
    boxShadow: vars.shadow.sm,
    transition: `transform ${vars.duration.normal} ${vars.easing.easeInOut}`,
    top: '50%',
    transform: 'translateY(-50%)',
    
    selectors: {
      [`${inputStyles}:checked ~ ${trackStyles.classNames.base} &`]: {
        backgroundColor: 'white',
      },
    },
  },
  
  variants: {
    size: {
      sm: {
        width: sizeConfig.sm.thumbSize,
        height: sizeConfig.sm.thumbSize,
        left: sizeConfig.sm.thumbOffset,
        
        selectors: {
          [`${inputStyles}:checked ~ ${trackStyles.classNames.base} &`]: {
            transform: `translateY(-50%) translateX(${sizeConfig.sm.thumbTranslate})`,
          },
        },
      },
      md: {
        width: sizeConfig.md.thumbSize,
        height: sizeConfig.md.thumbSize,
        left: sizeConfig.md.thumbOffset,
        
        selectors: {
          [`${inputStyles}:checked ~ ${trackStyles.classNames.base} &`]: {
            transform: `translateY(-50%) translateX(${sizeConfig.md.thumbTranslate})`,
          },
        },
      },
      lg: {
        width: sizeConfig.lg.thumbSize,
        height: sizeConfig.lg.thumbSize,
        left: sizeConfig.lg.thumbOffset,
        
        selectors: {
          [`${inputStyles}:checked ~ ${trackStyles.classNames.base} &`]: {
            transform: `translateY(-50%) translateX(${sizeConfig.lg.thumbTranslate})`,
          },
        },
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
});

export const labelStyles = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: vars.spacing[3],
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
 * when the data-accent-color attribute is set on Switch
 */
ACCENT_COLORS.forEach((color) => {
  globalStyle(`[data-accent-color="${color}"]`, {
    vars: {
      '--switch-accent-base': `var(--${color}-9)`,
      '--switch-accent-hover': `var(--${color}-10)`,
      '--switch-accent-active': `var(--${color}-11)`,
      '--switch-focus-ring': `var(--${color}-8)`,
    }
  });
});

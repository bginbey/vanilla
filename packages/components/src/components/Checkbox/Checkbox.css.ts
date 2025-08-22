import { style, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';
import { ACCENT_COLORS } from '../../constants/colors';

export const checkboxStyles = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    flexShrink: 0,
  },
  variants: {
    variant: {
      default: {},
      rounded: {},
    },
  },
  defaultVariants: {
    variant: 'default',
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
        color: 'white', // White on solid
      },
      
      [`${inputStyles}:checked:hover:not(:disabled) + &`]: {
        backgroundColor: 'var(--checkbox-accent-hover, var(--color-accent-hover))', // Hover solid
        borderColor: 'var(--checkbox-accent-hover, var(--color-accent-hover))',
      },
      
      [`${inputStyles}:indeterminate + &`]: {
        backgroundColor: 'var(--checkbox-accent-base, var(--color-accent-base))', // Solid color
        borderColor: 'var(--checkbox-accent-base, var(--color-accent-base))',
        color: 'white',
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
ACCENT_COLORS.forEach((color) => {
  globalStyle(`[data-accent-color="${color}"]`, {
    vars: {
      '--checkbox-accent-base': `var(--${color}-9)`,
      '--checkbox-accent-hover': `var(--${color}-10)`,
      '--checkbox-border-hover': `var(--${color}-8)`,
      '--checkbox-focus-ring': `var(--${color}-8)`,
    }
  });
});
import { recipe } from '@vanilla-extract/recipes';
import { globalStyle } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { ACCENT_COLORS } from '../../constants/colors';

/**
 * IconButton Component Styles - Following the Three-Layer Pattern:
 * 
 * 1. BASE RECIPE: Defines core styles and variants using semantic CSS variables
 *    - Variables follow pattern: var(--icon-button-[semantic]-[state], var(--fallback))
 *    - This allows theme defaults while enabling overrides
 * 
 * 2. STYLE VARIANTS: Not needed for IconButton (no sub-elements)
 * 
 * 3. DATA ATTRIBUTE OVERRIDES: Color customization via data-accent-color
 *    - Uses globalStyle to set component-scoped CSS variables
 *    - Enables per-instance color overrides without runtime styles
 * 
 * This pattern ensures consistency with Button while maintaining icon-specific sizing.
 */
export const iconButton = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: vars.font.weight.medium,
    borderRadius: 'var(--radius-3, 0.375rem)',
    transition: `background-color ${vars.duration.fast} ${vars.easing.easeInOut}, border-color ${vars.duration.fast} ${vars.easing.easeInOut}, box-shadow ${vars.duration.fast} ${vars.easing.easeInOut}, transform ${vars.duration.fast} ${vars.easing.easeInOut}, opacity ${vars.duration.fast} ${vars.easing.easeInOut}`,
    boxShadow: vars.shadow.none,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    userSelect: 'none',
    textDecoration: 'none',
    border: '1px solid transparent',
    outline: 'none',
    flexShrink: 0,
    
    ':focus-visible': {
      boxShadow: '0 0 0 2px var(--icon-button-focus-ring, var(--color-focus-ring))',
      outline: 'none',
    },
    
    ':active': {
      transform: 'scale(0.98)',
    },
    
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  },

  variants: {
    variant: {
      /**
       * Solid variant - filled background with accent color
       * Primary action style
       */
      solid: {
        backgroundColor: 'var(--icon-button-accent-base, var(--color-accent-base))',
        color: 'var(--icon-button-accent-text, var(--color-accent-text))',
        boxShadow: vars.shadow.sm,
        
        ':hover:not(:disabled)': {
          backgroundColor: 'var(--icon-button-accent-hover, var(--color-accent-hover))',
          boxShadow: vars.shadow.md,
          transform: 'translateY(-1px)',
        },
        
        ':active:not(:disabled)': {
          backgroundColor: 'var(--icon-button-accent-active, var(--color-accent-active))',
          boxShadow: vars.shadow.xs,
          transform: 'translateY(0)',
        },
      },
      
      /**
       * Outline variant - transparent background with border
       * Secondary action style
       */
      outline: {
        backgroundColor: 'transparent',
        color: 'var(--icon-button-accent-active, var(--color-accent-active))',
        borderColor: 'var(--color-border-hover)',
        boxShadow: 'none',
        
        ':hover:not(:disabled)': {
          borderColor: 'var(--icon-button-border-focus, var(--color-border-focus))',
          backgroundColor: 'var(--icon-button-accent-surface, var(--color-accent-surface))',
          boxShadow: vars.shadow.sm,
        },
        
        ':active:not(:disabled)': {
          backgroundColor: 'var(--icon-button-accent-surface-hover, var(--color-accent-surface-hover))',
          boxShadow: 'none',
          transform: 'scale(0.98)',
        },
      },
      
      /**
       * Ghost variant - minimal style, text only
       * Tertiary action style
       */
      ghost: {
        backgroundColor: 'transparent',
        color: 'var(--color-text)',
        
        ':hover:not(:disabled)': {
          backgroundColor: 'var(--color-surface)',
          boxShadow: vars.shadow.xs,
        },
        
        ':active:not(:disabled)': {
          backgroundColor: 'var(--color-surface-hover)',
          boxShadow: 'none',
        },
      },
    },
    
    size: {
      sm: {
        width: '32px',
        height: '32px',
        borderRadius: vars.radius.md,
      },
      md: {
        width: '40px',
        height: '40px',
        borderRadius: vars.radius.md,
      },
      lg: {
        width: '48px',
        height: '48px',
        borderRadius: vars.radius.lg,
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
});

/**
 * Color override styles using data attributes
 * Each accent color gets its own set of CSS custom properties
 * when the data-accent-color attribute is set on IconButton
 */
ACCENT_COLORS.forEach((color) => {
  globalStyle(`button[data-accent-color="${color}"]`, {
    vars: {
      '--icon-button-accent-base': `var(--${color}-9)`,
      '--icon-button-accent-hover': `var(--${color}-10)`,
      '--icon-button-accent-active': `var(--${color}-11)`,
      '--icon-button-accent-text': 'white',
      '--icon-button-accent-surface': `var(--${color}-3)`,
      '--icon-button-accent-surface-hover': `var(--${color}-4)`,
      '--icon-button-accent-surface-active': `var(--${color}-5)`,
      '--icon-button-border-focus': `var(--${color}-8)`,
      '--icon-button-focus-ring': `var(--${color}-8)`,
    }
  });
});
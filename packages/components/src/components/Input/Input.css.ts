import { recipe } from '@vanilla-extract/recipes';
import { globalStyle } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { ACCENT_COLORS } from '../../constants/colors';

/**
 * Input Component Styles - Following the Three-Layer Pattern:
 * 
 * 1. BASE RECIPE: Defines core styles and variants using semantic CSS variables
 *    - Variables follow pattern: var(--input-[semantic]-[state], var(--fallback))
 *    - This allows theme defaults while enabling overrides
 * 
 * 2. STYLE VARIANTS: Different visual styles (outline, filled, unstyled)
 *    Each variant uses semantic variables for consistent theming
 * 
 * 3. DATA ATTRIBUTE OVERRIDES: Color customization via data-accent-color
 *    - Uses globalStyle to set component-scoped CSS variables
 *    - Enables per-instance color overrides without runtime styles
 * 
 * This pattern ensures consistency across form components while maintaining
 * input-specific behavior and states.
 */

export const inputStyles = recipe({
  base: {
    fontFamily: vars.font.family.sans,
    fontSize: vars.font.size.md,
    lineHeight: vars.font.lineHeight.normal,
    borderRadius: vars.radius.md,
    transition: `${vars.transition.property.common} ${vars.duration.fast} ${vars.easing.easeInOut}`,
    width: 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    
    '::placeholder': {
      color: 'var(--input-placeholder-color, var(--color-text-secondary))',
      opacity: 0.7,
    },
    
    ':focus': {
      outline: 'none',
    },
    
    ':focus-visible': {
      boxShadow: '0 0 0 2px var(--input-focus-ring, var(--color-focus-ring))',
    },
    
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
      backgroundColor: 'var(--input-disabled-bg, var(--color-bg-subtle))',
    },
  },
  
  variants: {
    variant: {
      outline: {
        backgroundColor: 'var(--input-bg, var(--color-bg-primary))',
        border: '1px solid var(--input-border, var(--color-border))',
        padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
        color: 'var(--input-text, var(--color-text-primary))',
        
        ':hover:not(:disabled):not(:focus)': {
          borderColor: 'var(--input-border-hover, var(--color-border-hover))',
        },
        
        ':focus-visible': {
          borderColor: 'var(--input-border-focus, var(--color-border-focus))',
        },
      },
      
      filled: {
        backgroundColor: 'var(--input-filled-bg, var(--color-bg-secondary))',
        border: '1px solid transparent',
        padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
        color: 'var(--input-text, var(--color-text-primary))',
        
        ':hover:not(:disabled):not(:focus)': {
          backgroundColor: 'var(--input-filled-bg-hover, var(--color-bg-tertiary))',
        },
        
        ':focus-visible': {
          backgroundColor: 'var(--input-bg, var(--color-bg-primary))',
          borderColor: 'var(--input-border-focus, var(--color-border-focus))',
        },
      },
      
      unstyled: {
        backgroundColor: 'transparent',
        border: 'none',
        padding: 0,
        color: 'var(--input-text, var(--color-text-primary))',
        
        ':focus-visible': {
          boxShadow: 'none',
        },
      },
    },
    
    error: {
      true: {
        borderColor: 'var(--input-error-border, var(--color-error))',
        
        ':hover:not(:disabled)': {
          borderColor: 'var(--input-error-border-hover, var(--color-error-hover))',
        },
        
        ':focus-visible': {
          borderColor: 'var(--input-error-border-focus, var(--color-error-focus))',
          boxShadow: '0 0 0 2px var(--input-error-focus-ring, var(--color-error-focus))',
        },
      },
      false: {},
    },
    
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {},
    },
    
    disabled: {
      true: {},
      false: {},
    },
  },
  
  defaultVariants: {
    variant: 'outline',
    error: false,
    fullWidth: false,
    disabled: false,
  },
});

/**
 * Layer 3: Color override styles using data attributes
 * Each accent color gets its own set of CSS custom properties
 * when the data-accent-color attribute is set.
 * This enables per-instance color theming while maintaining
 * the semantic variable system.
 */
ACCENT_COLORS.forEach((color) => {
  globalStyle(`input[data-accent-color="${color}"]`, {
    vars: {
      '--input-border-focus': `var(--${color}-8)`,
      '--input-focus-ring': `var(--${color}-8)`,
      '--input-border-hover': `var(--${color}-7)`,
    }
  });
});
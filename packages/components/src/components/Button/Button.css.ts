import { recipe } from '@vanilla-extract/recipes';
import { styleVariants, globalStyle } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { ACCENT_COLORS } from '../../constants/colors';

/**
 * Button Component Styles - Following the Three-Layer Pattern:
 * 
 * 1. BASE RECIPE: Defines core styles and variants using semantic CSS variables
 *    - Variables follow pattern: var(--button-[semantic]-[state], var(--fallback))
 *    - This allows theme defaults while enabling overrides
 * 
 * 2. STYLE VARIANTS: Additional styles for sub-elements (icons, badges, etc.)
 * 
 * 3. DATA ATTRIBUTE OVERRIDES: Color customization via data-accent-color
 *    - Uses globalStyle to set component-scoped CSS variables
 *    - Enables per-instance color overrides without runtime styles
 * 
 * This pattern ensures consistency, performance, and developer predictability.
 */
export const button = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: vars.font.family.sans,
    fontWeight: vars.font.weight.medium,
    lineHeight: vars.font.lineHeight.normal,
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
    ':focus-visible': {
      boxShadow: '0 0 0 2px var(--button-focus-ring, var(--color-focus-ring))', // Focus ring with override support
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
        backgroundColor: 'var(--button-accent-base, var(--color-accent-base))',
        color: 'var(--button-accent-text, var(--color-accent-text))',
        boxShadow: vars.shadow.sm,
        ':hover': {
          backgroundColor: 'var(--button-accent-hover, var(--color-accent-hover))',
          boxShadow: vars.shadow.md,
          transform: 'translateY(-1px)',
        },
        ':active': {
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
        color: 'var(--button-accent-active, var(--color-accent-active))',
        borderColor: 'var(--color-border-hover)',
        boxShadow: 'none',
        ':hover': {
          borderColor: 'var(--button-border-focus, var(--color-border-focus))',
          backgroundColor: 'var(--button-accent-surface, var(--color-accent-surface))',
          boxShadow: vars.shadow.sm,
        },
        ':active': {
          backgroundColor: 'var(--button-accent-surface-hover, var(--color-accent-surface-hover))',
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
        ':hover': {
          backgroundColor: 'var(--color-surface)',
          boxShadow: vars.shadow.xs,
        },
        ':active': {
          backgroundColor: 'var(--color-surface-hover)',
          boxShadow: 'none',
        },
      },
    },
    size: {
      sm: {
        height: '32px',
        paddingLeft: 'var(--space-3)',
        paddingRight: 'var(--space-3)',
        fontSize: 'var(--font-size-sm)',
        gap: 'var(--space-1)',
      },
      md: {
        height: '40px',
        paddingLeft: 'var(--space-4)',
        paddingRight: 'var(--space-4)',
        fontSize: 'var(--font-size-base)',
        gap: 'var(--space-2)',
      },
      lg: {
        height: '48px',
        paddingLeft: 'var(--space-5)',
        paddingRight: 'var(--space-5)',
        fontSize: 'var(--font-size-lg)',
        gap: 'var(--space-2)',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
    fullWidth: false,
  },
});

export const buttonIcon = styleVariants({
  left: {
    marginRight: '-0.125rem',
    marginLeft: '-0.25rem',
  },
  right: {
    marginLeft: '-0.125rem',
    marginRight: '-0.25rem',
  },
});

/**
 * Color override styles using data attributes
 * Each accent color gets its own set of CSS custom properties
 * when the data-accent-color attribute is set
 */

// Colors that need dark text for contrast on light backgrounds
const LIGHT_COLORS = ['yellow', 'amber', 'lime', 'mint', 'sky'] as const;

ACCENT_COLORS.forEach((color) => {
  // Determine appropriate text color based on the accent color
  const needsDarkText = LIGHT_COLORS.includes(color as any);
  // Use black-a-12 for light colors - always dark regardless of theme
  const textColor = needsDarkText ? 'var(--black-a-12)' : 'white';
  
  globalStyle(`[data-accent-color="${color}"]`, {
    vars: {
      '--button-accent-base': `var(--${color}-9)`,
      '--button-accent-hover': `var(--${color}-10)`,
      '--button-accent-active': `var(--${color}-11)`,
      '--button-accent-text': textColor,
      '--button-accent-surface': `var(--${color}-3)`,
      '--button-accent-surface-hover': `var(--${color}-4)`,
      '--button-accent-surface-active': `var(--${color}-5)`,
      '--button-border-focus': `var(--${color}-8)`,
      '--button-focus-ring': `var(--${color}-8)`,
      '--accent-contrast': textColor, // Set the accent-contrast variable too
    }
  });
});
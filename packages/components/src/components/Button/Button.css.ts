import { recipe } from '@vanilla-extract/recipes';
import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

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
      boxShadow: '0 0 0 2px var(--color-focus-ring)', // Focus ring
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
      solid: {
        backgroundColor: 'var(--color-accent-base)', // Solid background
        color: 'var(--color-accent-text)', // White text on solid colors
        boxShadow: vars.shadow.sm,
        ':hover': {
          backgroundColor: 'var(--color-accent-hover)', // Hover solid
          boxShadow: vars.shadow.md,
          transform: 'translateY(-1px)',
        },
        ':active': {
          boxShadow: vars.shadow.xs,
          transform: 'translateY(0)',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'var(--accent-11)', // Low-contrast text
        borderColor: 'var(--accent-7)', // UI element border
        boxShadow: 'none',
        ':hover': {
          borderColor: 'var(--accent-8)', // Hover border
          backgroundColor: 'var(--color-accent-surface)', // Subtle background on hover
          boxShadow: vars.shadow.sm,
        },
        ':active': {
          backgroundColor: 'var(--color-accent-surface-hover)', // Active background
          boxShadow: 'none',
          transform: 'scale(0.98)',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'var(--color-text)', // High-contrast text
        ':hover': {
          backgroundColor: 'var(--color-surface)', // UI element background
          boxShadow: vars.shadow.xs,
        },
        ':active': {
          backgroundColor: 'var(--color-surface-hover)', // Hover background
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
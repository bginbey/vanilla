import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const button = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: vars.font.family.sans,
    fontWeight: vars.font.weight.medium,
    lineHeight: vars.font.lineHeight.normal,
    borderRadius: vars.radius.md,
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
      boxShadow: `0 0 0 2px ${vars.color.brand.primary}`,
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
        backgroundColor: vars.color.brand.primary,
        color: vars.color.text.inverse,
        boxShadow: vars.shadow.sm,
        ':hover': {
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
        color: vars.color.brand.primary,
        borderColor: vars.color.brand.primary,
        boxShadow: 'none',
        ':hover': {
          borderColor: vars.color.brand.secondary,
          boxShadow: vars.shadow.sm,
        },
        ':active': {
          boxShadow: 'none',
          transform: 'scale(0.98)',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: vars.color.text.primary,
        ':hover': {
          boxShadow: vars.shadow.xs,
        },
        ':active': {
          boxShadow: 'none',
        },
      },
    },
    size: {
      sm: {
        height: '32px',
        paddingLeft: vars.spacing[3],
        paddingRight: vars.spacing[3],
        fontSize: vars.font.size.sm,
        gap: vars.spacing[1],
      },
      md: {
        height: '40px',
        paddingLeft: vars.spacing[4],
        paddingRight: vars.spacing[4],
        fontSize: vars.font.size.base,
        gap: vars.spacing[2],
      },
      lg: {
        height: '48px',
        paddingLeft: vars.spacing[5],
        paddingRight: vars.spacing[5],
        fontSize: vars.font.size.lg,
        gap: vars.spacing[2],
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
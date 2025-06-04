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
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    userSelect: 'none',
    textDecoration: 'none',
    border: '1px solid transparent',
    outline: 'none',
    ':focus-visible': {
      boxShadow: `0 0 0 2px ${vars.color.brand.primary}`,
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  variants: {
    variant: {
      solid: {
        backgroundColor: vars.color.brand.primary,
        color: vars.color.text.inverse,
        ':hover:not(:disabled)': {
          backgroundColor: vars.color.brand.secondary,
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: vars.color.brand.primary,
        borderColor: vars.color.brand.primary,
        ':hover:not(:disabled)': {
          backgroundColor: vars.color.brand.primary,
          color: vars.color.text.inverse,
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: vars.color.text.primary,
        ':hover:not(:disabled)': {
          backgroundColor: vars.color.background.secondary,
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
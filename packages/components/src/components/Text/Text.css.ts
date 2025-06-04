import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const text = recipe({
  base: {
    fontFamily: vars.font.family.sans,
    margin: 0,
    transition: `color ${vars.duration.fast} ${vars.easing.easeInOut}`,
    letterSpacing: vars.font.letterSpacing.normal,
  },
  variants: {
    size: {
      xs: { 
        fontSize: vars.font.size.xs,
        lineHeight: vars.font.lineHeight.normal,
      },
      sm: { 
        fontSize: vars.font.size.sm,
        lineHeight: vars.font.lineHeight.normal,
      },
      base: { 
        fontSize: vars.font.size.base,
        lineHeight: vars.font.lineHeight.normal,
      },
      lg: { 
        fontSize: vars.font.size.lg,
        lineHeight: vars.font.lineHeight.normal,
      },
      xl: { 
        fontSize: vars.font.size.xl,
        lineHeight: vars.font.lineHeight.tight,
      },
      '2xl': { 
        fontSize: vars.font.size['2xl'],
        lineHeight: vars.font.lineHeight.tight,
        letterSpacing: vars.font.letterSpacing.tight,
      },
      '3xl': { 
        fontSize: vars.font.size['3xl'],
        lineHeight: vars.font.lineHeight.tight,
        letterSpacing: vars.font.letterSpacing.tight,
      },
      '4xl': { 
        fontSize: vars.font.size['4xl'],
        lineHeight: vars.font.lineHeight.tight,
        letterSpacing: vars.font.letterSpacing.tight,
      },
      '5xl': { 
        fontSize: vars.font.size['5xl'],
        lineHeight: vars.font.lineHeight.tight,
        letterSpacing: vars.font.letterSpacing.tight,
      },
    },
    weight: {
      normal: { fontWeight: vars.font.weight.normal },
      medium: { fontWeight: vars.font.weight.medium },
      semibold: { fontWeight: vars.font.weight.semibold },
      bold: { fontWeight: vars.font.weight.bold },
    },
    color: {
      primary: { color: vars.color.text.primary },
      secondary: { color: vars.color.text.secondary },
      tertiary: { color: vars.color.text.tertiary },
      inverse: { color: vars.color.text.inverse },
      brand: { color: vars.color.brand.primary },
      success: { color: vars.color.feedback.success },
      warning: { color: vars.color.feedback.warning },
      error: { color: vars.color.feedback.error },
      info: { color: vars.color.feedback.info },
    },
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
    truncate: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    variant: {
      body: {
        lineHeight: vars.font.lineHeight.relaxed,
      },
      heading: {
        fontWeight: vars.font.weight.bold,
        letterSpacing: vars.font.letterSpacing.tight,
      },
      label: {
        fontWeight: vars.font.weight.medium,
        letterSpacing: vars.font.letterSpacing.wide,
        textTransform: 'uppercase',
        fontSize: vars.font.size.xs,
      },
      code: {
        fontFamily: vars.font.family.mono,
        backgroundColor: vars.color.background.secondary,
        padding: `${vars.spacing[1]} ${vars.spacing[2]}`,
        borderRadius: vars.radius.sm,
        fontSize: '0.9em',
      },
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    color: 'primary',
  },
});
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const text = recipe({
  base: {
    fontFamily: vars.font.family.sans,
    margin: 0,
  },
  variants: {
    size: {
      xs: { fontSize: vars.font.size.xs },
      sm: { fontSize: vars.font.size.sm },
      base: { fontSize: vars.font.size.base },
      lg: { fontSize: vars.font.size.lg },
      xl: { fontSize: vars.font.size.xl },
      '2xl': { fontSize: vars.font.size['2xl'] },
      '3xl': { fontSize: vars.font.size['3xl'] },
      '4xl': { fontSize: vars.font.size['4xl'] },
      '5xl': { fontSize: vars.font.size['5xl'] },
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
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    color: 'primary',
  },
});
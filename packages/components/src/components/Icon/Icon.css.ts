import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const iconBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  userSelect: 'none',
  verticalAlign: 'middle',
  transition: `color ${vars.duration.fast} ${vars.easing.easeInOut}`,
});

export const iconSizes = styleVariants({
  xs: {
    width: '0.75rem',
    height: '0.75rem',
  },
  sm: {
    width: '1rem',
    height: '1rem',
  },
  md: {
    width: '1.25rem',
    height: '1.25rem',
  },
  lg: {
    width: '1.5rem',
    height: '1.5rem',
  },
  xl: {
    width: '2rem',
    height: '2rem',
  },
});

export const iconColors = styleVariants({
  inherit: {
    color: 'inherit',
  },
  current: {
    color: 'currentColor',
  },
  primary: {
    color: vars.color.gray[12],
  },
  secondary: {
    color: vars.color.gray[11],
  },
  tertiary: {
    color: vars.color.gray[10],
  },
  error: {
    color: vars.color.red[9],
  },
  warning: {
    color: vars.color.yellow[11],
  },
  success: {
    color: vars.color.green[9],
  },
  info: {
    color: vars.color.blue[9],
  },
  // Color scale values
  1: { color: vars.color.gray[1] },
  2: { color: vars.color.gray[2] },
  3: { color: vars.color.gray[3] },
  4: { color: vars.color.gray[4] },
  5: { color: vars.color.gray[5] },
  6: { color: vars.color.gray[6] },
  7: { color: vars.color.gray[7] },
  8: { color: vars.color.gray[8] },
  9: { color: vars.color.gray[9] },
  10: { color: vars.color.gray[10] },
  11: { color: vars.color.gray[11] },
  12: { color: vars.color.gray[12] },
});
import { style, styleVariants, globalStyle } from '@vanilla-extract/css';
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

// Style the SVG children
globalStyle(`${iconBase} > svg`, {
  width: '100%',
  height: '100%',
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
});
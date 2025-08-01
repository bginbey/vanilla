import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

// Respect motion preferences
globalStyle('*, *::before, *::after', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
    },
  },
});

globalStyle('html', {
  fontSize: '16px',
  lineHeight: vars.font.lineHeight.normal,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('body', {
  margin: 0,
  fontFamily: vars.font.family.sans,
  fontSize: vars.font.size.base,
  color: vars.color.gray[12], // High-contrast text
  backgroundColor: vars.color.gray[1], // App background
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
  fontWeight: vars.font.weight.bold,
  lineHeight: vars.font.lineHeight.tight,
});

globalStyle('p', {
  margin: 0,
});

globalStyle('a', {
  color: vars.color.blue[11], // Low-contrast colored text
  textDecoration: 'none',
  transition: `${vars.transition.property.colors} ${vars.duration.fast} ${vars.easing.easeInOut}`,
});

globalStyle('a:hover', {
  textDecoration: 'underline',
});

// Enhanced focus styles
globalStyle(':focus-visible', {
  outline: `2px solid ${vars.color.blue[8]}`, // Focus ring color
  outlineOffset: '2px',
});

globalStyle(':focus:not(:focus-visible)', {
  outline: 'none',
});

globalStyle('button', {
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  padding: 0,
  font: 'inherit',
});

// Smooth scrolling with motion preference support
globalStyle('html', {
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      scrollBehavior: 'smooth',
    },
  },
});

// Selection styles
globalStyle('::selection', {
  backgroundColor: vars.color.blue[9], // Solid color
  color: 'white',
});

globalStyle('img, video', {
  maxWidth: '100%',
  height: 'auto',
});

globalStyle('code', {
  fontFamily: vars.font.family.mono,
  fontSize: '0.9em',
  backgroundColor: vars.color.gray[3], // UI element background
  color: vars.color.gray[12],
  padding: '0.2em 0.4em',
  borderRadius: vars.radius.sm,
});
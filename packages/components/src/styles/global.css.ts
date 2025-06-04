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
});

// Apply theme-aware styles to elements within a theme class
globalStyle('[class*="theme_"] body, [class*="theme_"]', {
  fontFamily: vars.font.family.sans,
  fontSize: vars.font.size.base,
  color: vars.color.text.primary,
  backgroundColor: vars.color.background.primary,
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
});

globalStyle('[class*="theme_"] h1, [class*="theme_"] h2, [class*="theme_"] h3, [class*="theme_"] h4, [class*="theme_"] h5, [class*="theme_"] h6', {
  fontWeight: vars.font.weight.bold,
  lineHeight: vars.font.lineHeight.tight,
});

globalStyle('p', {
  margin: 0,
});

globalStyle('a', {
  textDecoration: 'none',
  transition: `${vars.transition.property.colors} ${vars.duration.fast} ${vars.easing.easeInOut}`,
});

globalStyle('[class*="theme_"] a', {
  color: vars.color.brand.primary,
});

globalStyle('a:hover', {
  textDecoration: 'underline',
});

// Enhanced focus styles
globalStyle(':focus-visible', {
  outline: `2px solid ${vars.color.brand.primary}`,
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
globalStyle('[class*="theme_"] ::selection', {
  backgroundColor: vars.color.brand.primary,
  color: vars.color.text.inverse,
});

globalStyle('img, video', {
  maxWidth: '100%',
  height: 'auto',
});

globalStyle('[class*="theme_"] code', {
  fontFamily: vars.font.family.mono,
});
import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
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
  color: vars.color.text.primary,
  backgroundColor: vars.color.background.primary,
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
  color: vars.color.brand.primary,
  textDecoration: 'none',
});

globalStyle('a:hover', {
  textDecoration: 'underline',
});

globalStyle('button', {
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  padding: 0,
  font: 'inherit',
});

globalStyle('img, video', {
  maxWidth: '100%',
  height: 'auto',
});

globalStyle('code', {
  fontFamily: vars.font.family.mono,
});
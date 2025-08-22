import type { ColorScale } from '../types';

// Slate scale - gray with slight blue tint
// Light mode
export const slate: ColorScale = {
  1: '#fcfcfd',
  2: '#f9f9fb',
  3: '#f0f0f3',
  4: '#e8e8ec',
  5: '#e0e1e6',
  6: '#d9d9e0',
  7: '#cdced6',
  8: '#b9bbc6',
  9: '#8b8d98',
  10: '#80838d',
  11: '#60646c',
  12: '#1c2024',
};

// Dark mode
export const slateDark: ColorScale = {
  1: '#111113',
  2: '#18191b',
  3: '#212225',
  4: '#272a2d',
  5: '#2e3135',
  6: '#363a3f',
  7: '#43484e',
  8: '#5a6169',
  9: '#696e77',
  10: '#777b84',
  11: '#b0b4ba',
  12: '#edeef0',
};

// Alpha variants for overlays
export const slateA: ColorScale = {
  1: 'rgba(0, 0, 85, 0.012)',
  2: 'rgba(0, 0, 85, 0.024)',
  3: 'rgba(0, 0, 51, 0.059)',
  4: 'rgba(0, 0, 45, 0.090)',
  5: 'rgba(0, 9, 50, 0.122)',
  6: 'rgba(0, 0, 47, 0.149)',
  7: 'rgba(0, 6, 46, 0.196)',
  8: 'rgba(0, 8, 48, 0.275)',
  9: 'rgba(0, 5, 29, 0.455)',
  10: 'rgba(0, 7, 27, 0.498)',
  11: 'rgba(0, 7, 20, 0.624)',
  12: 'rgba(0, 5, 9, 0.890)',
};

export const slateDarkA: ColorScale = {
  1: 'rgba(0, 0, 0, 0.000)',
  2: 'rgba(216, 244, 246, 0.035)',
  3: 'rgba(221, 234, 248, 0.078)',
  4: 'rgba(211, 237, 248, 0.114)',
  5: 'rgba(217, 237, 254, 0.145)',
  6: 'rgba(214, 235, 253, 0.188)',
  7: 'rgba(217, 237, 255, 0.251)',
  8: 'rgba(217, 237, 255, 0.365)',
  9: 'rgba(223, 235, 253, 0.427)',
  10: 'rgba(229, 237, 253, 0.482)',
  11: 'rgba(241, 247, 254, 0.710)',
  12: 'rgba(252, 253, 255, 0.937)',
};
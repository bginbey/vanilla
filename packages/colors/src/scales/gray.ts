import type { ColorScale } from '../types';

// Hand-tuned gray scale for optimal visual balance
// Light mode
export const gray: ColorScale = {
  1: '#fcfcfc',
  2: '#f9f9f9',
  3: '#f0f0f0',
  4: '#e8e8e8',
  5: '#e0e0e0',
  6: '#d9d9d9',
  7: '#cecece',
  8: '#bbbbbb',
  9: '#8d8d8d',
  10: '#838383',
  11: '#646464',
  12: '#202020',
};

// Dark mode
export const grayDark: ColorScale = {
  1: '#111111',
  2: '#191919',
  3: '#222222',
  4: '#2a2a2a',
  5: '#313131',
  6: '#3a3a3a',
  7: '#484848',
  8: '#606060',
  9: '#6c6c6c',
  10: '#7b7b7b',
  11: '#b4b4b4',
  12: '#eeeeee',
};

// Alpha variants for overlays
export const grayA: ColorScale = {
  1: 'rgba(0, 0, 0, 0.012)',
  2: 'rgba(0, 0, 0, 0.024)',
  3: 'rgba(0, 0, 0, 0.055)',
  4: 'rgba(0, 0, 0, 0.090)',
  5: 'rgba(0, 0, 0, 0.114)',
  6: 'rgba(0, 0, 0, 0.141)',
  7: 'rgba(0, 0, 0, 0.180)',
  8: 'rgba(0, 0, 0, 0.265)',
  9: 'rgba(0, 0, 0, 0.443)',
  10: 'rgba(0, 0, 0, 0.491)',
  11: 'rgba(0, 0, 0, 0.600)',
  12: 'rgba(0, 0, 0, 0.870)',
};

export const grayDarkA: ColorScale = {
  1: 'rgba(255, 255, 255, 0.065)',
  2: 'rgba(255, 255, 255, 0.095)',
  3: 'rgba(255, 255, 255, 0.135)',
  4: 'rgba(255, 255, 255, 0.165)',
  5: 'rgba(255, 255, 255, 0.195)',
  6: 'rgba(255, 255, 255, 0.225)',
  7: 'rgba(255, 255, 255, 0.285)',
  8: 'rgba(255, 255, 255, 0.375)',
  9: 'rgba(255, 255, 255, 0.425)',
  10: 'rgba(255, 255, 255, 0.485)',
  11: 'rgba(255, 255, 255, 0.705)',
  12: 'rgba(255, 255, 255, 0.930)',
};
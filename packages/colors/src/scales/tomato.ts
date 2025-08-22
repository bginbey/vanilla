import type { ColorScale } from '../types';

// Tomato scale - warm red-orange
// Light mode
export const tomato: ColorScale = {
  1: '#fffcfc',
  2: '#fff8f7',
  3: '#feebe7',
  4: '#ffdcd3',
  5: '#ffcdc2',
  6: '#fdbdaf',
  7: '#f5a898',
  8: '#ec8e7b',
  9: '#e54d2e',
  10: '#dd4425',
  11: '#d13415',
  12: '#5c271f',
};

// Dark mode
export const tomatoDark: ColorScale = {
  1: '#181111',
  2: '#1f1513',
  3: '#391714',
  4: '#4e1511',
  5: '#5e1c16',
  6: '#6e2920',
  7: '#853a2d',
  8: '#ac4d39',
  9: '#e54d2e',
  10: '#ec6142',
  11: '#ff977d',
  12: '#fbd3cb',
};

// Alpha variants for overlays
export const tomatoA: ColorScale = {
  1: 'rgba(255, 0, 0, 0.012)',
  2: 'rgba(255, 32, 0, 0.031)',
  3: 'rgba(245, 43, 0, 0.094)',
  4: 'rgba(255, 53, 0, 0.173)',
  5: 'rgba(255, 46, 0, 0.239)',
  6: 'rgba(249, 45, 0, 0.314)',
  7: 'rgba(231, 40, 0, 0.404)',
  8: 'rgba(219, 37, 0, 0.518)',
  9: 'rgba(223, 38, 0, 0.82)',
  10: 'rgba(215, 36, 0, 0.855)',
  11: 'rgba(205, 34, 0, 0.918)',
  12: 'rgba(70, 9, 0, 0.878)',
};

export const tomatoDarkA: ColorScale = {
  1: 'rgba(241, 18, 18, 0.031)',
  2: 'rgba(255, 85, 51, 0.059)',
  3: 'rgba(255, 53, 35, 0.169)',
  4: 'rgba(253, 32, 17, 0.259)',
  5: 'rgba(254, 51, 33, 0.325)',
  6: 'rgba(255, 79, 56, 0.392)',
  7: 'rgba(253, 100, 74, 0.49)',
  8: 'rgba(254, 109, 78, 0.655)',
  9: 'rgba(254, 84, 49, 0.894)',
  10: 'rgba(255, 104, 71, 0.922)',
  11: '#ff977d',
  12: 'rgba(255, 214, 206, 0.984)',
};
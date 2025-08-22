import type { ColorScale } from '../types';

// Gold scale - light, warm yellow
// Light mode
export const gold: ColorScale = {
  1: '#fdfdfc',
  2: '#faf9f2',
  3: '#f2f0e7',
  4: '#eae6db',
  5: '#e1dccf',
  6: '#d8d0bf',
  7: '#cbc0aa',
  8: '#b9a88d',
  9: '#978365',
  10: '#8c7a5e',
  11: '#71624b',
  12: '#3b352b',
};

// Dark mode
export const goldDark: ColorScale = {
  1: '#121211',
  2: '#1b1a17',
  3: '#24231f',
  4: '#2d2b26',
  5: '#38352e',
  6: '#444039',
  7: '#544f46',
  8: '#696256',
  9: '#978365',
  10: '#a39073',
  11: '#cbb99f',
  12: '#e8e2d9',
};

// Alpha variants for overlays
export const goldA: ColorScale = {
  1: 'rgba(85, 85, 0, 0.012)',
  2: 'rgba(157, 138, 0, 0.051)',
  3: 'rgba(117, 96, 0, 0.094)',
  4: 'rgba(107, 78, 0, 0.141)',
  5: 'rgba(96, 70, 0, 0.188)',
  6: 'rgba(100, 68, 0, 0.251)',
  7: 'rgba(99, 66, 0, 0.333)',
  8: 'rgba(99, 61, 0, 0.447)',
  9: 'rgba(83, 50, 0, 0.604)',
  10: 'rgba(73, 45, 0, 0.631)',
  11: 'rgba(54, 33, 0, 0.706)',
  12: 'rgba(19, 12, 0, 0.831)',
};

export const goldDarkA: ColorScale = {
  1: 'rgba(145, 145, 17, 0.008)',
  2: 'rgba(249, 226, 157, 0.043)',
  3: 'rgba(248, 236, 187, 0.082)',
  4: 'rgba(255, 238, 196, 0.118)',
  5: 'rgba(254, 236, 194, 0.165)',
  6: 'rgba(254, 235, 203, 0.216)',
  7: 'rgba(255, 237, 205, 0.282)',
  8: 'rgba(253, 234, 202, 0.373)',
  9: 'rgba(255, 219, 166, 0.565)',
  10: 'rgba(254, 223, 176, 0.616)',
  11: 'rgba(254, 231, 198, 0.784)',
  12: 'rgba(254, 247, 237, 0.906)',
};
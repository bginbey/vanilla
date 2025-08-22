import type { ColorScale } from '../types';

// Bronze scale - dark, warm brown
// Light mode
export const bronze: ColorScale = {
  1: '#fdfcfc',
  2: '#fdf7f5',
  3: '#f6edea',
  4: '#efe4df',
  5: '#e7d9d3',
  6: '#dfcdc5',
  7: '#d3bcb3',
  8: '#c2a499',
  9: '#a18072',
  10: '#957468',
  11: '#7d5e54',
  12: '#43302b',
};

// Dark mode
export const bronzeDark: ColorScale = {
  1: '#141110',
  2: '#1c1917',
  3: '#262220',
  4: '#302a27',
  5: '#3b3330',
  6: '#493e3a',
  7: '#5a4c47',
  8: '#6f5f58',
  9: '#a18072',
  10: '#ae8c7e',
  11: '#d4b3a5',
  12: '#ede0d9',
};

// Alpha variants for overlays
export const bronzeA: ColorScale = {
  1: 'rgba(85, 0, 0, 0.012)',
  2: 'rgba(204, 51, 0, 0.039)',
  3: 'rgba(146, 37, 0, 0.082)',
  4: 'rgba(128, 40, 0, 0.125)',
  5: 'rgba(116, 35, 0, 0.173)',
  6: 'rgba(115, 36, 0, 0.227)',
  7: 'rgba(108, 31, 0, 0.298)',
  8: 'rgba(103, 28, 0, 0.400)',
  9: 'rgba(85, 26, 0, 0.553)',
  10: 'rgba(76, 21, 0, 0.592)',
  11: 'rgba(61, 15, 0, 0.671)',
  12: 'rgba(29, 6, 0, 0.831)',
};

export const bronzeDarkA: ColorScale = {
  1: 'rgba(209, 17, 0, 0.016)',
  2: 'rgba(251, 188, 145, 0.047)',
  3: 'rgba(250, 206, 184, 0.090)',
  4: 'rgba(250, 205, 182, 0.133)',
  5: 'rgba(255, 210, 193, 0.176)',
  6: 'rgba(255, 209, 192, 0.235)',
  7: 'rgba(253, 208, 192, 0.310)',
  8: 'rgba(255, 214, 197, 0.396)',
  9: 'rgba(254, 199, 176, 0.608)',
  10: 'rgba(254, 202, 181, 0.663)',
  11: 'rgba(255, 215, 198, 0.820)',
  12: 'rgba(255, 241, 233, 0.925)',
};
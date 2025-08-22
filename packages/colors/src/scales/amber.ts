import type { ColorScale } from '../types';

// Amber scale - warm yellow-orange
// Light mode
export const amber: ColorScale = {
  1: '#fefdfb',
  2: '#fefbe9',
  3: '#fff7c2',
  4: '#ffee9c',
  5: '#fbe577',
  6: '#f3d673',
  7: '#e9c162',
  8: '#e2a336',
  9: '#ffc53d',
  10: '#ffba18',
  11: '#ab6400',
  12: '#4f3422',
};

// Dark mode
export const amberDark: ColorScale = {
  1: '#16120c',
  2: '#1d180f',
  3: '#302008',
  4: '#3f2700',
  5: '#4d3000',
  6: '#5c3d05',
  7: '#714f19',
  8: '#8f6424',
  9: '#ffc53d',
  10: '#ffd60a',
  11: '#ffca16',
  12: '#ffe7b3',
};

// Alpha variants for overlays
export const amberA: ColorScale = {
  1: 'rgba(192, 128, 0, 0.016)',
  2: 'rgba(244, 209, 0, 0.086)',
  3: 'rgba(255, 222, 0, 0.239)',
  4: 'rgba(255, 212, 0, 0.388)',
  5: 'rgba(248, 207, 0, 0.533)',
  6: 'rgba(234, 181, 0, 0.549)',
  7: 'rgba(220, 155, 0, 0.616)',
  8: 'rgba(218, 138, 0, 0.788)',
  9: 'rgba(255, 179, 0, 0.761)',
  10: 'rgba(255, 179, 0, 0.906)',
  11: '#ab6400',
  12: 'rgba(52, 21, 0, 0.867)',
};

export const amberDarkA: ColorScale = {
  1: 'rgba(230, 60, 0, 0.024)',
  2: 'rgba(253, 155, 0, 0.051)',
  3: 'rgba(250, 130, 0, 0.133)',
  4: 'rgba(252, 130, 0, 0.196)',
  5: 'rgba(253, 139, 0, 0.255)',
  6: 'rgba(253, 155, 0, 0.318)',
  7: 'rgba(255, 171, 37, 0.404)',
  8: 'rgba(255, 174, 53, 0.529)',
  9: '#ffc53d',
  10: '#ffd60a',
  11: '#ffca16',
  12: '#ffe7b3',
};
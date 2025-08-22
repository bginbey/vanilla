import type { ColorScale } from '../types';

// Ruby scale - rich red with pink undertones
// Light mode
export const ruby: ColorScale = {
  1: '#fffcfd',
  2: '#fff7f8',
  3: '#feeaed',
  4: '#ffdce1',
  5: '#ffced6',
  6: '#f8bfc8',
  7: '#efacb8',
  8: '#e592a3',
  9: '#e54666',
  10: '#dc3b5d',
  11: '#ca244d',
  12: '#64172b',
};

// Dark mode
export const rubyDark: ColorScale = {
  1: '#191113',
  2: '#1e1517',
  3: '#3a141e',
  4: '#4e1325',
  5: '#5e1a2e',
  6: '#6f2539',
  7: '#883447',
  8: '#b3445a',
  9: '#e54666',
  10: '#ec5a72',
  11: '#ff949d',
  12: '#fed2e1',
};

// Alpha variants for overlays
export const rubyA: ColorScale = {
  1: 'rgba(255, 0, 85, 0.012)',
  2: 'rgba(255, 0, 32, 0.031)',
  3: 'rgba(243, 0, 37, 0.082)',
  4: 'rgba(255, 0, 37, 0.137)',
  5: 'rgba(255, 0, 42, 0.192)',
  6: 'rgba(228, 0, 36, 0.251)',
  7: 'rgba(206, 0, 37, 0.325)',
  8: 'rgba(195, 0, 40, 0.427)',
  9: 'rgba(219, 0, 44, 0.725)',
  10: 'rgba(210, 0, 44, 0.769)',
  11: 'rgba(193, 0, 48, 0.859)',
  12: 'rgba(85, 0, 22, 0.91)',
};

export const rubyDarkA: ColorScale = {
  1: 'rgba(244, 18, 74, 0.035)',
  2: 'rgba(254, 90, 127, 0.055)',
  3: 'rgba(255, 35, 93, 0.173)',
  4: 'rgba(253, 25, 94, 0.259)',
  5: 'rgba(254, 45, 107, 0.325)',
  6: 'rgba(255, 68, 118, 0.396)',
  7: 'rgba(255, 87, 125, 0.502)',
  8: 'rgba(255, 92, 124, 0.682)',
  9: 'rgba(254, 76, 112, 0.894)',
  10: 'rgba(255, 97, 123, 0.922)',
  11: '#ff949d',
  12: 'rgba(255, 211, 226, 0.996)',
};
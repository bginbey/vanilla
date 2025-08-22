import type { ColorScale } from '../types';

// Olive scale - gray with slight yellow-green tint
// Light mode
export const olive: ColorScale = {
  1: '#fcfdfc',
  2: '#f8faf8',
  3: '#eff1ef',
  4: '#e7e9e7',
  5: '#dfe2df',
  6: '#d7dad7',
  7: '#cccfcc',
  8: '#b9bcb8',
  9: '#898e87',
  10: '#7f847d',
  11: '#60655f',
  12: '#1d211c',
};

// Dark mode
export const oliveDark: ColorScale = {
  1: '#111210',
  2: '#181917',
  3: '#212220',
  4: '#282a27',
  5: '#2f312e',
  6: '#383a36',
  7: '#454843',
  8: '#5c625b',
  9: '#687066',
  10: '#767d74',
  11: '#afb5ad',
  12: '#eceeec',
};

// Alpha variants for overlays
export const oliveA: ColorScale = {
  1: 'rgba(0, 85, 0, 0.012)',
  2: 'rgba(0, 73, 0, 0.027)',
  3: 'rgba(0, 32, 0, 0.063)',
  4: 'rgba(0, 22, 0, 0.094)',
  5: 'rgba(0, 24, 0, 0.125)',
  6: 'rgba(0, 20, 0, 0.157)',
  7: 'rgba(0, 15, 0, 0.200)',
  8: 'rgba(4, 15, 0, 0.278)',
  9: 'rgba(5, 15, 0, 0.471)',
  10: 'rgba(4, 14, 0, 0.510)',
  11: 'rgba(2, 10, 0, 0.627)',
  12: 'rgba(1, 6, 0, 0.890)',
};

export const oliveDarkA: ColorScale = {
  1: 'rgba(0, 0, 0, 0.000)',
  2: 'rgba(241, 242, 240, 0.031)',
  3: 'rgba(244, 245, 243, 0.071)',
  4: 'rgba(243, 254, 242, 0.102)',
  5: 'rgba(242, 251, 241, 0.133)',
  6: 'rgba(244, 250, 237, 0.173)',
  7: 'rgba(242, 252, 237, 0.231)',
  8: 'rgba(237, 253, 235, 0.341)',
  9: 'rgba(235, 253, 231, 0.400)',
  10: 'rgba(240, 253, 236, 0.455)',
  11: 'rgba(246, 254, 244, 0.690)',
  12: 'rgba(253, 255, 253, 0.929)',
};
import type { ColorScale } from '../types';

// Sage scale - gray with slight green tint
// Light mode
export const sage: ColorScale = {
  1: '#fbfdfc',
  2: '#f7f9f8',
  3: '#eef1f0',
  4: '#e6e9e8',
  5: '#dfe2e0',
  6: '#d7dad9',
  7: '#cbcfcd',
  8: '#b8bcba',
  9: '#868e8b',
  10: '#7c8481',
  11: '#5f6563',
  12: '#1a211e',
};

// Dark mode
export const sageDark: ColorScale = {
  1: '#101211',
  2: '#171918',
  3: '#202221',
  4: '#272a29',
  5: '#2e3130',
  6: '#373b39',
  7: '#444947',
  8: '#5b625f',
  9: '#63706b',
  10: '#717d79',
  11: '#adb5b2',
  12: '#eceeed',
};

// Alpha variants for overlays
export const sageA: ColorScale = {
  1: 'rgba(0, 128, 64, 0.016)',
  2: 'rgba(0, 64, 32, 0.031)',
  3: 'rgba(0, 45, 30, 0.067)',
  4: 'rgba(0, 31, 21, 0.098)',
  5: 'rgba(0, 24, 8, 0.125)',
  6: 'rgba(0, 20, 13, 0.157)',
  7: 'rgba(0, 20, 10, 0.204)',
  8: 'rgba(0, 15, 8, 0.278)',
  9: 'rgba(0, 17, 11, 0.475)',
  10: 'rgba(0, 16, 10, 0.514)',
  11: 'rgba(0, 10, 7, 0.627)',
  12: 'rgba(0, 8, 5, 0.898)',
};

export const sageDarkA: ColorScale = {
  1: 'rgba(0, 0, 0, 0.000)',
  2: 'rgba(240, 242, 241, 0.031)',
  3: 'rgba(243, 245, 244, 0.071)',
  4: 'rgba(242, 254, 253, 0.102)',
  5: 'rgba(241, 251, 250, 0.133)',
  6: 'rgba(237, 251, 244, 0.176)',
  7: 'rgba(237, 252, 247, 0.235)',
  8: 'rgba(235, 253, 246, 0.341)',
  9: 'rgba(223, 253, 242, 0.400)',
  10: 'rgba(229, 253, 246, 0.455)',
  11: 'rgba(244, 254, 251, 0.690)',
  12: 'rgba(253, 255, 254, 0.929)',
};
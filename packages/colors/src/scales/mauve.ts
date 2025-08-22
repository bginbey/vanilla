import type { ColorScale } from '../types';

// Mauve scale - gray with slight purple tint
// Light mode
export const mauve: ColorScale = {
  1: '#fdfcfd',
  2: '#faf9fb',
  3: '#f2eff3',
  4: '#eae7ec',
  5: '#e3dfe6',
  6: '#dbd8e0',
  7: '#d0cdd7',
  8: '#bcbac7',
  9: '#8e8c99',
  10: '#84828e',
  11: '#65636d',
  12: '#211f26',
};

// Dark mode
export const mauveDark: ColorScale = {
  1: '#121113',
  2: '#1a191b',
  3: '#232225',
  4: '#2b292d',
  5: '#323035',
  6: '#3c393f',
  7: '#49474e',
  8: '#625f69',
  9: '#6f6d78',
  10: '#7c7a85',
  11: '#b5b2bc',
  12: '#eeeef0',
};

// Alpha variants for overlays
export const mauveA: ColorScale = {
  1: 'rgba(85, 0, 85, 0.012)',
  2: 'rgba(43, 0, 85, 0.024)',
  3: 'rgba(48, 0, 64, 0.063)',
  4: 'rgba(32, 0, 54, 0.094)',
  5: 'rgba(32, 0, 56, 0.125)',
  6: 'rgba(20, 0, 53, 0.153)',
  7: 'rgba(16, 0, 51, 0.196)',
  8: 'rgba(8, 0, 49, 0.271)',
  9: 'rgba(5, 0, 29, 0.451)',
  10: 'rgba(5, 0, 25, 0.490)',
  11: 'rgba(4, 0, 17, 0.612)',
  12: 'rgba(2, 0, 8, 0.878)',
};

export const mauveDarkA: ColorScale = {
  1: 'rgba(0, 0, 0, 0.000)',
  2: 'rgba(245, 244, 246, 0.035)',
  3: 'rgba(235, 234, 248, 0.078)',
  4: 'rgba(238, 229, 248, 0.114)',
  5: 'rgba(239, 230, 254, 0.145)',
  6: 'rgba(241, 230, 253, 0.188)',
  7: 'rgba(238, 233, 255, 0.251)',
  8: 'rgba(238, 231, 255, 0.365)',
  9: 'rgba(234, 230, 253, 0.431)',
  10: 'rgba(236, 233, 253, 0.486)',
  11: 'rgba(245, 241, 255, 0.718)',
  12: 'rgba(253, 253, 255, 0.937)',
};
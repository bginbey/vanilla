import type { ColorScale } from '../types';

// Sand scale - gray with slight yellow tint
// Light mode
export const sand: ColorScale = {
  1: '#fdfdfc',
  2: '#f9f9f8',
  3: '#f1f0ef',
  4: '#e9e8e6',
  5: '#e2e1de',
  6: '#dad9d6',
  7: '#cfceca',
  8: '#bcbbb5',
  9: '#8d8d86',
  10: '#82827c',
  11: '#63635e',
  12: '#21201c',
};

// Dark mode
export const sandDark: ColorScale = {
  1: '#111110',
  2: '#191918',
  3: '#222221',
  4: '#2a2a28',
  5: '#31312e',
  6: '#3b3a37',
  7: '#494844',
  8: '#62605b',
  9: '#6f6d66',
  10: '#7c7b74',
  11: '#b5b3ad',
  12: '#eeeeec',
};

// Alpha variants for overlays
export const sandA: ColorScale = {
  1: 'rgba(85, 85, 0, 0.012)',
  2: 'rgba(37, 37, 0, 0.027)',
  3: 'rgba(32, 16, 0, 0.063)',
  4: 'rgba(31, 21, 0, 0.098)',
  5: 'rgba(31, 24, 0, 0.129)',
  6: 'rgba(25, 19, 0, 0.161)',
  7: 'rgba(25, 20, 0, 0.208)',
  8: 'rgba(25, 21, 1, 0.290)',
  9: 'rgba(15, 15, 0, 0.475)',
  10: 'rgba(12, 12, 0, 0.514)',
  11: 'rgba(8, 8, 0, 0.631)',
  12: 'rgba(6, 5, 0, 0.890)',
};

export const sandDarkA: ColorScale = {
  1: 'rgba(0, 0, 0, 0.000)',
  2: 'rgba(244, 244, 243, 0.035)',
  3: 'rgba(246, 246, 245, 0.075)',
  4: 'rgba(254, 254, 243, 0.106)',
  5: 'rgba(251, 251, 235, 0.137)',
  6: 'rgba(255, 250, 237, 0.176)',
  7: 'rgba(255, 251, 237, 0.235)',
  8: 'rgba(255, 249, 235, 0.341)',
  9: 'rgba(255, 250, 233, 0.396)',
  10: 'rgba(255, 253, 238, 0.451)',
  11: 'rgba(255, 252, 244, 0.690)',
  12: 'rgba(255, 255, 253, 0.929)',
};
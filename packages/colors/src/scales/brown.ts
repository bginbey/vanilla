import type { ColorScale } from '../types';

// Brown scale - rich brown tones
// Light mode
export const brown: ColorScale = {
  1: '#fefdfc',
  2: '#fcf9f6',
  3: '#f6eee7',
  4: '#f0e4d9',
  5: '#ebdaca',
  6: '#e4cdb7',
  7: '#dcbc9f',
  8: '#cea37e',
  9: '#ad7f58',
  10: '#a07553',
  11: '#815e46',
  12: '#3e332e',
};

// Dark mode
export const brownDark: ColorScale = {
  1: '#12110f',
  2: '#1c1816',
  3: '#28211d',
  4: '#322922',
  5: '#3e3128',
  6: '#4d3c2f',
  7: '#614a39',
  8: '#7c5f46',
  9: '#ad7f58',
  10: '#b88c67',
  11: '#dbb594',
  12: '#f2e1ca',
};

// Alpha variants for overlays
export const brownA: ColorScale = {
  1: 'rgba(170, 85, 0, 0.012)',
  2: 'rgba(170, 85, 0, 0.035)',
  3: 'rgba(160, 75, 0, 0.094)',
  4: 'rgba(155, 74, 0, 0.149)',
  5: 'rgba(159, 77, 0, 0.208)',
  6: 'rgba(160, 78, 0, 0.282)',
  7: 'rgba(163, 78, 0, 0.376)',
  8: 'rgba(159, 74, 0, 0.506)',
  9: 'rgba(130, 60, 0, 0.655)',
  10: 'rgba(114, 51, 0, 0.675)',
  11: 'rgba(82, 33, 0, 0.725)',
  12: 'rgba(20, 6, 0, 0.82)',
};

export const brownDarkA: ColorScale = {
  1: 'rgba(145, 17, 0, 0.008)',
  2: 'rgba(251, 166, 124, 0.047)',
  3: 'rgba(252, 181, 140, 0.098)',
  4: 'rgba(251, 187, 138, 0.141)',
  5: 'rgba(252, 184, 137, 0.192)',
  6: 'rgba(253, 186, 135, 0.255)',
  7: 'rgba(255, 187, 136, 0.337)',
  8: 'rgba(255, 190, 135, 0.451)',
  9: 'rgba(254, 184, 125, 0.659)',
  10: 'rgba(255, 193, 140, 0.702)',
  11: 'rgba(254, 209, 170, 0.851)',
  12: 'rgba(254, 236, 212, 0.949)',
};
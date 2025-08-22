import type { ColorScale } from '../types';

// Crimson scale - deep red with purple undertones
// Light mode
export const crimson: ColorScale = {
  1: '#fffcfd',
  2: '#fef7f9',
  3: '#ffe9f0',
  4: '#fedce7',
  5: '#facedd',
  6: '#f3bed1',
  7: '#eaacc3',
  8: '#e093b2',
  9: '#e93d82',
  10: '#df3478',
  11: '#cb1d63',
  12: '#621639',
};

// Dark mode
export const crimsonDark: ColorScale = {
  1: '#191114',
  2: '#201318',
  3: '#381525',
  4: '#4d122f',
  5: '#5c1839',
  6: '#6d2545',
  7: '#873356',
  8: '#b0436e',
  9: '#e93d82',
  10: '#ee518a',
  11: '#ff92ad',
  12: '#fdd3e8',
};

// Alpha variants for overlays
export const crimsonA: ColorScale = {
  1: 'rgba(255, 0, 85, 0.012)',
  2: 'rgba(224, 0, 64, 0.031)',
  3: 'rgba(255, 0, 82, 0.086)',
  4: 'rgba(248, 0, 81, 0.137)',
  5: 'rgba(229, 0, 79, 0.192)',
  6: 'rgba(208, 0, 75, 0.255)',
  7: 'rgba(191, 0, 71, 0.325)',
  8: 'rgba(182, 0, 74, 0.424)',
  9: 'rgba(226, 0, 91, 0.761)',
  10: 'rgba(215, 0, 86, 0.796)',
  11: 'rgba(196, 0, 79, 0.886)',
  12: 'rgba(83, 0, 38, 0.914)',
};

export const crimsonDarkA: ColorScale = {
  1: 'rgba(244, 18, 103, 0.035)',
  2: 'rgba(242, 47, 122, 0.067)',
  3: 'rgba(254, 42, 139, 0.165)',
  4: 'rgba(253, 21, 135, 0.255)',
  5: 'rgba(253, 39, 143, 0.318)',
  6: 'rgba(254, 69, 151, 0.388)',
  7: 'rgba(253, 85, 155, 0.498)',
  8: 'rgba(254, 91, 155, 0.671)',
  9: 'rgba(254, 65, 141, 0.91)',
  10: 'rgba(255, 86, 147, 0.929)',
  11: '#ff92ad',
  12: 'rgba(255, 213, 234, 0.992)',
};
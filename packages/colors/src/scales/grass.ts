import type { ColorScale } from '../types';

// Grass scale - pure green
// Light mode
export const grass: ColorScale = {
  1: 'color(display-p3 0.986 0.996 0.985)',
  2: 'color(display-p3 0.966 0.983 0.964)',
  3: 'color(display-p3 0.923 0.965 0.917)',
  4: 'color(display-p3 0.872 0.94 0.865)',
  5: 'color(display-p3 0.811 0.908 0.802)',
  6: 'color(display-p3 0.733 0.864 0.724)',
  7: 'color(display-p3 0.628 0.803 0.622)',
  8: 'color(display-p3 0.477 0.72 0.482)',
  9: 'color(display-p3 0.38 0.647 0.378)',
  10: 'color(display-p3 0.344 0.598 0.342)',
  11: 'color(display-p3 0.263 0.488 0.261)',
  12: 'color(display-p3 0.151 0.233 0.153)',
};

// Dark mode
export const grassDark: ColorScale = {
  1: 'color(display-p3 0.062 0.083 0.067)',
  2: 'color(display-p3 0.083 0.103 0.085)',
  3: 'color(display-p3 0.118 0.163 0.122)',
  4: 'color(display-p3 0.142 0.225 0.15)',
  5: 'color(display-p3 0.178 0.279 0.186)',
  6: 'color(display-p3 0.217 0.337 0.224)',
  7: 'color(display-p3 0.258 0.4 0.264)',
  8: 'color(display-p3 0.302 0.47 0.305)',
  9: 'color(display-p3 0.38 0.647 0.378)',
  10: 'color(display-p3 0.426 0.694 0.426)',
  11: 'color(display-p3 0.535 0.807 0.542)',
  12: 'color(display-p3 0.797 0.936 0.776)',
};

// Alpha variants for overlays
export const grassA: ColorScale = {
  1: 'color(display-p3 0.024 0.757 0.024 / 0.016)',
  2: 'color(display-p3 0.024 0.565 0.024 / 0.036)',
  3: 'color(display-p3 0.059 0.576 0.008 / 0.083)',
  4: 'color(display-p3 0.035 0.565 0.008 / 0.134)',
  5: 'color(display-p3 0.047 0.545 0.008 / 0.197)',
  6: 'color(display-p3 0.031 0.502 0.004 / 0.275)',
  7: 'color(display-p3 0.012 0.482 0.004 / 0.377)',
  8: 'color(display-p3 0 0.467 0.008 / 0.522)',
  9: 'color(display-p3 0.008 0.435 0 / 0.624)',
  10: 'color(display-p3 0.008 0.388 0 / 0.659)',
  11: 'color(display-p3 0.263 0.488 0.261)',
  12: 'color(display-p3 0.151 0.233 0.153)',
};

export const grassDarkA: ColorScale = {
  1: 'color(display-p3 0 0.992 0.071 / 0.017)',
  2: 'color(display-p3 0.482 0.996 0.584 / 0.038)',
  3: 'color(display-p3 0.549 0.992 0.588 / 0.106)',
  4: 'color(display-p3 0.51 0.996 0.557 / 0.169)',
  5: 'color(display-p3 0.553 1 0.588 / 0.227)',
  6: 'color(display-p3 0.584 1 0.608 / 0.29)',
  7: 'color(display-p3 0.604 1 0.616 / 0.358)',
  8: 'color(display-p3 0.608 1 0.62 / 0.433)',
  9: 'color(display-p3 0.573 1 0.569 / 0.622)',
  10: 'color(display-p3 0.6 0.996 0.6 / 0.673)',
  11: 'color(display-p3 0.535 0.807 0.542)',
  12: 'color(display-p3 0.797 0.936 0.776)',
};
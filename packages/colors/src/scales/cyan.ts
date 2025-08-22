import type { ColorScale } from '../types';

// Cyan scale - blue-green
// Light mode
export const cyan: ColorScale = {
  1: 'color(display-p3 0.982 0.992 0.996)',
  2: 'color(display-p3 0.955 0.981 0.984)',
  3: 'color(display-p3 0.888 0.965 0.975)',
  4: 'color(display-p3 0.821 0.941 0.959)',
  5: 'color(display-p3 0.751 0.907 0.935)',
  6: 'color(display-p3 0.671 0.862 0.9)',
  7: 'color(display-p3 0.564 0.8 0.854)',
  8: 'color(display-p3 0.388 0.715 0.798)',
  9: 'color(display-p3 0.282 0.627 0.765)',
  10: 'color(display-p3 0.264 0.583 0.71)',
  11: 'color(display-p3 0.08 0.48 0.63)',
  12: 'color(display-p3 0.108 0.232 0.277)',
};

// Dark mode
export const cyanDark: ColorScale = {
  1: 'color(display-p3 0.053 0.085 0.098)',
  2: 'color(display-p3 0.072 0.105 0.122)',
  3: 'color(display-p3 0.073 0.168 0.209)',
  4: 'color(display-p3 0.063 0.216 0.277)',
  5: 'color(display-p3 0.091 0.267 0.336)',
  6: 'color(display-p3 0.137 0.324 0.4)',
  7: 'color(display-p3 0.186 0.398 0.484)',
  8: 'color(display-p3 0.23 0.496 0.6)',
  9: 'color(display-p3 0.282 0.627 0.765)',
  10: 'color(display-p3 0.331 0.675 0.801)',
  11: 'color(display-p3 0.446 0.79 0.887)',
  12: 'color(display-p3 0.757 0.919 0.962)',
};

// Alpha variants for overlays
export const cyanA: ColorScale = {
  1: 'color(display-p3 0.02 0.608 0.804 / 0.02)',
  2: 'color(display-p3 0.02 0.557 0.647 / 0.044)',
  3: 'color(display-p3 0.004 0.694 0.796 / 0.114)',
  4: 'color(display-p3 0.004 0.678 0.784 / 0.181)',
  5: 'color(display-p3 0.004 0.624 0.733 / 0.248)',
  6: 'color(display-p3 0.004 0.584 0.706 / 0.33)',
  7: 'color(display-p3 0.004 0.541 0.667 / 0.436)',
  8: 'color(display-p3 0 0.533 0.667 / 0.612)',
  9: 'color(display-p3 0 0.482 0.675 / 0.718)',
  10: 'color(display-p3 0 0.435 0.608 / 0.738)',
  11: 'color(display-p3 0.08 0.48 0.63)',
  12: 'color(display-p3 0.108 0.232 0.277)',
};

export const cyanDarkA: ColorScale = {
  1: 'color(display-p3 0 0.647 0.992 / 0.034)',
  2: 'color(display-p3 0.133 0.733 1 / 0.059)',
  3: 'color(display-p3 0.122 0.741 0.996 / 0.152)',
  4: 'color(display-p3 0.051 0.725 1 / 0.227)',
  5: 'color(display-p3 0.149 0.757 1 / 0.29)',
  6: 'color(display-p3 0.267 0.792 1 / 0.358)',
  7: 'color(display-p3 0.333 0.808 1 / 0.446)',
  8: 'color(display-p3 0.357 0.816 1 / 0.572)',
  9: 'color(display-p3 0.357 0.82 1 / 0.748)',
  10: 'color(display-p3 0.4 0.839 1 / 0.786)',
  11: 'color(display-p3 0.446 0.79 0.887)',
  12: 'color(display-p3 0.757 0.919 0.962)',
};
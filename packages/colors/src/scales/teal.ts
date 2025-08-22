import type { ColorScale } from '../types';

// Teal scale - deep blue-green
// Light mode
export const teal: ColorScale = {
  1: 'color(display-p3 0.983 0.996 0.992)',
  2: 'color(display-p3 0.958 0.983 0.976)',
  3: 'color(display-p3 0.895 0.971 0.952)',
  4: 'color(display-p3 0.831 0.949 0.92)',
  5: 'color(display-p3 0.761 0.914 0.878)',
  6: 'color(display-p3 0.682 0.864 0.825)',
  7: 'color(display-p3 0.581 0.798 0.756)',
  8: 'color(display-p3 0.433 0.716 0.671)',
  9: 'color(display-p3 0.297 0.637 0.581)',
  10: 'color(display-p3 0.275 0.599 0.542)',
  11: 'color(display-p3 0.08 0.5 0.43)',
  12: 'color(display-p3 0.11 0.235 0.219)',
};

// Dark mode
export const tealDark: ColorScale = {
  1: 'color(display-p3 0.059 0.083 0.079)',
  2: 'color(display-p3 0.075 0.11 0.107)',
  3: 'color(display-p3 0.087 0.175 0.165)',
  4: 'color(display-p3 0.087 0.227 0.214)',
  5: 'color(display-p3 0.12 0.277 0.261)',
  6: 'color(display-p3 0.162 0.335 0.314)',
  7: 'color(display-p3 0.205 0.406 0.379)',
  8: 'color(display-p3 0.245 0.489 0.453)',
  9: 'color(display-p3 0.297 0.637 0.581)',
  10: 'color(display-p3 0.319 0.69 0.62)',
  11: 'color(display-p3 0.388 0.835 0.719)',
  12: 'color(display-p3 0.734 0.934 0.87)',
};

// Alpha variants for overlays
export const tealA: ColorScale = {
  1: 'color(display-p3 0.024 0.757 0.514 / 0.016)',
  2: 'color(display-p3 0.02 0.647 0.467 / 0.044)',
  3: 'color(display-p3 0.004 0.741 0.557 / 0.106)',
  4: 'color(display-p3 0.004 0.702 0.537 / 0.169)',
  5: 'color(display-p3 0.004 0.643 0.494 / 0.24)',
  6: 'color(display-p3 0.004 0.569 0.447 / 0.318)',
  7: 'color(display-p3 0.004 0.518 0.424 / 0.42)',
  8: 'color(display-p3 0 0.506 0.424 / 0.569)',
  9: 'color(display-p3 0 0.482 0.404 / 0.702)',
  10: 'color(display-p3 0 0.451 0.369 / 0.726)',
  11: 'color(display-p3 0.08 0.5 0.43)',
  12: 'color(display-p3 0.11 0.235 0.219)',
};

export const tealDarkA: ColorScale = {
  1: 'color(display-p3 0 0.992 0.761 / 0.017)',
  2: 'color(display-p3 0.235 0.988 0.902 / 0.047)',
  3: 'color(display-p3 0.235 1 0.898 / 0.118)',
  4: 'color(display-p3 0.18 0.996 0.929 / 0.173)',
  5: 'color(display-p3 0.31 1 0.933 / 0.227)',
  6: 'color(display-p3 0.396 1 0.933 / 0.286)',
  7: 'color(display-p3 0.443 1 0.925 / 0.366)',
  8: 'color(display-p3 0.459 1 0.925 / 0.454)',
  9: 'color(display-p3 0.443 0.996 0.906 / 0.61)',
  10: 'color(display-p3 0.439 0.996 0.89 / 0.669)',
  11: 'color(display-p3 0.388 0.835 0.719)',
  12: 'color(display-p3 0.734 0.934 0.87)',
};
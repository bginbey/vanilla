import type { ColorScale } from '../types';

// Mint scale - light green with blue undertones
// Light mode
export const mint: ColorScale = {
  1: 'color(display-p3 0.98 0.995 0.992)',
  2: 'color(display-p3 0.957 0.985 0.977)',
  3: 'color(display-p3 0.888 0.972 0.95)',
  4: 'color(display-p3 0.819 0.951 0.916)',
  5: 'color(display-p3 0.747 0.918 0.873)',
  6: 'color(display-p3 0.668 0.87 0.818)',
  7: 'color(display-p3 0.567 0.805 0.744)',
  8: 'color(display-p3 0.42 0.724 0.649)',
  9: 'color(display-p3 0.62 0.908 0.834)',
  10: 'color(display-p3 0.585 0.871 0.797)',
  11: 'color(display-p3 0.203 0.463 0.397)',
  12: 'color(display-p3 0.136 0.259 0.236)',
};

// Dark mode
export const mintDark: ColorScale = {
  1: 'color(display-p3 0.059 0.082 0.081)',
  2: 'color(display-p3 0.068 0.104 0.105)',
  3: 'color(display-p3 0.077 0.17 0.168)',
  4: 'color(display-p3 0.068 0.224 0.22)',
  5: 'color(display-p3 0.104 0.275 0.264)',
  6: 'color(display-p3 0.154 0.332 0.313)',
  7: 'color(display-p3 0.207 0.403 0.373)',
  8: 'color(display-p3 0.258 0.49 0.441)',
  9: 'color(display-p3 0.62 0.908 0.834)',
  10: 'color(display-p3 0.725 0.954 0.898)',
  11: 'color(display-p3 0.482 0.825 0.733)',
  12: 'color(display-p3 0.807 0.955 0.887)',
};

// Alpha variants for overlays
export const mintA: ColorScale = {
  1: 'color(display-p3 0.02 0.804 0.608 / 0.02)',
  2: 'color(display-p3 0.02 0.647 0.467 / 0.044)',
  3: 'color(display-p3 0.004 0.761 0.553 / 0.114)',
  4: 'color(display-p3 0.004 0.741 0.545 / 0.181)',
  5: 'color(display-p3 0.004 0.678 0.51 / 0.255)',
  6: 'color(display-p3 0.004 0.616 0.463 / 0.334)',
  7: 'color(display-p3 0.004 0.549 0.412 / 0.432)',
  8: 'color(display-p3 0 0.529 0.392 / 0.581)',
  9: 'color(display-p3 0.004 0.765 0.569 / 0.381)',
  10: 'color(display-p3 0.004 0.69 0.51 / 0.416)',
  11: 'color(display-p3 0.203 0.463 0.397)',
  12: 'color(display-p3 0.136 0.259 0.236)',
};

export const mintDarkA: ColorScale = {
  1: 'color(display-p3 0 0.992 0.992 / 0.017)',
  2: 'color(display-p3 0.071 0.98 0.98 / 0.043)',
  3: 'color(display-p3 0.176 0.996 0.996 / 0.11)',
  4: 'color(display-p3 0.071 0.996 0.973 / 0.169)',
  5: 'color(display-p3 0.243 1 0.949 / 0.223)',
  6: 'color(display-p3 0.369 1 0.933 / 0.286)',
  7: 'color(display-p3 0.459 1 0.914 / 0.362)',
  8: 'color(display-p3 0.49 1 0.89 / 0.454)',
  9: 'color(display-p3 0.678 0.996 0.914 / 0.904)',
  10: 'color(display-p3 0.761 1 0.941 / 0.95)',
  11: 'color(display-p3 0.482 0.825 0.733)',
  12: 'color(display-p3 0.807 0.955 0.887)',
};
import type { ColorScale } from '../types';

// Jade scale - green with blue undertones
// Light mode
export const jade: ColorScale = {
  1: 'color(display-p3 0.986 0.996 0.992)',
  2: 'color(display-p3 0.962 0.983 0.969)',
  3: 'color(display-p3 0.912 0.965 0.932)',
  4: 'color(display-p3 0.858 0.941 0.893)',
  5: 'color(display-p3 0.795 0.909 0.847)',
  6: 'color(display-p3 0.715 0.864 0.791)',
  7: 'color(display-p3 0.603 0.802 0.718)',
  8: 'color(display-p3 0.44 0.72 0.629)',
  9: 'color(display-p3 0.319 0.63 0.521)',
  10: 'color(display-p3 0.299 0.592 0.488)',
  11: 'color(display-p3 0.15 0.5 0.37)',
  12: 'color(display-p3 0.142 0.229 0.194)',
};

// Dark mode
export const jadeDark: ColorScale = {
  1: 'color(display-p3 0.059 0.083 0.071)',
  2: 'color(display-p3 0.078 0.11 0.094)',
  3: 'color(display-p3 0.091 0.176 0.138)',
  4: 'color(display-p3 0.102 0.228 0.177)',
  5: 'color(display-p3 0.133 0.279 0.221)',
  6: 'color(display-p3 0.174 0.334 0.273)',
  7: 'color(display-p3 0.219 0.402 0.335)',
  8: 'color(display-p3 0.263 0.488 0.411)',
  9: 'color(display-p3 0.319 0.63 0.521)',
  10: 'color(display-p3 0.338 0.68 0.555)',
  11: 'color(display-p3 0.4 0.835 0.656)',
  12: 'color(display-p3 0.734 0.934 0.838)',
};

// Alpha variants for overlays
export const jadeA: ColorScale = {
  1: 'color(display-p3 0.024 0.757 0.514 / 0.016)',
  2: 'color(display-p3 0.024 0.612 0.22 / 0.04)',
  3: 'color(display-p3 0.012 0.596 0.235 / 0.087)',
  4: 'color(display-p3 0.008 0.588 0.255 / 0.142)',
  5: 'color(display-p3 0.004 0.561 0.251 / 0.204)',
  6: 'color(display-p3 0.004 0.525 0.278 / 0.287)',
  7: 'color(display-p3 0.004 0.506 0.29 / 0.397)',
  8: 'color(display-p3 0 0.506 0.337 / 0.561)',
  9: 'color(display-p3 0 0.459 0.298 / 0.683)',
  10: 'color(display-p3 0 0.42 0.271 / 0.702)',
  11: 'color(display-p3 0.15 0.5 0.37)',
  12: 'color(display-p3 0.142 0.229 0.194)',
};

export const jadeDarkA: ColorScale = {
  1: 'color(display-p3 0 0.992 0.298 / 0.017)',
  2: 'color(display-p3 0.318 0.988 0.651 / 0.047)',
  3: 'color(display-p3 0.267 1 0.667 / 0.118)',
  4: 'color(display-p3 0.275 0.996 0.702 / 0.173)',
  5: 'color(display-p3 0.361 1 0.741 / 0.227)',
  6: 'color(display-p3 0.439 1 0.796 / 0.286)',
  7: 'color(display-p3 0.49 1 0.804 / 0.362)',
  8: 'color(display-p3 0.506 1 0.835 / 0.45)',
  9: 'color(display-p3 0.478 0.996 0.816 / 0.606)',
  10: 'color(display-p3 0.478 1 0.816 / 0.656)',
  11: 'color(display-p3 0.4 0.835 0.656)',
  12: 'color(display-p3 0.734 0.934 0.838)',
};
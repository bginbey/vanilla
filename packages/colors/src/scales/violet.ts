import type { ColorScale } from '../types';

// Violet scale - pure purple
// Light mode
export const violet: ColorScale = {
  1: 'color(display-p3 0.991 0.988 0.995)',
  2: 'color(display-p3 0.978 0.974 0.998)',
  3: 'color(display-p3 0.953 0.943 0.993)',
  4: 'color(display-p3 0.916 0.897 1)',
  5: 'color(display-p3 0.876 0.851 1)',
  6: 'color(display-p3 0.825 0.793 0.981)',
  7: 'color(display-p3 0.752 0.712 0.943)',
  8: 'color(display-p3 0.654 0.602 0.902)',
  9: 'color(display-p3 0.417 0.341 0.784)',
  10: 'color(display-p3 0.381 0.306 0.741)',
  11: 'color(display-p3 0.383 0.317 0.702)',
  12: 'color(display-p3 0.179 0.15 0.359)',
};

// Dark mode
export const violetDark: ColorScale = {
  1: 'color(display-p3 0.077 0.071 0.118)',
  2: 'color(display-p3 0.101 0.084 0.141)',
  3: 'color(display-p3 0.154 0.123 0.256)',
  4: 'color(display-p3 0.191 0.148 0.345)',
  5: 'color(display-p3 0.226 0.182 0.396)',
  6: 'color(display-p3 0.269 0.223 0.449)',
  7: 'color(display-p3 0.326 0.277 0.53)',
  8: 'color(display-p3 0.399 0.346 0.656)',
  9: 'color(display-p3 0.417 0.341 0.784)',
  10: 'color(display-p3 0.477 0.402 0.823)',
  11: 'color(display-p3 0.72 0.65 1)',
  12: 'color(display-p3 0.883 0.867 0.986)',
};

// Alpha variants for overlays
export const violetA: ColorScale = {
  1: 'color(display-p3 0.349 0.024 0.675 / 0.012)',
  2: 'color(display-p3 0.161 0.024 0.863 / 0.028)',
  3: 'color(display-p3 0.204 0.004 0.871 / 0.059)',
  4: 'color(display-p3 0.196 0.004 1 / 0.102)',
  5: 'color(display-p3 0.165 0.008 1 / 0.15)',
  6: 'color(display-p3 0.153 0.004 0.906 / 0.208)',
  7: 'color(display-p3 0.141 0.004 0.796 / 0.287)',
  8: 'color(display-p3 0.133 0.004 0.753 / 0.397)',
  9: 'color(display-p3 0.114 0 0.675 / 0.659)',
  10: 'color(display-p3 0.11 0 0.627 / 0.695)',
  11: 'color(display-p3 0.383 0.317 0.702)',
  12: 'color(display-p3 0.179 0.15 0.359)',
};

export const violetDarkA: ColorScale = {
  1: 'color(display-p3 0.282 0.141 0.996 / 0.055)',
  2: 'color(display-p3 0.51 0.263 1 / 0.08)',
  3: 'color(display-p3 0.494 0.337 0.996 / 0.202)',
  4: 'color(display-p3 0.49 0.345 1 / 0.299)',
  5: 'color(display-p3 0.525 0.392 1 / 0.353)',
  6: 'color(display-p3 0.569 0.455 1 / 0.408)',
  7: 'color(display-p3 0.588 0.494 1 / 0.496)',
  8: 'color(display-p3 0.596 0.51 1 / 0.631)',
  9: 'color(display-p3 0.522 0.424 1 / 0.769)',
  10: 'color(display-p3 0.576 0.482 1 / 0.811)',
  11: 'color(display-p3 0.72 0.65 1)',
  12: 'color(display-p3 0.883 0.867 0.986)',
};
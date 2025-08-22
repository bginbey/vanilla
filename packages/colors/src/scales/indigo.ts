import type { ColorScale } from '../types';

// Indigo scale - deep blue-purple
// Light mode
export const indigo: ColorScale = {
  1: 'color(display-p3 0.992 0.992 0.996)',
  2: 'color(display-p3 0.971 0.977 0.998)',
  3: 'color(display-p3 0.933 0.948 0.992)',
  4: 'color(display-p3 0.885 0.914 1)',
  5: 'color(display-p3 0.831 0.87 1)',
  6: 'color(display-p3 0.767 0.814 0.995)',
  7: 'color(display-p3 0.685 0.74 0.957)',
  8: 'color(display-p3 0.569 0.639 0.916)',
  9: 'color(display-p3 0.276 0.384 0.837)',
  10: 'color(display-p3 0.234 0.343 0.801)',
  11: 'color(display-p3 0.256 0.354 0.755)',
  12: 'color(display-p3 0.133 0.175 0.348)',
};

// Dark mode
export const indigoDark: ColorScale = {
  1: 'color(display-p3 0.068 0.074 0.118)',
  2: 'color(display-p3 0.081 0.089 0.144)',
  3: 'color(display-p3 0.105 0.141 0.275)',
  4: 'color(display-p3 0.129 0.18 0.369)',
  5: 'color(display-p3 0.163 0.22 0.439)',
  6: 'color(display-p3 0.203 0.262 0.5)',
  7: 'color(display-p3 0.245 0.309 0.575)',
  8: 'color(display-p3 0.285 0.362 0.674)',
  9: 'color(display-p3 0.276 0.384 0.837)',
  10: 'color(display-p3 0.354 0.445 0.866)',
  11: 'color(display-p3 0.63 0.69 1)',
  12: 'color(display-p3 0.848 0.881 0.99)',
};

// Alpha variants for overlays
export const indigoA: ColorScale = {
  1: 'color(display-p3 0.02 0.02 0.51 / 0.008)',
  2: 'color(display-p3 0.024 0.161 0.863 / 0.028)',
  3: 'color(display-p3 0.008 0.239 0.886 / 0.067)',
  4: 'color(display-p3 0.004 0.247 1 / 0.114)',
  5: 'color(display-p3 0.004 0.235 1 / 0.169)',
  6: 'color(display-p3 0.004 0.208 0.984 / 0.232)',
  7: 'color(display-p3 0.004 0.176 0.863 / 0.314)',
  8: 'color(display-p3 0.004 0.165 0.812 / 0.432)',
  9: 'color(display-p3 0 0.153 0.773 / 0.726)',
  10: 'color(display-p3 0 0.137 0.737 / 0.765)',
  11: 'color(display-p3 0.256 0.354 0.755)',
  12: 'color(display-p3 0.133 0.175 0.348)',
};

export const indigoDarkA: ColorScale = {
  1: 'color(display-p3 0.071 0.212 0.996 / 0.055)',
  2: 'color(display-p3 0.251 0.345 0.988 / 0.085)',
  3: 'color(display-p3 0.243 0.404 1 / 0.223)',
  4: 'color(display-p3 0.263 0.42 1 / 0.324)',
  5: 'color(display-p3 0.314 0.451 1 / 0.4)',
  6: 'color(display-p3 0.361 0.49 1 / 0.467)',
  7: 'color(display-p3 0.388 0.51 1 / 0.547)',
  8: 'color(display-p3 0.404 0.518 1 / 0.652)',
  9: 'color(display-p3 0.318 0.451 1 / 0.824)',
  10: 'color(display-p3 0.404 0.506 1 / 0.858)',
  11: 'color(display-p3 0.63 0.69 1)',
  12: 'color(display-p3 0.848 0.881 0.99)',
};
import type { ColorScale } from '../types';

// Iris scale - purple with blue undertones
// Light mode
export const iris: ColorScale = {
  1: 'color(display-p3 0.992 0.992 0.999)',
  2: 'color(display-p3 0.972 0.973 0.998)',
  3: 'color(display-p3 0.943 0.945 0.992)',
  4: 'color(display-p3 0.902 0.906 1)',
  5: 'color(display-p3 0.857 0.861 1)',
  6: 'color(display-p3 0.799 0.805 0.987)',
  7: 'color(display-p3 0.721 0.727 0.955)',
  8: 'color(display-p3 0.61 0.619 0.918)',
  9: 'color(display-p3 0.357 0.357 0.81)',
  10: 'color(display-p3 0.318 0.318 0.774)',
  11: 'color(display-p3 0.337 0.326 0.748)',
  12: 'color(display-p3 0.154 0.161 0.371)',
};

// Dark mode
export const irisDark: ColorScale = {
  1: 'color(display-p3 0.075 0.075 0.114)',
  2: 'color(display-p3 0.089 0.086 0.14)',
  3: 'color(display-p3 0.128 0.134 0.272)',
  4: 'color(display-p3 0.153 0.165 0.382)',
  5: 'color(display-p3 0.192 0.201 0.44)',
  6: 'color(display-p3 0.239 0.241 0.491)',
  7: 'color(display-p3 0.291 0.289 0.565)',
  8: 'color(display-p3 0.35 0.345 0.673)',
  9: 'color(display-p3 0.357 0.357 0.81)',
  10: 'color(display-p3 0.428 0.416 0.843)',
  11: 'color(display-p3 0.685 0.662 1)',
  12: 'color(display-p3 0.878 0.875 0.986)',
};

// Alpha variants for overlays
export const irisA: ColorScale = {
  1: 'color(display-p3 0.02 0.02 1 / 0.008)',
  2: 'color(display-p3 0.024 0.024 0.863 / 0.028)',
  3: 'color(display-p3 0.004 0.071 0.871 / 0.059)',
  4: 'color(display-p3 0.012 0.051 1 / 0.099)',
  5: 'color(display-p3 0.008 0.035 1 / 0.142)',
  6: 'color(display-p3 0 0.02 0.941 / 0.2)',
  7: 'color(display-p3 0.004 0.02 0.847 / 0.279)',
  8: 'color(display-p3 0.004 0.024 0.788 / 0.389)',
  9: 'color(display-p3 0 0 0.706 / 0.644)',
  10: 'color(display-p3 0 0 0.667 / 0.683)',
  11: 'color(display-p3 0.337 0.326 0.748)',
  12: 'color(display-p3 0.154 0.161 0.371)',
};

export const irisDarkA: ColorScale = {
  1: 'color(display-p3 0.224 0.224 0.992 / 0.051)',
  2: 'color(display-p3 0.361 0.314 1 / 0.08)',
  3: 'color(display-p3 0.357 0.373 1 / 0.219)',
  4: 'color(display-p3 0.325 0.361 1 / 0.337)',
  5: 'color(display-p3 0.38 0.4 1 / 0.4)',
  6: 'color(display-p3 0.447 0.447 1 / 0.454)',
  7: 'color(display-p3 0.486 0.486 1 / 0.534)',
  8: 'color(display-p3 0.502 0.494 1 / 0.652)',
  9: 'color(display-p3 0.431 0.431 1 / 0.799)',
  10: 'color(display-p3 0.502 0.486 1 / 0.832)',
  11: 'color(display-p3 0.685 0.662 1)',
  12: 'color(display-p3 0.878 0.875 0.986)',
};
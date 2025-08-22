import type { ColorScale } from '../types';

// Plum scale - purple with pink undertones
// Light mode
export const plum: ColorScale = {
  1: 'color(display-p3 0.995 0.988 0.999)',
  2: 'color(display-p3 0.988 0.971 0.99)',
  3: 'color(display-p3 0.973 0.923 0.98)',
  4: 'color(display-p3 0.953 0.875 0.966)',
  5: 'color(display-p3 0.926 0.825 0.945)',
  6: 'color(display-p3 0.89 0.765 0.916)',
  7: 'color(display-p3 0.84 0.686 0.877)',
  8: 'color(display-p3 0.775 0.58 0.832)',
  9: 'color(display-p3 0.624 0.313 0.708)',
  10: 'color(display-p3 0.587 0.29 0.667)',
  11: 'color(display-p3 0.543 0.263 0.619)',
  12: 'color(display-p3 0.299 0.114 0.352)',
};

// Dark mode
export const plumDark: ColorScale = {
  1: 'color(display-p3 0.09 0.068 0.092)',
  2: 'color(display-p3 0.118 0.077 0.121)',
  3: 'color(display-p3 0.192 0.105 0.202)',
  4: 'color(display-p3 0.25 0.121 0.271)',
  5: 'color(display-p3 0.293 0.152 0.319)',
  6: 'color(display-p3 0.343 0.198 0.372)',
  7: 'color(display-p3 0.424 0.262 0.461)',
  8: 'color(display-p3 0.54 0.341 0.595)',
  9: 'color(display-p3 0.624 0.313 0.708)',
  10: 'color(display-p3 0.666 0.365 0.748)',
  11: 'color(display-p3 0.86 0.602 0.933)',
  12: 'color(display-p3 0.936 0.836 0.949)',
};

// Alpha variants for overlays
export const plumA: ColorScale = {
  1: 'color(display-p3 0.675 0.024 1 / 0.012)',
  2: 'color(display-p3 0.58 0.024 0.58 / 0.028)',
  3: 'color(display-p3 0.655 0.008 0.753 / 0.079)',
  4: 'color(display-p3 0.627 0.008 0.722 / 0.126)',
  5: 'color(display-p3 0.58 0.004 0.69 / 0.177)',
  6: 'color(display-p3 0.537 0.004 0.655 / 0.236)',
  7: 'color(display-p3 0.49 0.004 0.616 / 0.314)',
  8: 'color(display-p3 0.471 0.004 0.6 / 0.42)',
  9: 'color(display-p3 0.451 0 0.576 / 0.687)',
  10: 'color(display-p3 0.42 0 0.529 / 0.71)',
  11: 'color(display-p3 0.543 0.263 0.619)',
  12: 'color(display-p3 0.299 0.114 0.352)',
};

export const plumDarkA: ColorScale = {
  1: 'color(display-p3 0.973 0.071 0.973 / 0.026)',
  2: 'color(display-p3 0.933 0.267 1 / 0.059)',
  3: 'color(display-p3 0.918 0.333 0.996 / 0.148)',
  4: 'color(display-p3 0.91 0.318 1 / 0.219)',
  5: 'color(display-p3 0.914 0.388 1 / 0.269)',
  6: 'color(display-p3 0.906 0.463 1 / 0.328)',
  7: 'color(display-p3 0.906 0.529 1 / 0.425)',
  8: 'color(display-p3 0.906 0.553 1 / 0.568)',
  9: 'color(display-p3 0.875 0.427 1 / 0.69)',
  10: 'color(display-p3 0.886 0.471 0.996 / 0.732)',
  11: 'color(display-p3 0.86 0.602 0.933)',
  12: 'color(display-p3 0.936 0.836 0.949)',
};
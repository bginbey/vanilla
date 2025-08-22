import type { ColorScale } from '../types';

// Pink scale - light to deep pink
// Light mode
export const pink: ColorScale = {
  1: 'color(display-p3 0.998 0.989 0.996)',
  2: 'color(display-p3 0.992 0.97 0.985)',
  3: 'color(display-p3 0.981 0.917 0.96)',
  4: 'color(display-p3 0.963 0.867 0.932)',
  5: 'color(display-p3 0.939 0.815 0.899)',
  6: 'color(display-p3 0.907 0.756 0.859)',
  7: 'color(display-p3 0.869 0.683 0.81)',
  8: 'color(display-p3 0.825 0.59 0.751)',
  9: 'color(display-p3 0.775 0.297 0.61)',
  10: 'color(display-p3 0.748 0.27 0.581)',
  11: 'color(display-p3 0.698 0.219 0.528)',
  12: 'color(display-p3 0.363 0.101 0.279)',
};

// Dark mode
export const pinkDark: ColorScale = {
  1: 'color(display-p3 0.093 0.068 0.089)',
  2: 'color(display-p3 0.121 0.073 0.11)',
  3: 'color(display-p3 0.198 0.098 0.179)',
  4: 'color(display-p3 0.271 0.095 0.231)',
  5: 'color(display-p3 0.32 0.127 0.273)',
  6: 'color(display-p3 0.382 0.177 0.326)',
  7: 'color(display-p3 0.477 0.238 0.405)',
  8: 'color(display-p3 0.612 0.304 0.51)',
  9: 'color(display-p3 0.775 0.297 0.61)',
  10: 'color(display-p3 0.808 0.356 0.645)',
  11: 'color(display-p3 1 0.535 0.78)',
  12: 'color(display-p3 0.964 0.826 0.912)',
};

// Alpha variants for overlays
export const pinkA: ColorScale = {
  1: 'color(display-p3 0.675 0.024 0.675 / 0.012)',
  2: 'color(display-p3 0.757 0.02 0.51 / 0.032)',
  3: 'color(display-p3 0.765 0.008 0.529 / 0.083)',
  4: 'color(display-p3 0.737 0.008 0.506 / 0.134)',
  5: 'color(display-p3 0.663 0.004 0.451 / 0.185)',
  6: 'color(display-p3 0.616 0.004 0.424 / 0.244)',
  7: 'color(display-p3 0.596 0.004 0.412 / 0.318)',
  8: 'color(display-p3 0.573 0.004 0.404 / 0.412)',
  9: 'color(display-p3 0.682 0 0.447 / 0.702)',
  10: 'color(display-p3 0.655 0 0.424 / 0.73)',
  11: 'color(display-p3 0.698 0.219 0.528)',
  12: 'color(display-p3 0.363 0.101 0.279)',
};

export const pinkDarkA: ColorScale = {
  1: 'color(display-p3 0.984 0.071 0.855 / 0.03)',
  2: 'color(display-p3 1 0.2 0.8 / 0.059)',
  3: 'color(display-p3 1 0.294 0.886 / 0.139)',
  4: 'color(display-p3 1 0.192 0.82 / 0.219)',
  5: 'color(display-p3 1 0.282 0.827 / 0.274)',
  6: 'color(display-p3 1 0.396 0.835 / 0.337)',
  7: 'color(display-p3 1 0.459 0.831 / 0.442)',
  8: 'color(display-p3 1 0.478 0.827 / 0.585)',
  9: 'color(display-p3 1 0.373 0.784 / 0.761)',
  10: 'color(display-p3 1 0.435 0.792 / 0.795)',
  11: 'color(display-p3 1 0.535 0.78)',
  12: 'color(display-p3 0.964 0.826 0.912)',
};
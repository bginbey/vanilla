import type { ColorScale } from '../types';

// Sky scale - light blue
// Light mode
export const sky: ColorScale = {
  1: 'color(display-p3 0.98 0.995 0.999)',
  2: 'color(display-p3 0.953 0.98 0.99)',
  3: 'color(display-p3 0.899 0.963 0.989)',
  4: 'color(display-p3 0.842 0.937 0.977)',
  5: 'color(display-p3 0.777 0.9 0.954)',
  6: 'color(display-p3 0.701 0.851 0.921)',
  7: 'color(display-p3 0.604 0.785 0.879)',
  8: 'color(display-p3 0.457 0.696 0.829)',
  9: 'color(display-p3 0.585 0.877 0.983)',
  10: 'color(display-p3 0.555 0.845 0.959)',
  11: 'color(display-p3 0.193 0.448 0.605)',
  12: 'color(display-p3 0.145 0.241 0.329)',
};

// Dark mode
export const skyDark: ColorScale = {
  1: 'color(display-p3 0.056 0.078 0.116)',
  2: 'color(display-p3 0.075 0.101 0.149)',
  3: 'color(display-p3 0.089 0.154 0.244)',
  4: 'color(display-p3 0.106 0.207 0.323)',
  5: 'color(display-p3 0.135 0.261 0.394)',
  6: 'color(display-p3 0.17 0.322 0.469)',
  7: 'color(display-p3 0.205 0.394 0.557)',
  8: 'color(display-p3 0.232 0.48 0.665)',
  9: 'color(display-p3 0.585 0.877 0.983)',
  10: 'color(display-p3 0.718 0.925 0.991)',
  11: 'color(display-p3 0.536 0.772 0.924)',
  12: 'color(display-p3 0.799 0.947 0.993)',
};

// Alpha variants for overlays
export const skyA: ColorScale = {
  1: 'color(display-p3 0.02 0.804 1 / 0.02)',
  2: 'color(display-p3 0.024 0.592 0.757 / 0.048)',
  3: 'color(display-p3 0.004 0.655 0.886 / 0.102)',
  4: 'color(display-p3 0.004 0.604 0.851 / 0.157)',
  5: 'color(display-p3 0.004 0.565 0.792 / 0.224)',
  6: 'color(display-p3 0.004 0.502 0.737 / 0.299)',
  7: 'color(display-p3 0.004 0.459 0.694 / 0.397)',
  8: 'color(display-p3 0 0.435 0.682 / 0.542)',
  9: 'color(display-p3 0.004 0.71 0.965 / 0.416)',
  10: 'color(display-p3 0.004 0.647 0.914 / 0.444)',
  11: 'color(display-p3 0.193 0.448 0.605)',
  12: 'color(display-p3 0.145 0.241 0.329)',
};

export const skyDarkA: ColorScale = {
  1: 'color(display-p3 0 0.282 0.996 / 0.055)',
  2: 'color(display-p3 0.157 0.467 0.992 / 0.089)',
  3: 'color(display-p3 0.192 0.522 0.996 / 0.19)',
  4: 'color(display-p3 0.212 0.584 1 / 0.274)',
  5: 'color(display-p3 0.259 0.631 1 / 0.349)',
  6: 'color(display-p3 0.302 0.655 1 / 0.433)',
  7: 'color(display-p3 0.329 0.686 1 / 0.526)',
  8: 'color(display-p3 0.325 0.71 1 / 0.643)',
  9: 'color(display-p3 0.592 0.894 1 / 0.984)',
  10: 'color(display-p3 0.722 0.933 1 / 0.992)',
  11: 'color(display-p3 0.536 0.772 0.924)',
  12: 'color(display-p3 0.799 0.947 0.993)',
};
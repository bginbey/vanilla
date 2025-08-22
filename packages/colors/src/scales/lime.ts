import type { ColorScale } from '../types';

// Lime scale - yellow-green
// Light mode
export const lime: ColorScale = {
  1: 'color(display-p3 0.989 0.992 0.981)',
  2: 'color(display-p3 0.975 0.98 0.954)',
  3: 'color(display-p3 0.939 0.965 0.851)',
  4: 'color(display-p3 0.896 0.94 0.76)',
  5: 'color(display-p3 0.843 0.903 0.678)',
  6: 'color(display-p3 0.778 0.852 0.599)',
  7: 'color(display-p3 0.694 0.784 0.508)',
  8: 'color(display-p3 0.585 0.707 0.378)',
  9: 'color(display-p3 0.78 0.928 0.466)',
  10: 'color(display-p3 0.734 0.896 0.397)',
  11: 'color(display-p3 0.386 0.482 0.227)',
  12: 'color(display-p3 0.222 0.25 0.128)',
};

// Dark mode
export const limeDark: ColorScale = {
  1: 'color(display-p3 0.067 0.073 0.048)',
  2: 'color(display-p3 0.086 0.1 0.067)',
  3: 'color(display-p3 0.13 0.16 0.099)',
  4: 'color(display-p3 0.172 0.214 0.126)',
  5: 'color(display-p3 0.213 0.266 0.153)',
  6: 'color(display-p3 0.257 0.321 0.182)',
  7: 'color(display-p3 0.307 0.383 0.215)',
  8: 'color(display-p3 0.365 0.456 0.25)',
  9: 'color(display-p3 0.78 0.928 0.466)',
  10: 'color(display-p3 0.865 0.995 0.519)',
  11: 'color(display-p3 0.771 0.893 0.485)',
  12: 'color(display-p3 0.905 0.966 0.753)',
};

// Alpha variants for overlays
export const limeA: ColorScale = {
  1: 'color(display-p3 0.412 0.608 0.02 / 0.02)',
  2: 'color(display-p3 0.514 0.592 0.024 / 0.048)',
  3: 'color(display-p3 0.584 0.765 0.008 / 0.15)',
  4: 'color(display-p3 0.561 0.757 0.004 / 0.24)',
  5: 'color(display-p3 0.514 0.698 0.004 / 0.322)',
  6: 'color(display-p3 0.443 0.627 0 / 0.4)',
  7: 'color(display-p3 0.376 0.561 0.004 / 0.491)',
  8: 'color(display-p3 0.333 0.529 0 / 0.624)',
  9: 'color(display-p3 0.588 0.867 0 / 0.534)',
  10: 'color(display-p3 0.561 0.827 0 / 0.604)',
  11: 'color(display-p3 0.386 0.482 0.227)',
  12: 'color(display-p3 0.222 0.25 0.128)',
};

export const limeDarkA: ColorScale = {
  1: 'color(display-p3 0.067 0.941 0 / 0.009)',
  2: 'color(display-p3 0.584 0.996 0.071 / 0.038)',
  3: 'color(display-p3 0.69 1 0.38 / 0.101)',
  4: 'color(display-p3 0.729 1 0.435 / 0.16)',
  5: 'color(display-p3 0.745 1 0.471 / 0.215)',
  6: 'color(display-p3 0.769 1 0.482 / 0.274)',
  7: 'color(display-p3 0.769 1 0.506 / 0.341)',
  8: 'color(display-p3 0.784 1 0.51 / 0.416)',
  9: 'color(display-p3 0.839 1 0.502 / 0.925)',
  10: 'color(display-p3 0.871 1 0.522 / 0.996)',
  11: 'color(display-p3 0.771 0.893 0.485)',
  12: 'color(display-p3 0.905 0.966 0.753)',
};
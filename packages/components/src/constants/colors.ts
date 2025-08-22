/**
 * Radix Colors accent color names
 * These are used throughout the component library for theming
 */
export const ACCENT_COLORS = [
  'blue',
  'green',
  'red',
  'yellow',
  'orange',
  'purple',
  'gold',
  'bronze',
  'brown',
  'amber',
  'tomato',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'violet',
  'iris',
  'indigo',
  'cyan',
  'teal',
  'jade',
  'grass',
  'lime',
  'mint',
  'sky',
] as const;

export type AccentColor = typeof ACCENT_COLORS[number];

/**
 * Gray scale color names
 * Used for neutral colors in the theme
 */
export const GRAY_COLORS = [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
] as const;

export type GrayColor = typeof GRAY_COLORS[number];
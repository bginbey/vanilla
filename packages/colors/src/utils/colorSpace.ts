import { 
  formatHex, 
  formatRgb,
  oklch, 
  rgb
} from 'culori';

// Define types for Culori since they're not exported
type Oklch = {
  mode: 'oklch';
  l: number;
  c: number;
  h?: number;
};

type Rgb = {
  mode?: string;
  r: number;
  g: number;
  b: number;
};

/**
 * Convert a color to OKLCH color space
 */
export function toOklch(color: string): Oklch | undefined {
  return oklch(color);
}

/**
 * Convert OKLCH values to hex color
 */
export function fromOklch(l: number, c: number, h: number | undefined): string {
  if (h === undefined) h = 0;
  const color = rgb({ mode: 'oklch', l, c, h } as Oklch);
  return formatHex(color as Rgb) || '#000000';
}

/**
 * Convert OKLCH values to RGB string with alpha
 */
export function fromOklchAlpha(l: number, c: number, h: number | undefined, alpha: number): string {
  if (h === undefined) h = 0;
  const color = rgb({ mode: 'oklch', l, c, h } as Oklch);
  if (!color) return 'rgba(0, 0, 0, 0)';
  
  const formatted = formatRgb(color as Rgb);
  if (!formatted) return 'rgba(0, 0, 0, 0)';
  
  // Convert rgb() to rgba()
  return formatted.replace('rgb(', `rgba(`).replace(')', `, ${alpha})`);
}

/**
 * Get luminance value for contrast calculations
 */
export function getLuminance(color: string): number {
  const rgbColor = rgb(color);
  if (!rgbColor) return 0;
  
  // Relative luminance formula
  const r = rgbColor.r;
  const g = rgbColor.g;
  const b = rgbColor.b;
  
  const rsRGB = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  const gsRGB = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  const bsRGB = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
  
  return 0.2126 * rsRGB + 0.7152 * gsRGB + 0.0722 * bsRGB;
}

/**
 * Clamp a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
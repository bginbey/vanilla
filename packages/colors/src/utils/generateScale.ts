import { type ColorScale, type ScaleOptions } from '../types';
import { toOklch, fromOklch, fromOklchAlpha, clamp } from './colorSpace';
import { calcAPCA, shouldUseDarkText } from './contrast';

/**
 * Generate a 12-step color scale from a base color
 */
export function generateColorScale(options: ScaleOptions): ColorScale {
  const { baseColor, mode } = options;
  const base = toOklch(baseColor);
  
  if (!base) {
    throw new Error(`Invalid color: ${baseColor}`);
  }
  
  // Define lightness targets for each step
  const lightnessTargets = mode === 'light' 
    ? [0.98, 0.95, 0.92, 0.88, 0.82, 0.74, 0.65, 0.54, 0.42, 0.36, 0.25, 0.14]  // Light mode
    : [0.10, 0.13, 0.17, 0.22, 0.28, 0.35, 0.43, 0.52, 0.62, 0.68, 0.78, 0.88]; // Dark mode
  
  // Define chroma curve (less saturated at extremes)
  const chromaMultipliers = [0.1, 0.2, 0.3, 0.4, 0.5, 0.65, 0.75, 0.85, 1.0, 0.95, 0.8, 0.6];
  
  const scale = {} as ColorScale;
  
  for (let i = 0; i < 12; i++) {
    const step = (i + 1) as keyof ColorScale;
    const l = lightnessTargets[i];
    const c = clamp(base.c * chromaMultipliers[i], 0, 0.37); // Max chroma in OKLCH
    const h = base.h;
    
    // Generate color
    let color = fromOklch(l, c, h);
    
    // Validate contrast for text colors (steps 11-12)
    if (step === 11 && scale[2]) {
      // Ensure Lc 60 against step 2
      const currentContrast = calcAPCA(color, scale[2]);
      if (currentContrast < 60) {
        // Adjust lightness to meet contrast
        const newL = mode === 'light' ? l * 0.8 : l * 1.1;
        color = fromOklch(clamp(newL, 0, 1), c, h);
      }
    } else if (step === 12 && scale[2]) {
      // Ensure Lc 90 against step 2
      const currentContrast = calcAPCA(color, scale[2]);
      if (currentContrast < 90) {
        // Adjust lightness to meet contrast
        const newL = mode === 'light' ? l * 0.6 : l * 1.15;
        color = fromOklch(clamp(newL, 0, 1), c, h);
      }
    }
    
    scale[step] = color;
  }
  
  return scale;
}

/**
 * Generate an alpha/transparent color scale
 */
export function generateAlphaScale(baseColor: string, mode: 'light' | 'dark'): ColorScale {
  const base = toOklch(baseColor);
  
  if (!base) {
    throw new Error(`Invalid color: ${baseColor}`);
  }
  
  // Alpha progression for transparency
  const alphaValues = mode === 'light'
    ? [0.02, 0.04, 0.08, 0.12, 0.16, 0.24, 0.32, 0.40, 0.48, 0.56, 0.64, 0.80]
    : [0.05, 0.08, 0.12, 0.16, 0.20, 0.28, 0.36, 0.45, 0.54, 0.62, 0.72, 0.90];
  
  const scale = {} as ColorScale;
  
  // For alpha scales, we adjust both lightness and alpha
  const baseLightness = mode === 'light' ? 0.2 : 0.8;
  
  for (let i = 0; i < 12; i++) {
    const step = (i + 1) as keyof ColorScale;
    const alpha = alphaValues[i];
    
    // Slightly vary lightness for more depth
    const lVariation = (i / 11) * 0.2;
    const l = mode === 'light' 
      ? baseLightness - lVariation 
      : baseLightness + lVariation;
    
    scale[step] = fromOklchAlpha(l, base.c, base.h, alpha);
  }
  
  return scale;
}

/**
 * Validate a color scale for accessibility
 */
export function validateScale(scale: ColorScale, mode: 'light' | 'dark'): {
  valid: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  
  // Check step 11 has Lc 60 against step 2
  const contrast11 = calcAPCA(scale[11], scale[2]);
  if (contrast11 < 60) {
    issues.push(`Step 11 contrast (${contrast11.toFixed(1)}) is below Lc 60 requirement`);
  }
  
  // Check step 12 has Lc 90 against step 2
  const contrast12 = calcAPCA(scale[12], scale[2]);
  if (contrast12 < 90) {
    issues.push(`Step 12 contrast (${contrast12.toFixed(1)}) is below Lc 90 requirement`);
  }
  
  // Check step 9 works with appropriate text color
  if (mode === 'light') {
    const whiteOnStep9 = calcAPCA('#ffffff', scale[9]);
    const blackOnStep9 = calcAPCA('#000000', scale[9]);
    
    if (shouldUseDarkText(scale[9]) && blackOnStep9 < 60) {
      issues.push(`Step 9 requires dark text but contrast (${blackOnStep9.toFixed(1)}) is below Lc 60`);
    } else if (!shouldUseDarkText(scale[9]) && whiteOnStep9 < 60) {
      issues.push(`Step 9 requires light text but contrast (${whiteOnStep9.toFixed(1)}) is below Lc 60`);
    }
  }
  
  return {
    valid: issues.length === 0,
    issues
  };
}
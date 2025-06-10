import { type CustomScaleOptions } from '../types';
import { generateColorScale, generateAlphaScale, validateScale } from './generateScale';

/**
 * Create a custom color scale from a brand color
 * Generates light, dark, and alpha variants
 */
export function createCustomScale(options: CustomScaleOptions) {
  const { name, baseColor, adjustments = {} } = options;
  
  // Generate light scale
  const lightScale = generateColorScale({
    baseColor,
    mode: 'light',
  });
  
  // Generate dark scale
  const darkScale = generateColorScale({
    baseColor,
    mode: 'dark',
  });
  
  // Generate alpha scales
  const lightAlpha = generateAlphaScale(baseColor, 'light');
  const darkAlpha = generateAlphaScale(baseColor, 'dark');
  
  // Apply adjustments if provided
  if (adjustments.chromaBoost || adjustments.lightnessShift) {
    // This would require modifying the generation algorithm
    console.warn('Adjustments are not yet implemented');
  }
  
  // Validate accessibility
  const lightValidation = validateScale(lightScale, 'light');
  const darkValidation = validateScale(darkScale, 'dark');
  
  if (!lightValidation.valid) {
    console.warn(`Light scale validation issues for ${name}:`, lightValidation.issues);
  }
  
  if (!darkValidation.valid) {
    console.warn(`Dark scale validation issues for ${name}:`, darkValidation.issues);
  }
  
  return {
    [name]: lightScale,
    [`${name}Dark`]: darkScale,
    [`${name}A`]: lightAlpha,
    [`${name}DarkA`]: darkAlpha,
  };
}
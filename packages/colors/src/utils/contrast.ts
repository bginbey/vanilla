import { getLuminance } from './colorSpace';

/**
 * Calculate APCA (Accessible Perceptual Contrast Algorithm) contrast
 * Returns a value between 0-106+ where:
 * - Lc 15: Minimum for non-text elements
 * - Lc 30: Minimum for large text (24px+)
 * - Lc 45: Minimum for normal text (16px)
 * - Lc 60: Preferred for body text
 * - Lc 75: Preferred for small text
 * - Lc 90: Maximum useful contrast
 */
export function calcAPCA(textColor: string, bgColor: string): number {
  const txtY = getLuminance(textColor);
  const bgY = getLuminance(bgColor);
  
  // APCA constants
  const normBG = 0.56;
  const normTXT = 0.57;
  const revTXT = 0.62;
  const revBG = 0.65;
  const blkThrs = 0.022;
  const blkClmp = 1.414;
  const scaleBoW = 1.14;
  const scaleWoB = 1.14;
  
  // Soft clamp black levels
  let Ytxt = txtY > blkThrs ? txtY : txtY + Math.pow(blkThrs - txtY, blkClmp);
  let Ybg = bgY > blkThrs ? bgY : bgY + Math.pow(blkThrs - bgY, blkClmp);
  
  // Calculate contrast
  let SAPC = 0;
  let outputContrast = 0;
  
  if (Ybg > Ytxt) {
    // Light text on dark background
    SAPC = (Math.pow(Ybg, normBG) - Math.pow(Ytxt, normTXT)) * scaleBoW;
    outputContrast = SAPC > 0.1 ? SAPC - 0.1 : 0;
  } else {
    // Dark text on light background
    SAPC = (Math.pow(Ybg, revBG) - Math.pow(Ytxt, revTXT)) * scaleWoB;
    outputContrast = SAPC < -0.1 ? -SAPC - 0.1 : 0;
  }
  
  return Math.abs(outputContrast * 100);
}

/**
 * Check if contrast meets the target APCA value
 */
export function meetsContrast(
  textColor: string,
  bgColor: string,
  target: number
): boolean {
  return calcAPCA(textColor, bgColor) >= target;
}

/**
 * Determine if a color should use dark or light text
 */
export function shouldUseDarkText(bgColor: string): boolean {
  // Check contrast with white and black
  const whiteContrast = calcAPCA('#ffffff', bgColor);
  const blackContrast = calcAPCA('#000000', bgColor);
  
  // Use dark text if black provides better contrast
  return blackContrast > whiteContrast;
}
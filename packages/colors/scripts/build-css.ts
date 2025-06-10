import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import * as scales from '../src/scales';

// Ensure dist directory exists
mkdirSync(join(__dirname, '../dist'), { recursive: true });

// Color names that support dark text on step 9
const darkTextColors = new Set(['yellow', 'orange']);

/**
 * Generate CSS custom properties for a color scale
 */
function generateScaleCSS(name: string, scale: any): string {
  let css = '';
  
  for (let i = 1; i <= 12; i++) {
    css += `  --${name}-${i}: ${scale[i]};\n`;
  }
  
  return css;
}

/**
 * Generate CSS feature query for P3 colors (future enhancement)
 */
function generateP3CSS(name: string, scale: any): string {
  // For now, we'll skip P3 support
  return '';
}

/**
 * Main CSS generation
 */
function generateMainCSS() {
  let lightCSS = ':root {\n';
  let darkCSS = '.dark {\n';
  
  // Process each color scale
  const colorNames = Object.keys(scales).filter(name => 
    !name.includes('Dark') && !name.includes('A')
  );
  
  for (const colorName of colorNames) {
    const scale = (scales as any)[colorName];
    const darkScale = (scales as any)[`${colorName}Dark`];
    const alphaScale = (scales as any)[`${colorName}A`];
    const darkAlphaScale = (scales as any)[`${colorName}DarkA`];
    
    if (scale) {
      lightCSS += generateScaleCSS(colorName.toLowerCase(), scale);
    }
    
    if (darkScale) {
      darkCSS += generateScaleCSS(colorName.toLowerCase(), darkScale);
    }
    
    if (alphaScale) {
      lightCSS += generateScaleCSS(`${colorName.toLowerCase()}-a`, alphaScale);
    }
    
    if (darkAlphaScale) {
      darkCSS += generateScaleCSS(`${colorName.toLowerCase()}-a`, darkAlphaScale);
    }
  }
  
  lightCSS += '}\n\n';
  darkCSS += '}\n';
  
  return lightCSS + darkCSS;
}

/**
 * Generate individual CSS files for each color
 */
function generateIndividualFiles() {
  const colorNames = Object.keys(scales).filter(name => 
    !name.includes('Dark') && !name.includes('A')
  );
  
  for (const colorName of colorNames) {
    const scale = (scales as any)[colorName];
    const darkScale = (scales as any)[`${colorName}Dark`];
    const alphaScale = (scales as any)[`${colorName}A`];
    const darkAlphaScale = (scales as any)[`${colorName}DarkA`];
    
    let css = '';
    
    // Light mode CSS
    if (scale) {
      css += ':root {\n';
      css += generateScaleCSS(colorName.toLowerCase(), scale);
      if (alphaScale) {
        css += generateScaleCSS(`${colorName.toLowerCase()}-a`, alphaScale);
      }
      css += '}\n\n';
    }
    
    // Dark mode CSS
    if (darkScale) {
      css += '.dark {\n';
      css += generateScaleCSS(colorName.toLowerCase(), darkScale);
      if (darkAlphaScale) {
        css += generateScaleCSS(`${colorName.toLowerCase()}-a`, darkAlphaScale);
      }
      css += '}\n';
    }
    
    writeFileSync(
      join(__dirname, `../dist/${colorName.toLowerCase()}.css`),
      css
    );
  }
}

/**
 * Generate overlay scales (blackA, whiteA)
 */
function generateOverlayCSS() {
  const blackA = {
    1: 'rgba(0, 0, 0, 0.05)',
    2: 'rgba(0, 0, 0, 0.10)',
    3: 'rgba(0, 0, 0, 0.15)',
    4: 'rgba(0, 0, 0, 0.20)',
    5: 'rgba(0, 0, 0, 0.30)',
    6: 'rgba(0, 0, 0, 0.40)',
    7: 'rgba(0, 0, 0, 0.50)',
    8: 'rgba(0, 0, 0, 0.60)',
    9: 'rgba(0, 0, 0, 0.70)',
    10: 'rgba(0, 0, 0, 0.80)',
    11: 'rgba(0, 0, 0, 0.90)',
    12: 'rgba(0, 0, 0, 0.95)',
  };
  
  const whiteA = {
    1: 'rgba(255, 255, 255, 0.05)',
    2: 'rgba(255, 255, 255, 0.10)',
    3: 'rgba(255, 255, 255, 0.15)',
    4: 'rgba(255, 255, 255, 0.20)',
    5: 'rgba(255, 255, 255, 0.30)',
    6: 'rgba(255, 255, 255, 0.40)',
    7: 'rgba(255, 255, 255, 0.50)',
    8: 'rgba(255, 255, 255, 0.60)',
    9: 'rgba(255, 255, 255, 0.70)',
    10: 'rgba(255, 255, 255, 0.80)',
    11: 'rgba(255, 255, 255, 0.90)',
    12: 'rgba(255, 255, 255, 0.95)',
  };
  
  let css = ':root, .dark {\n';
  css += generateScaleCSS('black-a', blackA);
  css += generateScaleCSS('white-a', whiteA);
  css += '}\n';
  
  return css;
}

// Generate main CSS file
const mainCSS = generateMainCSS() + '\n' + generateOverlayCSS();
writeFileSync(join(__dirname, '../dist/index.css'), mainCSS);

// Generate individual color files
generateIndividualFiles();

// Generate overlay scales file
writeFileSync(join(__dirname, '../dist/overlays.css'), generateOverlayCSS());

console.log('✅ CSS generation complete!');
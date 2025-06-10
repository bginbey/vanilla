export interface ColorScale {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
}

export type ColorScaleKey = keyof ColorScale;

export interface ColorPalette {
  gray: ColorScale;
  grayA: ColorScale;
  grayDark: ColorScale;
  grayDarkA: ColorScale;
  
  blue: ColorScale;
  blueA: ColorScale;
  blueDark: ColorScale;
  blueDarkA: ColorScale;
  
  green: ColorScale;
  greenA: ColorScale;
  greenDark: ColorScale;
  greenDarkA: ColorScale;
  
  red: ColorScale;
  redA: ColorScale;
  redDark: ColorScale;
  redDarkA: ColorScale;
  
  yellow: ColorScale;
  yellowA: ColorScale;
  yellowDark: ColorScale;
  yellowDarkA: ColorScale;
  
  orange: ColorScale;
  orangeA: ColorScale;
  orangeDark: ColorScale;
  orangeDarkA: ColorScale;
  
  purple: ColorScale;
  purpleA: ColorScale;
  purpleDark: ColorScale;
  purpleDarkA: ColorScale;
}

export interface ScaleOptions {
  baseColor: string;
  mode: 'light' | 'dark';
}

export interface CustomScaleOptions {
  name: string;
  baseColor: string;
  adjustments?: {
    chromaBoost?: number;
    lightnessShift?: number;
    contrastBoost?: number;
  };
}
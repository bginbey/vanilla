import React, { ReactNode, useLayoutEffect } from 'react';
import { clsx } from 'clsx';
import { theme } from './Theme.css';
import { theme as baseTheme } from '../../styles/theme.css';
import type { AccentColor, GrayColor } from '../../constants/colors';

// Re-export for backwards compatibility
export type { AccentColor, GrayColor } from '../../constants/colors';
// Add 'auto' option for gray color in Theme
export type ThemeGrayColor = GrayColor | 'auto';
export type Appearance = 'light' | 'dark' | 'inherit';
export type PanelBackground = 'solid' | 'translucent';
export type Scaling = '90%' | '95%' | '100%' | '105%' | '110%';
export type Radius = 'none' | 'small' | 'medium' | 'large' | 'full';

export interface ThemeProps {
  children: ReactNode;
  /**
   * The accent color for interactive elements
   * @default 'blue'
   */
  accentColor?: AccentColor;
  /**
   * The gray scale to use for neutral colors
   * @default 'auto' - automatically pairs with accent color
   */
  grayColor?: ThemeGrayColor;
  /**
   * The color scheme appearance
   * @default 'inherit'
   */
  appearance?: Appearance;
  /**
   * The background style for panel components
   * @default 'solid'
   */
  panelBackground?: PanelBackground;
  /**
   * The scaling factor for spacing, typography, and other dimensions
   * @default '100%'
   */
  scaling?: Scaling;
  /**
   * The border radius scale
   * @default 'medium'
   */
  radius?: Radius;
  /**
   * Whether to use high contrast mode for better accessibility
   * @default false
   */
  highContrast?: boolean;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Whether this is the root theme (adds global styles)
   * @default true
   */
  asChild?: boolean;
}

const scalingFactors: Record<Scaling, number> = {
  '90%': 0.9,
  '95%': 0.95,
  '100%': 1,
  '105%': 1.05,
  '110%': 1.1,
};

const radiusFactors: Record<Radius, number> = {
  none: 0,
  small: 0.75,
  medium: 1,
  large: 1.5,
  full: 9999,
};

// Automatic gray pairing based on accent color
function getMatchingGrayColor(accentColor: AccentColor): GrayColor {
  // Blue-tinted grays
  if (['blue', 'sky', 'cyan', 'indigo'].includes(accentColor)) {
    return 'slate';
  }
  
  // Purple-tinted grays
  if (['purple', 'violet', 'plum', 'pink'].includes(accentColor)) {
    return 'mauve';
  }
  
  // Green-tinted grays
  if (['green', 'grass', 'jade', 'mint'].includes(accentColor)) {
    return 'sage';
  }
  
  // Yellow/warm-tinted grays
  if (['yellow', 'amber', 'orange', 'brown'].includes(accentColor)) {
    return 'sand';
  }
  
  // Yellow-green tinted grays
  if (['lime', 'teal', 'olive'].includes(accentColor)) {
    return 'olive';
  }
  
  // For remaining colors (red, ruby, crimson, tomato, gold, bronze, iris)
  return 'gray';
}

export function Theme({
  children,
  accentColor = 'blue',
  grayColor = 'auto',
  appearance = 'inherit',
  panelBackground = 'solid',
  scaling = '100%',
  radius = 'medium',
  highContrast = false,
  className,
  asChild = false,
}: ThemeProps) {
  // Resolve gray color (auto-pair or explicit)
  const resolvedGrayColor = grayColor === 'auto' 
    ? getMatchingGrayColor(accentColor) 
    : grayColor;
  
  // Apply theme attributes for CSS selectors
  const themeProps = {
    'data-accent-color': accentColor,
    'data-gray-color': resolvedGrayColor,
    'data-panel-background': panelBackground,
    'data-scaling': scaling.replace('%', ''),
    'data-radius': radius,
    'data-high-contrast': highContrast ? '' : undefined,
  };

  // Set CSS variables for scaling, radius, and dynamic color mapping
  const style: React.CSSProperties = {
    '--scaling-factor': scalingFactors[scaling],
    '--radius-factor': radiusFactors[radius],
    // Map accent color
    '--accent-1': `var(--${accentColor}-1)`,
    '--accent-2': `var(--${accentColor}-2)`,
    '--accent-3': `var(--${accentColor}-3)`,
    '--accent-4': `var(--${accentColor}-4)`,
    '--accent-5': `var(--${accentColor}-5)`,
    '--accent-6': `var(--${accentColor}-6)`,
    '--accent-7': `var(--${accentColor}-7)`,
    '--accent-8': `var(--${accentColor}-8)`,
    '--accent-9': `var(--${accentColor}-9)`,
    '--accent-10': `var(--${accentColor}-10)`,
    '--accent-11': `var(--${accentColor}-11)`,
    '--accent-12': `var(--${accentColor}-12)`,
    '--accent-a1': `var(--${accentColor}-a1)`,
    '--accent-a2': `var(--${accentColor}-a2)`,
    '--accent-a3': `var(--${accentColor}-a3)`,
    '--accent-a4': `var(--${accentColor}-a4)`,
    '--accent-a5': `var(--${accentColor}-a5)`,
    '--accent-a6': `var(--${accentColor}-a6)`,
    '--accent-a7': `var(--${accentColor}-a7)`,
    '--accent-a8': `var(--${accentColor}-a8)`,
    '--accent-a9': `var(--${accentColor}-a9)`,
    '--accent-a10': `var(--${accentColor}-a10)`,
    '--accent-a11': `var(--${accentColor}-a11)`,
    '--accent-a12': `var(--${accentColor}-a12)`,
  } as React.CSSProperties;
  
  // Only remap gray color if it's different from base 'gray'
  // This prevents circular references like --gray-1: var(--gray-1)
  if (resolvedGrayColor !== 'gray') {
    Object.assign(style, {
      '--gray-1': `var(--${resolvedGrayColor}-1)`,
      '--gray-2': `var(--${resolvedGrayColor}-2)`,
      '--gray-3': `var(--${resolvedGrayColor}-3)`,
      '--gray-4': `var(--${resolvedGrayColor}-4)`,
      '--gray-5': `var(--${resolvedGrayColor}-5)`,
      '--gray-6': `var(--${resolvedGrayColor}-6)`,
      '--gray-7': `var(--${resolvedGrayColor}-7)`,
      '--gray-8': `var(--${resolvedGrayColor}-8)`,
      '--gray-9': `var(--${resolvedGrayColor}-9)`,
      '--gray-10': `var(--${resolvedGrayColor}-10)`,
      '--gray-11': `var(--${resolvedGrayColor}-11)`,
      '--gray-12': `var(--${resolvedGrayColor}-12)`,
      '--gray-a1': `var(--${resolvedGrayColor}-a1)`,
      '--gray-a2': `var(--${resolvedGrayColor}-a2)`,
      '--gray-a3': `var(--${resolvedGrayColor}-a3)`,
      '--gray-a4': `var(--${resolvedGrayColor}-a4)`,
      '--gray-a5': `var(--${resolvedGrayColor}-a5)`,
      '--gray-a6': `var(--${resolvedGrayColor}-a6)`,
      '--gray-a7': `var(--${resolvedGrayColor}-a7)`,
      '--gray-a8': `var(--${resolvedGrayColor}-a8)`,
      '--gray-a9': `var(--${resolvedGrayColor}-a9)`,
      '--gray-a10': `var(--${resolvedGrayColor}-a10)`,
      '--gray-a11': `var(--${resolvedGrayColor}-a11)`,
      '--gray-a12': `var(--${resolvedGrayColor}-a12)`,
    });
  }

  // Handle appearance changes
  useLayoutEffect(() => {
    if (appearance !== 'inherit' && !asChild) {
      const root = document.documentElement;
      if (appearance === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [appearance, asChild]);

  const Component = asChild ? 'div' : 'div';

  return (
    <Component
      {...themeProps}
      className={clsx(baseTheme, theme, className)}
      style={style}
    >
      {children}
    </Component>
  );
}

/**
 * @deprecated Use `Theme` instead. `RadixTheme` will be removed in the next major version.
 */
export const RadixTheme = Theme;


import React, { ReactNode, useLayoutEffect } from 'react';
import { clsx } from 'clsx';
import { theme } from './Theme.css';
import { theme as baseTheme } from '../../styles/theme.css';

export type AccentColor = 'blue' | 'green' | 'red' | 'yellow' | 'orange' | 'purple';
export type GrayColor = 'gray'; // Can be expanded later with slate, sand, etc.
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
   * @default 'gray'
   */
  grayColor?: GrayColor;
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

export function Theme({
  children,
  accentColor = 'blue',
  grayColor = 'gray',
  appearance = 'inherit',
  panelBackground = 'solid',
  scaling = '100%',
  radius = 'medium',
  highContrast = false,
  className,
  asChild = false,
}: ThemeProps) {
  // Apply theme attributes for CSS selectors
  const themeProps = {
    'data-accent-color': accentColor,
    'data-gray-color': grayColor,
    'data-panel-background': panelBackground,
    'data-scaling': scaling.replace('%', ''),
    'data-radius': radius,
    'data-high-contrast': highContrast ? '' : undefined,
  };

  // Set CSS variables for scaling and radius
  const style = {
    '--scaling-factor': scalingFactors[scaling],
    '--radius-factor': radiusFactors[radius],
  } as React.CSSProperties;

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


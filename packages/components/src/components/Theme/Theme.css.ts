import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

// Dynamic CSS variable mapping using inline styles
export const theme = style({
  // Base styles
  minHeight: 0,
  
  // Default semantic color mappings using gray
  selectors: {
    '&': {
      // @ts-ignore
      // Background colors
      '--color-background': 'var(--gray-1)',
      '--color-panel': 'var(--gray-2)',
      '--color-overlay': vars.color.blackA[8],
      
      // Surface colors
      '--color-surface': 'var(--gray-3)',
      '--color-surface-hover': 'var(--gray-4)',
      '--color-surface-active': 'var(--gray-5)',
      
      // Text colors
      '--color-text': 'var(--gray-12)',
      '--color-text-secondary': 'var(--gray-11)',
      '--color-text-tertiary': 'var(--gray-10)',
      '--color-text-disabled': 'var(--gray-8)',
      
      // Border colors
      '--color-border': 'var(--gray-6)',
      '--color-border-hover': 'var(--gray-7)',
      '--color-border-focus': 'var(--accent-8)',
      
      // Interactive element colors (using accent)
      '--color-accent-base': 'var(--accent-9)',
      '--color-accent-hover': 'var(--accent-10)',
      '--color-accent-active': 'var(--accent-11)',
      '--color-accent-text': 'var(--accent-contrast)',
      
      // Accent surface colors
      '--color-accent-surface': 'var(--accent-3)',
      '--color-accent-surface-hover': 'var(--accent-4)',
      '--color-accent-surface-active': 'var(--accent-5)',
      
      // Selection colors
      '--color-selection': 'var(--accent-a5)',
      '--color-selection-text': 'inherit',
      
      // Focus colors
      '--color-focus-ring': 'var(--accent-8)',
      
      // Scaled spacing values
      '--space-1': `calc(${vars.spacing[1]} * var(--scaling-factor, 1))`,
      '--space-2': `calc(${vars.spacing[2]} * var(--scaling-factor, 1))`,
      '--space-3': `calc(${vars.spacing[3]} * var(--scaling-factor, 1))`,
      '--space-4': `calc(${vars.spacing[4]} * var(--scaling-factor, 1))`,
      '--space-5': `calc(${vars.spacing[5]} * var(--scaling-factor, 1))`,
      '--space-6': `calc(${vars.spacing[6]} * var(--scaling-factor, 1))`,
      '--space-8': `calc(${vars.spacing[8]} * var(--scaling-factor, 1))`,
      '--space-10': `calc(${vars.spacing[10]} * var(--scaling-factor, 1))`,
      '--space-12': `calc(${vars.spacing[12]} * var(--scaling-factor, 1))`,
      '--space-16': `calc(${vars.spacing[16]} * var(--scaling-factor, 1))`,
      '--space-20': `calc(${vars.spacing[20]} * var(--scaling-factor, 1))`,
      '--space-24': `calc(${vars.spacing[24]} * var(--scaling-factor, 1))`,
      
      // Scaled radius values
      '--radius-1': `calc(${vars.radius.sm} * var(--radius-factor, 1))`,
      '--radius-2': `calc(${vars.radius.base} * var(--radius-factor, 1))`,
      '--radius-3': `calc(${vars.radius.md} * var(--radius-factor, 1))`,
      '--radius-4': `calc(${vars.radius.lg} * var(--radius-factor, 1))`,
      '--radius-5': `calc(${vars.radius.xl} * var(--radius-factor, 1))`,
      '--radius-6': `calc(${vars.radius['2xl']} * var(--radius-factor, 1))`,
      '--radius-full': vars.radius.full,
      
      // Scaled font sizes
      '--font-size-xs': `calc(${vars.font.size.xs} * var(--scaling-factor, 1))`,
      '--font-size-sm': `calc(${vars.font.size.sm} * var(--scaling-factor, 1))`,
      '--font-size-base': `calc(${vars.font.size.base} * var(--scaling-factor, 1))`,
      '--font-size-lg': `calc(${vars.font.size.lg} * var(--scaling-factor, 1))`,
      '--font-size-xl': `calc(${vars.font.size.xl} * var(--scaling-factor, 1))`,
      '--font-size-2xl': `calc(${vars.font.size['2xl']} * var(--scaling-factor, 1))`,
      '--font-size-3xl': `calc(${vars.font.size['3xl']} * var(--scaling-factor, 1))`,
      '--font-size-4xl': `calc(${vars.font.size['4xl']} * var(--scaling-factor, 1))`,
      '--font-size-5xl': `calc(${vars.font.size['5xl']} * var(--scaling-factor, 1))`,
    },
    
    // High contrast mode
    '&[data-high-contrast]': {
      // @ts-ignore
      '--color-border': 'var(--gray-8)',
      '--color-border-hover': 'var(--gray-9)',
      '--color-text-secondary': 'var(--gray-12)',
      '--color-text-tertiary': 'var(--gray-11)',
      '--color-accent-base': 'var(--accent-11)',
      '--color-accent-hover': 'var(--accent-12)',
      '--color-focus-ring': 'var(--accent-11)',
    },
    
    // Panel background styles
    '&[data-panel-background="translucent"]': {
      // @ts-ignore
      '--color-panel': 'var(--gray-a2)',
      '--color-surface': 'var(--gray-a3)',
      '--color-surface-hover': 'var(--gray-a4)',
      '--color-surface-active': 'var(--gray-a5)',
    },
  },
});
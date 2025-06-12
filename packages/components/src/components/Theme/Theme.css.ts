import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const theme = style({
  // Base styles
  minHeight: 0,
  
  // Color mappings based on accent color
  selectors: {
    // Blue accent
    '&[data-accent-color="blue"]': {
      // @ts-ignore
      '--accent-1': vars.color.blue[1],
      '--accent-2': vars.color.blue[2],
      '--accent-3': vars.color.blue[3],
      '--accent-4': vars.color.blue[4],
      '--accent-5': vars.color.blue[5],
      '--accent-6': vars.color.blue[6],
      '--accent-7': vars.color.blue[7],
      '--accent-8': vars.color.blue[8],
      '--accent-9': vars.color.blue[9],
      '--accent-10': vars.color.blue[10],
      '--accent-11': vars.color.blue[11],
      '--accent-12': vars.color.blue[12],
      '--accent-a1': vars.color.blueA[1],
      '--accent-a2': vars.color.blueA[2],
      '--accent-a3': vars.color.blueA[3],
      '--accent-a4': vars.color.blueA[4],
      '--accent-a5': vars.color.blueA[5],
      '--accent-a6': vars.color.blueA[6],
      '--accent-a7': vars.color.blueA[7],
      '--accent-a8': vars.color.blueA[8],
      '--accent-a9': vars.color.blueA[9],
      '--accent-a10': vars.color.blueA[10],
      '--accent-a11': vars.color.blueA[11],
      '--accent-a12': vars.color.blueA[12],
    },
    
    // Green accent
    '&[data-accent-color="green"]': {
      // @ts-ignore
      '--accent-1': vars.color.green[1],
      '--accent-2': vars.color.green[2],
      '--accent-3': vars.color.green[3],
      '--accent-4': vars.color.green[4],
      '--accent-5': vars.color.green[5],
      '--accent-6': vars.color.green[6],
      '--accent-7': vars.color.green[7],
      '--accent-8': vars.color.green[8],
      '--accent-9': vars.color.green[9],
      '--accent-10': vars.color.green[10],
      '--accent-11': vars.color.green[11],
      '--accent-12': vars.color.green[12],
      '--accent-a1': vars.color.greenA[1],
      '--accent-a2': vars.color.greenA[2],
      '--accent-a3': vars.color.greenA[3],
      '--accent-a4': vars.color.greenA[4],
      '--accent-a5': vars.color.greenA[5],
      '--accent-a6': vars.color.greenA[6],
      '--accent-a7': vars.color.greenA[7],
      '--accent-a8': vars.color.greenA[8],
      '--accent-a9': vars.color.greenA[9],
      '--accent-a10': vars.color.greenA[10],
      '--accent-a11': vars.color.greenA[11],
      '--accent-a12': vars.color.greenA[12],
    },
    
    // Red accent
    '&[data-accent-color="red"]': {
      // @ts-ignore
      '--accent-1': vars.color.red[1],
      '--accent-2': vars.color.red[2],
      '--accent-3': vars.color.red[3],
      '--accent-4': vars.color.red[4],
      '--accent-5': vars.color.red[5],
      '--accent-6': vars.color.red[6],
      '--accent-7': vars.color.red[7],
      '--accent-8': vars.color.red[8],
      '--accent-9': vars.color.red[9],
      '--accent-10': vars.color.red[10],
      '--accent-11': vars.color.red[11],
      '--accent-12': vars.color.red[12],
      '--accent-a1': vars.color.redA[1],
      '--accent-a2': vars.color.redA[2],
      '--accent-a3': vars.color.redA[3],
      '--accent-a4': vars.color.redA[4],
      '--accent-a5': vars.color.redA[5],
      '--accent-a6': vars.color.redA[6],
      '--accent-a7': vars.color.redA[7],
      '--accent-a8': vars.color.redA[8],
      '--accent-a9': vars.color.redA[9],
      '--accent-a10': vars.color.redA[10],
      '--accent-a11': vars.color.redA[11],
      '--accent-a12': vars.color.redA[12],
    },
    
    // Yellow accent
    '&[data-accent-color="yellow"]': {
      // @ts-ignore
      '--accent-1': vars.color.yellow[1],
      '--accent-2': vars.color.yellow[2],
      '--accent-3': vars.color.yellow[3],
      '--accent-4': vars.color.yellow[4],
      '--accent-5': vars.color.yellow[5],
      '--accent-6': vars.color.yellow[6],
      '--accent-7': vars.color.yellow[7],
      '--accent-8': vars.color.yellow[8],
      '--accent-9': vars.color.yellow[9],
      '--accent-10': vars.color.yellow[10],
      '--accent-11': vars.color.yellow[11],
      '--accent-12': vars.color.yellow[12],
      '--accent-a1': vars.color.yellowA[1],
      '--accent-a2': vars.color.yellowA[2],
      '--accent-a3': vars.color.yellowA[3],
      '--accent-a4': vars.color.yellowA[4],
      '--accent-a5': vars.color.yellowA[5],
      '--accent-a6': vars.color.yellowA[6],
      '--accent-a7': vars.color.yellowA[7],
      '--accent-a8': vars.color.yellowA[8],
      '--accent-a9': vars.color.yellowA[9],
      '--accent-a10': vars.color.yellowA[10],
      '--accent-a11': vars.color.yellowA[11],
      '--accent-a12': vars.color.yellowA[12],
    },
    
    // Orange accent
    '&[data-accent-color="orange"]': {
      // @ts-ignore
      '--accent-1': vars.color.orange[1],
      '--accent-2': vars.color.orange[2],
      '--accent-3': vars.color.orange[3],
      '--accent-4': vars.color.orange[4],
      '--accent-5': vars.color.orange[5],
      '--accent-6': vars.color.orange[6],
      '--accent-7': vars.color.orange[7],
      '--accent-8': vars.color.orange[8],
      '--accent-9': vars.color.orange[9],
      '--accent-10': vars.color.orange[10],
      '--accent-11': vars.color.orange[11],
      '--accent-12': vars.color.orange[12],
      '--accent-a1': vars.color.orangeA[1],
      '--accent-a2': vars.color.orangeA[2],
      '--accent-a3': vars.color.orangeA[3],
      '--accent-a4': vars.color.orangeA[4],
      '--accent-a5': vars.color.orangeA[5],
      '--accent-a6': vars.color.orangeA[6],
      '--accent-a7': vars.color.orangeA[7],
      '--accent-a8': vars.color.orangeA[8],
      '--accent-a9': vars.color.orangeA[9],
      '--accent-a10': vars.color.orangeA[10],
      '--accent-a11': vars.color.orangeA[11],
      '--accent-a12': vars.color.orangeA[12],
    },
    
    // Purple accent
    '&[data-accent-color="purple"]': {
      // @ts-ignore
      '--accent-1': vars.color.purple[1],
      '--accent-2': vars.color.purple[2],
      '--accent-3': vars.color.purple[3],
      '--accent-4': vars.color.purple[4],
      '--accent-5': vars.color.purple[5],
      '--accent-6': vars.color.purple[6],
      '--accent-7': vars.color.purple[7],
      '--accent-8': vars.color.purple[8],
      '--accent-9': vars.color.purple[9],
      '--accent-10': vars.color.purple[10],
      '--accent-11': vars.color.purple[11],
      '--accent-12': vars.color.purple[12],
      '--accent-a1': vars.color.purpleA[1],
      '--accent-a2': vars.color.purpleA[2],
      '--accent-a3': vars.color.purpleA[3],
      '--accent-a4': vars.color.purpleA[4],
      '--accent-a5': vars.color.purpleA[5],
      '--accent-a6': vars.color.purpleA[6],
      '--accent-a7': vars.color.purpleA[7],
      '--accent-a8': vars.color.purpleA[8],
      '--accent-a9': vars.color.purpleA[9],
      '--accent-a10': vars.color.purpleA[10],
      '--accent-a11': vars.color.purpleA[11],
      '--accent-a12': vars.color.purpleA[12],
    },
    
    // Semantic color mappings (default)
    '&': {
      // @ts-ignore
      // Background colors
      '--color-background': vars.color.gray[1],
      '--color-panel': vars.color.gray[2],
      '--color-overlay': vars.color.blackA[8],
      
      // Surface colors
      '--color-surface': vars.color.gray[3],
      '--color-surface-hover': vars.color.gray[4],
      '--color-surface-active': vars.color.gray[5],
      
      // Text colors
      '--color-text': vars.color.gray[12],
      '--color-text-secondary': vars.color.gray[11],
      '--color-text-tertiary': vars.color.gray[10],
      '--color-text-disabled': vars.color.gray[8],
      
      // Border colors
      '--color-border': vars.color.gray[6],
      '--color-border-hover': vars.color.gray[7],
      '--color-border-focus': 'var(--accent-8)',
      
      // Interactive element colors
      '--color-accent-base': 'var(--accent-9)',
      '--color-accent-hover': 'var(--accent-10)',
      '--color-accent-active': 'var(--accent-11)',
      '--color-accent-text': 'white',
      
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
      '--color-border': vars.color.gray[8],
      '--color-border-hover': vars.color.gray[9],
      '--color-text-secondary': vars.color.gray[12],
      '--color-text-tertiary': vars.color.gray[11],
      '--color-accent-base': 'var(--accent-11)',
      '--color-accent-hover': 'var(--accent-12)',
      '--color-focus-ring': 'var(--accent-11)',
    },
    
    // Panel background styles
    '&[data-panel-background="translucent"]': {
      // @ts-ignore
      '--color-panel': vars.color.grayA[2],
      '--color-surface': vars.color.grayA[3],
      '--color-surface-hover': vars.color.grayA[4],
      '--color-surface-active': vars.color.grayA[5],
    },
  },
});
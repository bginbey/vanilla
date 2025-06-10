import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const checkboxStyles = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    flexShrink: 0,
  },
  variants: {
    variant: {
      default: {},
      rounded: {},
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const inputStyles = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0,
  cursor: 'pointer',
  margin: 0,
  
  ':disabled': {
    cursor: 'not-allowed',
  },
});

export const iconStyles = recipe({
  base: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.color.gray[1], // App background
    border: `2px solid ${vars.color.gray[7]}`, // UI element border
    transition: `${vars.transition.property.common} ${vars.duration.fast} ${vars.easing.easeInOut}`,
    color: 'transparent',
    pointerEvents: 'none',
    
    selectors: {
      [`${inputStyles}:hover:not(:disabled) + &`]: {
        borderColor: vars.color.blue[8], // Hover border
      },
      
      [`${inputStyles}:focus-visible + &`]: {
        boxShadow: `0 0 0 2px ${vars.color.blue[8]}`, // Focus ring
      },
      
      [`${inputStyles}:checked + &`]: {
        backgroundColor: vars.color.blue[9], // Solid color
        borderColor: vars.color.blue[9],
        color: 'white', // White on solid
      },
      
      [`${inputStyles}:checked:hover:not(:disabled) + &`]: {
        backgroundColor: vars.color.blue[10], // Hover solid
        borderColor: vars.color.blue[10],
      },
      
      [`${inputStyles}:indeterminate + &`]: {
        backgroundColor: vars.color.blue[9], // Solid color
        borderColor: vars.color.blue[9],
        color: 'white',
      },
    },
  },
  
  variants: {
    variant: {
      default: {
        borderRadius: vars.radius.sm,
      },
      rounded: {
        borderRadius: vars.radius.full,
      },
    },
    
    error: {
      true: {
        borderColor: vars.color.red[7], // Error border
        
        selectors: {
          [`${inputStyles}:hover:not(:disabled) + &`]: {
            borderColor: vars.color.red[8], // Error hover
          },
          
          [`${inputStyles}:focus-visible + &`]: {
            boxShadow: `0 0 0 2px ${vars.color.red[8]}`, // Error focus
          },
          
          [`${inputStyles}:checked + &`]: {
            backgroundColor: vars.color.red[9], // Error solid
            borderColor: vars.color.red[9],
          },
        },
      },
      false: {},
    },
    
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        
        selectors: {
          [`${inputStyles}:disabled + &`]: {
            backgroundColor: vars.color.gray[2], // Subtle background
          },
        },
      },
      false: {},
    },
  },
  
  defaultVariants: {
    variant: 'default',
    error: false,
    disabled: false,
  },
});

export const labelStyles = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: vars.spacing[2],
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: vars.font.size.md,
    lineHeight: vars.font.lineHeight.normal,
    color: vars.color.gray[12], // High-contrast text
  },
  
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
      false: {},
    },
  },
  
  defaultVariants: {
    disabled: false,
  },
});
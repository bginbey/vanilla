import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const inputStyles = recipe({
  base: {
    fontFamily: vars.font.family.sans,
    fontSize: vars.font.size.md,
    lineHeight: vars.font.lineHeight.normal,
    borderRadius: vars.radius.md,
    transition: `${vars.transition.property.common} ${vars.duration.fast} ${vars.easing.easeInOut}`,
    width: 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    
    '::placeholder': {
      color: vars.color.gray[11], // Low-contrast text
      opacity: 0.7,
    },
    
    ':focus': {
      outline: 'none',
    },
    
    ':focus-visible': {
      boxShadow: `0 0 0 2px ${vars.color.blue[8]}`, // Focus ring
    },
    
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
      backgroundColor: vars.color.gray[2], // Subtle background
    },
  },
  
  variants: {
    variant: {
      outline: {
        backgroundColor: vars.color.gray[1], // App background
        border: `1px solid ${vars.color.gray[7]}`, // UI element border
        padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
        color: vars.color.gray[12], // High-contrast text
        
        ':hover:not(:disabled):not(:focus)': {
          borderColor: vars.color.gray[8], // Hover border
        },
        
        ':focus-visible': {
          borderColor: vars.color.blue[8], // Focus border
        },
      },
      
      filled: {
        backgroundColor: vars.color.gray[3], // UI element background
        border: `1px solid transparent`,
        padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
        color: vars.color.gray[12], // High-contrast text
        
        ':hover:not(:disabled):not(:focus)': {
          backgroundColor: vars.color.gray[4], // Hover background
        },
        
        ':focus-visible': {
          backgroundColor: vars.color.gray[1], // App background
          borderColor: vars.color.blue[8], // Focus border
        },
      },
      
      unstyled: {
        backgroundColor: 'transparent',
        border: 'none',
        padding: 0,
        color: vars.color.gray[12], // High-contrast text
        
        ':focus-visible': {
          boxShadow: 'none',
        },
      },
    },
    
    error: {
      true: {
        borderColor: vars.color.red[7], // Error border
        
        ':hover:not(:disabled)': {
          borderColor: vars.color.red[8], // Error hover border
        },
        
        ':focus-visible': {
          borderColor: vars.color.red[8],
          boxShadow: `0 0 0 2px ${vars.color.red[8]}`, // Error focus ring
        },
      },
      false: {},
    },
    
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {},
    },
    
    disabled: {
      true: {},
      false: {},
    },
  },
  
  defaultVariants: {
    variant: 'outline',
    error: false,
    fullWidth: false,
    disabled: false,
  },
});
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
      color: vars.color.text.secondary,
      opacity: 0.7,
    },
    
    ':focus': {
      outline: 'none',
    },
    
    ':focus-visible': {
      boxShadow: `0 0 0 2px ${vars.color.brand.primary}`,
    },
    
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
      backgroundColor: vars.color.background.secondary,
    },
  },
  
  variants: {
    variant: {
      outline: {
        backgroundColor: vars.color.background.primary,
        border: `1px solid ${vars.color.border.primary}`,
        padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
        color: vars.color.text.primary,
        
        ':hover:not(:disabled):not(:focus)': {
          borderColor: vars.color.border.secondary,
        },
        
        ':focus-visible': {
          borderColor: vars.color.brand.primary,
        },
      },
      
      filled: {
        backgroundColor: vars.color.background.secondary,
        border: `1px solid transparent`,
        padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
        color: vars.color.text.primary,
        
        ':hover:not(:disabled):not(:focus)': {
          backgroundColor: vars.color.background.tertiary,
        },
        
        ':focus-visible': {
          backgroundColor: vars.color.background.primary,
          borderColor: vars.color.brand.primary,
        },
      },
      
      unstyled: {
        backgroundColor: 'transparent',
        border: 'none',
        padding: 0,
        color: vars.color.text.primary,
        
        ':focus-visible': {
          boxShadow: 'none',
        },
      },
    },
    
    error: {
      true: {
        borderColor: vars.color.feedback.error,
        
        ':hover:not(:disabled)': {
          borderColor: vars.color.feedback.error,
        },
        
        ':focus-visible': {
          borderColor: vars.color.feedback.error,
          boxShadow: `0 0 0 2px ${vars.color.feedback.error}`,
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
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const selectStyles = {
  wrapper: recipe({
    base: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: 'auto',
    },
    variants: {
      fullWidth: {
        true: {
          width: '100%',
        },
        false: {},
      },
    },
    defaultVariants: {
      fullWidth: false,
    },
  }),
  
  select: recipe({
    base: {
      fontFamily: vars.font.family.sans,
      fontSize: vars.font.size.md,
      lineHeight: vars.font.lineHeight.normal,
      borderRadius: vars.radius.md,
      transition: `${vars.transition.property.common} ${vars.duration.fast} ${vars.easing.easeInOut}`,
      width: '100%',
      appearance: 'none',
      cursor: 'pointer',
      
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
          paddingRight: vars.spacing[10],
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
          paddingRight: vars.spacing[10],
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
          paddingRight: vars.spacing[6],
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
  }),
};

export const iconStyles = recipe({
  base: {
    position: 'absolute',
    right: vars.spacing[3],
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: vars.color.text.secondary,
    transition: `${vars.transition.property.common} ${vars.duration.fast} ${vars.easing.easeInOut}`,
  },
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
      },
      false: {},
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
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
        boxShadow: `0 0 0 2px ${vars.color.blue[8]}`,
      },
      
      ':disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
        backgroundColor: vars.color.gray[3],
      },
    },
    
    variants: {
      variant: {
        outline: {
          backgroundColor: vars.color.gray[1],
          border: `1px solid ${vars.color.gray[7]}`,
          padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
          paddingRight: vars.spacing[10],
          color: vars.color.gray[12],
          
          ':hover:not(:disabled):not(:focus)': {
            borderColor: vars.color.gray[8],
          },
          
          ':focus-visible': {
            borderColor: vars.color.blue[8],
          },
        },
        
        filled: {
          backgroundColor: vars.color.gray[3],
          border: `1px solid transparent`,
          padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
          paddingRight: vars.spacing[10],
          color: vars.color.gray[12],
          
          ':hover:not(:disabled):not(:focus)': {
            backgroundColor: vars.color.gray[4],
          },
          
          ':focus-visible': {
            backgroundColor: vars.color.gray[1],
            borderColor: vars.color.blue[8],
          },
        },
        
        unstyled: {
          backgroundColor: 'transparent',
          border: 'none',
          padding: 0,
          paddingRight: vars.spacing[6],
          color: vars.color.gray[12],
          
          ':focus-visible': {
            boxShadow: 'none',
          },
        },
      },
      
      error: {
        true: {
          borderColor: vars.color.red[8],
          
          ':hover:not(:disabled)': {
            borderColor: vars.color.red[8],
          },
          
          ':focus-visible': {
            borderColor: vars.color.red[8],
            boxShadow: `0 0 0 2px ${vars.color.red[8]}`,
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
    color: vars.color.gray[11],
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
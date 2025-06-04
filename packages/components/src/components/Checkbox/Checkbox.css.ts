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
    backgroundColor: vars.color.background.primary,
    border: `2px solid ${vars.color.border.primary}`,
    transition: `${vars.transition.property.common} ${vars.duration.fast} ${vars.easing.easeInOut}`,
    color: 'transparent',
    pointerEvents: 'none',
    
    selectors: {
      [`${inputStyles}:hover:not(:disabled) + &`]: {
        borderColor: vars.color.brand.primary,
      },
      
      [`${inputStyles}:focus-visible + &`]: {
        boxShadow: `0 0 0 2px ${vars.color.brand.primary}`,
      },
      
      [`${inputStyles}:checked + &`]: {
        backgroundColor: vars.color.brand.primary,
        borderColor: vars.color.brand.primary,
        color: vars.color.text.inverse,
      },
      
      [`${inputStyles}:checked:hover:not(:disabled) + &`]: {
        backgroundColor: vars.color.brand.secondary,
        borderColor: vars.color.brand.secondary,
      },
      
      [`${inputStyles}:indeterminate + &`]: {
        backgroundColor: vars.color.brand.primary,
        borderColor: vars.color.brand.primary,
        color: vars.color.text.inverse,
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
        borderColor: vars.color.feedback.error,
        
        selectors: {
          [`${inputStyles}:hover:not(:disabled) + &`]: {
            borderColor: vars.color.feedback.error,
          },
          
          [`${inputStyles}:focus-visible + &`]: {
            boxShadow: `0 0 0 2px ${vars.color.feedback.error}`,
          },
          
          [`${inputStyles}:checked + &`]: {
            backgroundColor: vars.color.feedback.error,
            borderColor: vars.color.feedback.error,
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
            backgroundColor: vars.color.background.secondary,
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
    color: vars.color.text.primary,
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
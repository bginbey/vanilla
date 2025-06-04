import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

const sizeConfig = {
  sm: {
    width: '36px',
    height: '20px',
    thumbSize: '14px',
    thumbOffset: '3px',
    thumbTranslate: '16px',
  },
  md: {
    width: '44px',
    height: '24px',
    thumbSize: '18px',
    thumbOffset: '3px',
    thumbTranslate: '20px',
  },
  lg: {
    width: '52px',
    height: '28px',
    thumbSize: '22px',
    thumbOffset: '3px',
    thumbTranslate: '24px',
  },
};

export const switchStyles = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    flexShrink: 0,
  },
  variants: {
    size: {
      sm: {
        width: sizeConfig.sm.width,
        height: sizeConfig.sm.height,
      },
      md: {
        width: sizeConfig.md.width,
        height: sizeConfig.md.height,
      },
      lg: {
        width: sizeConfig.lg.width,
        height: sizeConfig.lg.height,
      },
    },
  },
  defaultVariants: {
    size: 'md',
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

export const trackStyles = recipe({
  base: {
    position: 'absolute',
    inset: 0,
    backgroundColor: vars.color.background.tertiary,
    borderRadius: vars.radius.full,
    border: `2px solid ${vars.color.border.primary}`,
    transition: `${vars.transition.property.common} ${vars.duration.normal} ${vars.easing.easeInOut}`,
    overflow: 'hidden',
    
    selectors: {
      [`${inputStyles}:hover:not(:disabled) + &`]: {
        borderColor: vars.color.border.secondary,
      },
      
      [`${inputStyles}:focus-visible + &`]: {
        boxShadow: `0 0 0 2px ${vars.color.brand.primary}`,
      },
      
      [`${inputStyles}:checked + &`]: {
        backgroundColor: vars.color.brand.primary,
        borderColor: vars.color.brand.primary,
      },
      
      [`${inputStyles}:checked:hover:not(:disabled) + &`]: {
        backgroundColor: vars.color.brand.secondary,
        borderColor: vars.color.brand.secondary,
      },
    },
  },
  
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
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
    size: 'md',
    error: false,
    disabled: false,
  },
});

export const thumbStyles = recipe({
  base: {
    position: 'absolute',
    backgroundColor: vars.color.background.primary,
    borderRadius: vars.radius.full,
    boxShadow: vars.shadow.sm,
    transition: `transform ${vars.duration.normal} ${vars.easing.easeInOut}`,
    top: '50%',
    transform: 'translateY(-50%)',
    
    selectors: {
      [`${inputStyles}:checked ~ ${trackStyles.classNames.base} &`]: {
        backgroundColor: vars.color.text.inverse,
      },
    },
  },
  
  variants: {
    size: {
      sm: {
        width: sizeConfig.sm.thumbSize,
        height: sizeConfig.sm.thumbSize,
        left: sizeConfig.sm.thumbOffset,
        
        selectors: {
          [`${inputStyles}:checked ~ ${trackStyles.classNames.base} &`]: {
            transform: `translateY(-50%) translateX(${sizeConfig.sm.thumbTranslate})`,
          },
        },
      },
      md: {
        width: sizeConfig.md.thumbSize,
        height: sizeConfig.md.thumbSize,
        left: sizeConfig.md.thumbOffset,
        
        selectors: {
          [`${inputStyles}:checked ~ ${trackStyles.classNames.base} &`]: {
            transform: `translateY(-50%) translateX(${sizeConfig.md.thumbTranslate})`,
          },
        },
      },
      lg: {
        width: sizeConfig.lg.thumbSize,
        height: sizeConfig.lg.thumbSize,
        left: sizeConfig.lg.thumbOffset,
        
        selectors: {
          [`${inputStyles}:checked ~ ${trackStyles.classNames.base} &`]: {
            transform: `translateY(-50%) translateX(${sizeConfig.lg.thumbTranslate})`,
          },
        },
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
});

export const labelStyles = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: vars.spacing[3],
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
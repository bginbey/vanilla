import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const radioStyles = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  flexShrink: 0,
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

export const indicatorStyles = recipe({
  base: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.color.gray[1],
    border: `2px solid ${vars.color.gray[7]}`,
    borderRadius: vars.radius.full,
    transition: `${vars.transition.property.common} ${vars.duration.fast} ${vars.easing.easeInOut}`,
    
    '::after': {
      content: '""',
      position: 'absolute',
      width: '8px',
      height: '8px',
      borderRadius: vars.radius.full,
      backgroundColor: 'white',
      transform: 'scale(0)',
      transition: `transform ${vars.duration.fast} ${vars.easing.easeInOut}`,
    },
    
    selectors: {
      [`${inputStyles}:hover:not(:disabled) + &`]: {
        borderColor: vars.color.blue[8],
      },
      
      [`${inputStyles}:focus-visible + &`]: {
        boxShadow: `0 0 0 2px ${vars.color.blue[8]}`,
      },
      
      [`${inputStyles}:checked + &`]: {
        backgroundColor: vars.color.blue[9],
        borderColor: vars.color.blue[8],
      },
      
      [`${inputStyles}:checked + &::after`]: {
        transform: 'scale(1)',
      },
      
      [`${inputStyles}:checked:hover:not(:disabled) + &`]: {
        backgroundColor: vars.color.blue[10],
        borderColor: vars.color.blue[10],
      },
    },
  },
  
  variants: {
    error: {
      true: {
        borderColor: vars.color.red[8],
        
        selectors: {
          [`${inputStyles}:hover:not(:disabled) + &`]: {
            borderColor: vars.color.red[8],
          },
          
          [`${inputStyles}:focus-visible + &`]: {
            boxShadow: `0 0 0 2px ${vars.color.red[8]}`,
          },
          
          [`${inputStyles}:checked + &`]: {
            backgroundColor: vars.color.red[9],
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
            backgroundColor: vars.color.gray[3],
          },
        },
      },
      false: {},
    },
  },
  
  defaultVariants: {
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
    color: vars.color.gray[12],
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
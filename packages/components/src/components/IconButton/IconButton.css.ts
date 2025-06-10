import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const iconButton = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    fontWeight: vars.font.weight.medium,
    transition: `all ${vars.duration.fast} ${vars.easing.easeInOut}`,
    outline: 'none',
    position: 'relative',
    userSelect: 'none',
    textDecoration: 'none',
    flexShrink: 0,
    
    ':focus-visible': {
      boxShadow: `0 0 0 2px ${vars.color.blue[7]}`,
    },

    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },

  variants: {
    variant: {
      solid: {
        backgroundColor: vars.color.gray[12],
        color: vars.color.gray[1],
        
        ':hover:not(:disabled)': {
          backgroundColor: vars.color.gray[11],
        },
        
        ':active:not(:disabled)': {
          backgroundColor: vars.color.gray[10],
        },
      },
      
      outline: {
        backgroundColor: 'transparent',
        color: vars.color.gray[12],
        border: `1px solid ${vars.color.gray[7]}`,
        
        ':hover:not(:disabled)': {
          backgroundColor: vars.color.gray[2],
          borderColor: vars.color.gray[8],
        },
        
        ':active:not(:disabled)': {
          backgroundColor: vars.color.gray[3],
        },
      },
      
      ghost: {
        backgroundColor: 'transparent',
        color: vars.color.gray[11],
        
        ':hover:not(:disabled)': {
          backgroundColor: vars.color.gray[3],
          color: vars.color.gray[12],
        },
        
        ':active:not(:disabled)': {
          backgroundColor: vars.color.gray[4],
        },
      },
    },
    
    size: {
      sm: {
        width: '32px',
        height: '32px',
        borderRadius: vars.radius.md,
      },
      md: {
        width: '40px',
        height: '40px',
        borderRadius: vars.radius.md,
      },
      lg: {
        width: '48px',
        height: '48px',
        borderRadius: vars.radius.lg,
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
});
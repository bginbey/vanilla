import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const fieldStyles = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[2],
  width: '100%',
});

export const labelStyles = recipe({
  base: {
    fontSize: vars.font.size.sm,
    fontWeight: vars.font.weight.medium,
    lineHeight: vars.font.lineHeight.normal,
    color: vars.color.gray[12],
    cursor: 'default',
    
    selectors: {
      [`${fieldStyles} &`]: {
        marginBottom: vars.spacing[1],
      },
    },
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

export const helperTextStyles = recipe({
  base: {
    fontSize: vars.font.size.sm,
    lineHeight: vars.font.lineHeight.relaxed,
    color: vars.color.gray[11],
    margin: 0,
    marginTop: vars.spacing[1],
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

export const errorTextStyles = style({
  fontSize: vars.font.size.sm,
  lineHeight: vars.font.lineHeight.relaxed,
  color: vars.color.red[11],
  margin: 0,
  marginTop: vars.spacing[1],
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[1],
});
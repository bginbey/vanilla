import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const containerBase = style({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: vars.spacing[4],
  paddingRight: vars.spacing[4],
  '@media': {
    'screen and (min-width: 768px)': {
      paddingLeft: vars.spacing[6],
      paddingRight: vars.spacing[6],
    },
  },
});

export const sizes = styleVariants({
  '1': {
    maxWidth: '640px',
  },
  '2': {
    maxWidth: '768px',
  },
  '3': {
    maxWidth: '1024px',
  },
  '4': {
    maxWidth: '1280px',
  },
});

export const align = styleVariants({
  left: {
    marginLeft: '0',
  },
  center: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  right: {
    marginRight: '0',
    marginLeft: 'auto',
  },
});
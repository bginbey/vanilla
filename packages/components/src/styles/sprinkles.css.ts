import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { vars } from './theme.css';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline-block', 'inline-flex', 'grid'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    gap: vars.spacing,
    padding: vars.spacing,
    paddingTop: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    margin: vars.spacing,
    marginTop: vars.spacing,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    fontSize: vars.font.size,
    fontWeight: vars.font.weight,
    lineHeight: vars.font.lineHeight,
    letterSpacing: vars.font.letterSpacing,
    textAlign: ['left', 'center', 'right', 'justify'],
    width: {
      auto: 'auto',
      '100%': '100%',
      '40px': '40px',
      '200px': '200px',
      '400px': '400px',
      '600px': '600px',
    },
    height: {
      auto: 'auto',
      '100%': '100%',
      '40px': '40px',
      '32px': '32px',
      '48px': '48px',
    },
    maxWidth: {
      '100%': '100%',
      '400px': '400px',
      '600px': '600px',
      '800px': '800px',
      '1200px': '1200px',
    },
  },
  shorthands: {
    p: ['padding'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    m: ['margin'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
  },
});

// Create color objects from scales
const createColorObject = (scale: typeof vars.color.gray) => ({
  1: scale[1],
  2: scale[2],
  3: scale[3],
  4: scale[4],
  5: scale[5],
  6: scale[6],
  7: scale[7],
  8: scale[8],
  9: scale[9],
  10: scale[10],
  11: scale[11],
  12: scale[12],
});

const colorProperties = defineProperties({
  properties: {
    color: {
      ...createColorObject(vars.color.gray),
      white: 'white',
      black: 'black',
      transparent: 'transparent',
      // Add other color scales for text
      blue11: vars.color.blue[11],
      blue12: vars.color.blue[12],
      green11: vars.color.green[11],
      green12: vars.color.green[12],
      red11: vars.color.red[11],
      red12: vars.color.red[12],
      yellow11: vars.color.yellow[11],
      yellow12: vars.color.yellow[12],
    },
    backgroundColor: {
      ...createColorObject(vars.color.gray),
      transparent: 'transparent',
      // Add solid colors for backgrounds
      blue9: vars.color.blue[9],
      blue10: vars.color.blue[10],
      green9: vars.color.green[9],
      green10: vars.color.green[10],
      red9: vars.color.red[9],
      red10: vars.color.red[10],
      yellow9: vars.color.yellow[9],
      yellow10: vars.color.yellow[10],
      orange9: vars.color.orange[9],
      orange10: vars.color.orange[10],
      purple9: vars.color.purple[9],
      purple10: vars.color.purple[10],
      // Add alpha variants for overlays
      grayA3: vars.color.grayA[3],
      grayA6: vars.color.grayA[6],
      blackA3: vars.color.blackA[3],
      blackA6: vars.color.blackA[6],
      whiteA3: vars.color.whiteA[3],
      whiteA6: vars.color.whiteA[6],
    },
    borderColor: {
      ...createColorObject(vars.color.gray),
      transparent: 'transparent',
      // Add other border colors
      blue7: vars.color.blue[7],
      blue8: vars.color.blue[8],
      green7: vars.color.green[7],
      green8: vars.color.green[8],
      red7: vars.color.red[7],
      red8: vars.color.red[8],
    },
  },
});

const layoutProperties = defineProperties({
  properties: {
    borderRadius: vars.radius,
    boxShadow: vars.shadow,
    fontFamily: vars.font.family,
    position: ['relative', 'absolute', 'fixed', 'sticky'],
    top: [0],
    right: [0],
    bottom: [0],
    left: [0],
    zIndex: [0, 10, 20, 30, 40, 50],
    overflow: ['hidden', 'auto', 'visible', 'scroll'],
    opacity: [0, 0.5, 1],
    cursor: ['pointer', 'default', 'not-allowed', 'wait', 'text', 'move', 'grab', 'grabbing'],
    userSelect: ['none', 'text', 'all', 'auto'],
    border: ['none', `1px solid ${vars.color.gray[7]}`],
  },
});

const transitionProperties = defineProperties({
  properties: {
    transitionProperty: vars.transition.property,
    transitionDuration: vars.duration,
    transitionTimingFunction: vars.easing,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  layoutProperties,
  transitionProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
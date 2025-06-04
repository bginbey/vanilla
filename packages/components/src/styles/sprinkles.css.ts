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

const colorProperties = defineProperties({
  properties: {
    color: vars.color.text,
    backgroundColor: vars.color.background,
    borderColor: vars.color.border,
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
    border: ['none', `1px solid ${vars.color.border.primary}`],
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
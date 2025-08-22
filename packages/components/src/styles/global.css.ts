import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';
import * as colors from '@beauginbey/vanilla-colors';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

// Helper to create color scale CSS variables
const createColorScaleVars = (colorName: string, scale: any) => {
  const vars: Record<string, string> = {};
  Object.entries(scale).forEach(([key, value]) => {
    vars[`--${colorName}-${key}`] = value as string;
  });
  return vars;
};

// Create the dark mode vars object to reuse
const darkModeVars = {
  // Add all color scales for dark mode
  ...createColorScaleVars('gray', colors.grayDark),
  ...createColorScaleVars('gray-a', colors.grayDarkA),
  ...createColorScaleVars('mauve', colors.mauveDark),
  ...createColorScaleVars('mauve-a', colors.mauveDarkA),
  ...createColorScaleVars('slate', colors.slateDark),
  ...createColorScaleVars('slate-a', colors.slateDarkA),
  ...createColorScaleVars('sage', colors.sageDark),
  ...createColorScaleVars('sage-a', colors.sageDarkA),
  ...createColorScaleVars('olive', colors.oliveDark),
  ...createColorScaleVars('olive-a', colors.oliveDarkA),
  ...createColorScaleVars('sand', colors.sandDark),
  ...createColorScaleVars('sand-a', colors.sandDarkA),
  
  // Core colors - dark
  ...createColorScaleVars('blue', colors.blueDark),
  ...createColorScaleVars('blue-a', colors.blueDarkA),
  ...createColorScaleVars('green', colors.greenDark),
  ...createColorScaleVars('green-a', colors.greenDarkA),
  ...createColorScaleVars('red', colors.redDark),
  ...createColorScaleVars('red-a', colors.redDarkA),
  ...createColorScaleVars('yellow', colors.yellowDark),
  ...createColorScaleVars('yellow-a', colors.yellowDarkA),
  ...createColorScaleVars('orange', colors.orangeDark),
  ...createColorScaleVars('orange-a', colors.orangeDarkA),
  ...createColorScaleVars('purple', colors.purpleDark),
  ...createColorScaleVars('purple-a', colors.purpleDarkA),
  
  // Warm colors - dark
  ...createColorScaleVars('gold', colors.goldDark),
  ...createColorScaleVars('gold-a', colors.goldDarkA),
  ...createColorScaleVars('bronze', colors.bronzeDark),
  ...createColorScaleVars('bronze-a', colors.bronzeDarkA),
  ...createColorScaleVars('brown', colors.brownDark),
  ...createColorScaleVars('brown-a', colors.brownDarkA),
  ...createColorScaleVars('amber', colors.amberDark),
  ...createColorScaleVars('amber-a', colors.amberDarkA),
  ...createColorScaleVars('tomato', colors.tomatoDark),
  ...createColorScaleVars('tomato-a', colors.tomatoDarkA),
  ...createColorScaleVars('ruby', colors.rubyDark),
  ...createColorScaleVars('ruby-a', colors.rubyDarkA),
  ...createColorScaleVars('crimson', colors.crimsonDark),
  ...createColorScaleVars('crimson-a', colors.crimsonDarkA),
  
  // Cool colors - dark
  ...createColorScaleVars('pink', colors.pinkDark),
  ...createColorScaleVars('pink-a', colors.pinkDarkA),
  ...createColorScaleVars('plum', colors.plumDark),
  ...createColorScaleVars('plum-a', colors.plumDarkA),
  ...createColorScaleVars('violet', colors.violetDark),
  ...createColorScaleVars('violet-a', colors.violetDarkA),
  ...createColorScaleVars('iris', colors.irisDark),
  ...createColorScaleVars('iris-a', colors.irisDarkA),
  ...createColorScaleVars('indigo', colors.indigoDark),
  ...createColorScaleVars('indigo-a', colors.indigoDarkA),
  ...createColorScaleVars('cyan', colors.cyanDark),
  ...createColorScaleVars('cyan-a', colors.cyanDarkA),
  ...createColorScaleVars('teal', colors.tealDark),
  ...createColorScaleVars('teal-a', colors.tealDarkA),
  ...createColorScaleVars('jade', colors.jadeDark),
  ...createColorScaleVars('jade-a', colors.jadeDarkA),
  ...createColorScaleVars('grass', colors.grassDark),
  ...createColorScaleVars('grass-a', colors.grassDarkA),
  ...createColorScaleVars('lime', colors.limeDark),
  ...createColorScaleVars('lime-a', colors.limeDarkA),
  ...createColorScaleVars('mint', colors.mintDark),
  ...createColorScaleVars('mint-a', colors.mintDarkA),
  ...createColorScaleVars('sky', colors.skyDark),
  ...createColorScaleVars('sky-a', colors.skyDarkA),
  
  // Overlay scales remain the same
  ...createColorScaleVars('black-a', colors.blackA),
  ...createColorScaleVars('white-a', colors.whiteA),
  
  // Text colors
  '--color-text': colors.grayDark[12],
  '--color-text-secondary': colors.grayDark[11],
  '--color-text-tertiary': colors.grayDark[10],
  '--color-text-disabled': colors.grayDark[8],
  
  // Background colors
  '--color-background': colors.grayDark[1],
  '--color-surface': colors.grayDark[2],
  '--color-surface-raised': colors.grayDark[3],
  '--color-overlay': 'rgba(0, 0, 0, 0.7)',
  
  // Border colors
  '--color-border': colors.grayDark[6],
  '--color-border-hover': colors.grayDark[7],
  '--color-border-focus': colors.blueDark[9],
  
  // Interactive colors (using blue as default accent)
  '--color-accent-base': colors.blueDark[9],
  '--color-accent-hover': colors.blueDark[10],
  '--color-accent-active': colors.blueDark[11],
  '--color-accent-subtle': colors.blueDark[3],
  '--color-accent-subtle-hover': colors.blueDark[4],
  
  // Semantic colors (dark mode variants)
  '--color-success': '#46a758',
  '--color-warning': '#ff8800',
  '--color-error': '#ff6369',
  '--color-info': colors.blueDark[9],
  
  // UI states
  '--color-focus-ring': colors.blueDark[9],
  '--color-selection': colors.blueDark[5],
  '--color-selection-text': colors.grayDark[12],
};

// Default color scales and semantic variables for light mode
// These ensure components work without Theme wrapper
globalStyle(':root', {
  vars: {
    // Add all color scales for light mode
    ...createColorScaleVars('gray', colors.gray),
    ...createColorScaleVars('gray-a', colors.grayA),
    ...createColorScaleVars('mauve', colors.mauve),
    ...createColorScaleVars('mauve-a', colors.mauveA),
    ...createColorScaleVars('slate', colors.slate),
    ...createColorScaleVars('slate-a', colors.slateA),
    ...createColorScaleVars('sage', colors.sage),
    ...createColorScaleVars('sage-a', colors.sageA),
    ...createColorScaleVars('olive', colors.olive),
    ...createColorScaleVars('olive-a', colors.oliveA),
    ...createColorScaleVars('sand', colors.sand),
    ...createColorScaleVars('sand-a', colors.sandA),
    
    // Core colors
    ...createColorScaleVars('blue', colors.blue),
    ...createColorScaleVars('blue-a', colors.blueA),
    ...createColorScaleVars('green', colors.green),
    ...createColorScaleVars('green-a', colors.greenA),
    ...createColorScaleVars('red', colors.red),
    ...createColorScaleVars('red-a', colors.redA),
    ...createColorScaleVars('yellow', colors.yellow),
    ...createColorScaleVars('yellow-a', colors.yellowA),
    ...createColorScaleVars('orange', colors.orange),
    ...createColorScaleVars('orange-a', colors.orangeA),
    ...createColorScaleVars('purple', colors.purple),
    ...createColorScaleVars('purple-a', colors.purpleA),
    
    // Warm colors
    ...createColorScaleVars('gold', colors.gold),
    ...createColorScaleVars('gold-a', colors.goldA),
    ...createColorScaleVars('bronze', colors.bronze),
    ...createColorScaleVars('bronze-a', colors.bronzeA),
    ...createColorScaleVars('brown', colors.brown),
    ...createColorScaleVars('brown-a', colors.brownA),
    ...createColorScaleVars('amber', colors.amber),
    ...createColorScaleVars('amber-a', colors.amberA),
    ...createColorScaleVars('tomato', colors.tomato),
    ...createColorScaleVars('tomato-a', colors.tomatoA),
    ...createColorScaleVars('ruby', colors.ruby),
    ...createColorScaleVars('ruby-a', colors.rubyA),
    ...createColorScaleVars('crimson', colors.crimson),
    ...createColorScaleVars('crimson-a', colors.crimsonA),
    
    // Cool colors
    ...createColorScaleVars('pink', colors.pink),
    ...createColorScaleVars('pink-a', colors.pinkA),
    ...createColorScaleVars('plum', colors.plum),
    ...createColorScaleVars('plum-a', colors.plumA),
    ...createColorScaleVars('violet', colors.violet),
    ...createColorScaleVars('violet-a', colors.violetA),
    ...createColorScaleVars('iris', colors.iris),
    ...createColorScaleVars('iris-a', colors.irisA),
    ...createColorScaleVars('indigo', colors.indigo),
    ...createColorScaleVars('indigo-a', colors.indigoA),
    ...createColorScaleVars('cyan', colors.cyan),
    ...createColorScaleVars('cyan-a', colors.cyanA),
    ...createColorScaleVars('teal', colors.teal),
    ...createColorScaleVars('teal-a', colors.tealA),
    ...createColorScaleVars('jade', colors.jade),
    ...createColorScaleVars('jade-a', colors.jadeA),
    ...createColorScaleVars('grass', colors.grass),
    ...createColorScaleVars('grass-a', colors.grassA),
    ...createColorScaleVars('lime', colors.lime),
    ...createColorScaleVars('lime-a', colors.limeA),
    ...createColorScaleVars('mint', colors.mint),
    ...createColorScaleVars('mint-a', colors.mintA),
    ...createColorScaleVars('sky', colors.sky),
    ...createColorScaleVars('sky-a', colors.skyA),
    
    // Overlay scales
    ...createColorScaleVars('black-a', colors.blackA),
    ...createColorScaleVars('white-a', colors.whiteA),
    
    // Text colors
    '--color-text': colors.gray[12],
    '--color-text-secondary': colors.gray[11],
    '--color-text-tertiary': colors.gray[10],
    '--color-text-disabled': colors.gray[8],
    
    // Background colors
    '--color-background': colors.gray[1],
    '--color-surface': colors.gray[2],
    '--color-surface-raised': colors.gray[3],
    '--color-overlay': 'rgba(0, 0, 0, 0.5)',
    
    // Border colors
    '--color-border': colors.gray[6],
    '--color-border-hover': colors.gray[7],
    '--color-border-focus': colors.blue[9],
    
    // Interactive colors (using blue as default accent)
    '--color-accent-base': colors.blue[9],
    '--color-accent-hover': colors.blue[10],
    '--color-accent-active': colors.blue[11],
    '--color-accent-subtle': colors.blue[3],
    '--color-accent-subtle-hover': colors.blue[4],
    
    // Semantic colors
    '--color-success': '#30a46c',
    '--color-warning': '#f76808',
    '--color-error': '#e5484d',
    '--color-info': colors.blue[9],
    
    // UI states
    '--color-focus-ring': colors.blue[9],
    '--color-selection': colors.blue[5],
    '--color-selection-text': colors.gray[12],
  }
});

// Default color scales and semantic variables for dark mode
globalStyle('.dark', {
  vars: darkModeVars
});

// Automatic dark mode based on system preference
globalStyle(':root:not(.light)', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: darkModeVars
    }
  }
});

// Respect motion preferences
globalStyle('*, *::before, *::after', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
    },
  },
});

globalStyle('html', {
  fontSize: '16px',
  lineHeight: vars.font.lineHeight.normal,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('body', {
  margin: 0,
  fontFamily: vars.font.family.sans,
  fontSize: vars.font.size.base,
  color: 'var(--color-text)', // Uses dynamic gray from Theme
  backgroundColor: 'var(--color-background)', // Uses dynamic gray from Theme
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
  fontWeight: vars.font.weight.bold,
  lineHeight: vars.font.lineHeight.tight,
});

globalStyle('p', {
  margin: 0,
});

globalStyle('a', {
  color: 'var(--color-accent-active)', // Uses dynamic accent color
  textDecoration: 'none',
  transition: `${vars.transition.property.colors} ${vars.duration.fast} ${vars.easing.easeInOut}`,
});

globalStyle('a:hover', {
  textDecoration: 'underline',
});

// Enhanced focus styles
globalStyle(':focus-visible', {
  outline: `2px solid var(--color-focus-ring)`, // Uses dynamic accent color
  outlineOffset: '2px',
});

globalStyle(':focus:not(:focus-visible)', {
  outline: 'none',
});

globalStyle('button', {
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  padding: 0,
  font: 'inherit',
});

// Smooth scrolling with motion preference support
globalStyle('html', {
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      scrollBehavior: 'smooth',
    },
  },
});

// Selection styles
globalStyle('::selection', {
  backgroundColor: 'var(--color-selection)', // Uses dynamic accent color
  color: 'var(--color-selection-text)',
});

globalStyle('img, video', {
  maxWidth: '100%',
  height: 'auto',
});

globalStyle('code', {
  fontFamily: vars.font.family.mono,
  fontSize: '0.9em',
  backgroundColor: 'var(--color-surface)', // Uses dynamic gray
  color: 'var(--color-text)',
  padding: '0.2em 0.4em',
  borderRadius: vars.radius.sm,
});
// Components
export * from './components/Box';
export * from './components/Button';
export * from './components/Text';
export * from './components/Theme';
export * from './components/ThemeProvider';
export * from './components/Input';
export * from './components/Select';
export * from './components/Checkbox';
export * from './components/Radio';
export * from './components/Switch';
export * from './components/FormField';
export * from './components/Icon';
export * from './components/IconButton';

// Layout components
export * from './components/Flex';
export * from './components/Grid';
export * from './components/Container';
export * from './components/Section';

// Styles
export { vars, theme } from './styles/theme.css';
export { sprinkles } from './styles/sprinkles.css';
export type { Sprinkles } from './styles/sprinkles.css';


// Utils
export type { 
  PolymorphicComponentProp, 
  PolymorphicComponentPropWithRef, 
  PolymorphicRef 
} from './utils/polymorphic';

// Import colors CSS for CSS variables
import '@beauginbey/vanilla-colors/css';

// Global styles are bundled automatically
import './styles/global.css';
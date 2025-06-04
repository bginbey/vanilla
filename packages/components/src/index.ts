// Components
export * from './components/Box';
export * from './components/Button';
export * from './components/Text';

// Styles
export { vars, lightTheme } from './styles/theme.css';
export { sprinkles } from './styles/sprinkles.css';
export type { Sprinkles } from './styles/sprinkles.css';

// Utils
export type { 
  PolymorphicComponentProp, 
  PolymorphicComponentPropWithRef, 
  PolymorphicRef 
} from './utils/polymorphic';

// Global styles are bundled automatically
import './styles/global.css';
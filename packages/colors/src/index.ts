// Export all scales
export * from './scales';

// Export utilities
export * from './utils';

// Export types
export * from './types';

// Re-export common utilities for convenience
export { createCustomScale } from './utils/customScale';
export { generateColorScale, generateAlphaScale, validateScale } from './utils/generateScale';
export { calcAPCA, meetsContrast, shouldUseDarkText } from './utils/contrast';
import '@testing-library/jest-dom';

// Mock vanilla-extract runtime
jest.mock('@vanilla-extract/css', () => ({
  style: () => 'mocked-style',
  createTheme: () => 'mocked-theme',
  createThemeContract: () => ({}),
  createGlobalTheme: () => 'mocked-global-theme',
  globalStyle: () => undefined,
}));

jest.mock('@vanilla-extract/recipes', () => ({
  recipe: () => () => 'mocked-recipe',
}));

jest.mock('@vanilla-extract/sprinkles', () => ({
  defineProperties: () => ({}),
  createSprinkles: () => () => 'mocked-sprinkles',
}));
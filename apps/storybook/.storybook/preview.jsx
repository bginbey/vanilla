// @ts-check
import React from 'react';
import { theme, Theme } from '@beauginbey/vanilla-components';
// Import the CSS - the styles.css export actually maps to dist/index.css which has ALL styles
import '@beauginbey/vanilla-components/styles.css';
import '@beauginbey/vanilla-colors/css';

// Apply theme class globally
if (typeof document !== 'undefined') {
  document.documentElement.classList.add(theme);
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  docs: {
    theme: undefined, // Use our custom theme
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      showName: true,
    },
  },
};

// Function to apply theme (dark/light mode)
const applyTheme = (theme) => {
  // Apply dark mode class if needed
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export const decorators = [
  (Story, context) => {
    applyTheme(context.globals.theme);
    return (
      <Theme accentColor="blue" grayColor="gray" asChild>
        <div>
          <Story />
        </div>
      </Theme>
    );
  },
];


export default {
  parameters,
  globalTypes,
  decorators,
};
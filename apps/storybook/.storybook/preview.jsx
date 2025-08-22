// @ts-check
import React from 'react';
import { theme, Theme } from '@beauginbey/vanilla-components';
import { themes } from '@storybook/theming';
// Import the CSS - the styles.css export actually maps to dist/index.css which has ALL styles
import '@beauginbey/vanilla-components/styles.css';
import '@beauginbey/vanilla-colors/css';
import './preview-styles.css';

// Apply theme class globally
if (typeof document !== 'undefined') {
  document.documentElement.classList.add(theme);
}

// Detect system dark mode preference
const getSystemTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  docs: {
    // Use Storybook's theme that matches the system preference
    theme: getSystemTheme() === 'dark' ? themes.dark : themes.normal,
  },
  darkMode: {
    // Set the initial theme based on system preference
    current: getSystemTheme(),
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: getSystemTheme(), // Use system preference as default
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
        { value: 'system', title: 'System' },
      ],
      showName: true,
    },
  },
};

// Function to apply theme (dark/light mode)
const applyTheme = (theme) => {
  // If theme is 'system', use the system preference
  const actualTheme = theme === 'system' ? getSystemTheme() : theme;
  
  // Apply dark mode class if needed
  if (actualTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Also update the docs theme to match
  if (typeof window !== 'undefined' && window.parent) {
    // Update the parent frame (docs view) as well
    const parentDoc = window.parent.document;
    if (actualTheme === 'dark') {
      parentDoc.documentElement.classList.add('dark');
    } else {
      parentDoc.documentElement.classList.remove('dark');
    }
  }
};

export const decorators = [
  (Story, context) => {
    // Apply the theme
    React.useEffect(() => {
      applyTheme(context.globals.theme);
      
      // Listen for system theme changes if in system mode
      if (context.globals.theme === 'system') {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => applyTheme('system');
        
        // Modern browsers
        if (mediaQuery.addEventListener) {
          mediaQuery.addEventListener('change', handleChange);
          return () => mediaQuery.removeEventListener('change', handleChange);
        }
      }
    }, [context.globals.theme]);
    
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
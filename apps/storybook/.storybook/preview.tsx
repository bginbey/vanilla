import type { Preview } from '@storybook/react';
import React from 'react';
import { light, cream, dark } from '@beauginbey/vanilla-components';
import '@beauginbey/vanilla-components/styles.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'cream', title: 'Cream' },
          { value: 'dark', title: 'Dark' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const themeMap = {
        light: light,
        cream: cream,
        dark: dark,
      };
      
      const theme = themeMap[context.globals.theme] || light;
      
      React.useEffect(() => {
        // Apply theme to the Storybook iframe's document root
        document.documentElement.className = theme;
        
        // Also set background color for better visual feedback
        document.body.style.backgroundColor = 'var(--vanilla-color-background-primary)';
        document.body.style.color = 'var(--vanilla-color-text-primary)';
      }, [theme]);
      
      return <Story />;
    },
  ],
};

export default preview;
import type { Preview } from '@storybook/react';
import React from 'react';
import { theme } from '@beauginbey/vanilla-components';
import '@beauginbey/vanilla-components/styles.css';
import '@beauginbey/vanilla-colors/css';

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
          { value: 'dark', title: 'Dark' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      React.useEffect(() => {
        // Apply theme class to the Storybook iframe's document root
        document.documentElement.className = theme;
        
        // Apply dark mode class if needed
        if (context.globals.theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        
        // Set background color for better visual feedback
        document.body.style.backgroundColor = 'var(--gray-1)';
        document.body.style.color = 'var(--gray-12)';
      }, [context.globals.theme]);
      
      return <Story />;
    },
  ],
};

export default preview;
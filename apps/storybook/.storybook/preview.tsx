import type { Preview } from '@storybook/react';
import React from 'react';
import { light, cream } from '@beauginbey/vanilla-components';
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
          { value: 'cream', title: 'Cream (Uber-inspired)' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'cream' ? cream : light;
      
      React.useEffect(() => {
        // Apply theme to the Storybook iframe's document root
        document.documentElement.className = theme;
      }, [theme]);
      
      return <Story />;
    },
  ],
};

export default preview;
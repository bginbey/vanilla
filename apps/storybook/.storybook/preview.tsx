import type { Preview } from '@storybook/react';
import React from 'react';
import { lightTheme } from '@beauginbey/vanilla-components';

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
  decorators: [
    (Story) => (
      <div className={lightTheme}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
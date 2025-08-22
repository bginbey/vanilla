import type { StorybookConfig } from '@storybook/react-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
      resolve: {
        alias: {
          // Properly resolve CSS imports from workspace packages
          '@beauginbey/vanilla-components/styles.css': path.resolve(
            __dirname,
            '../../../packages/components/dist/index.css'
          ),
          '@beauginbey/vanilla-colors/css': path.resolve(
            __dirname,
            '../../../packages/colors/dist/index.css'
          ),
        },
      },
      server: {
        fs: {
          allow: ['../../..'],
        },
      },
      optimizeDeps: {
        // Exclude workspace packages from optimization to prevent caching during development
        exclude: [
          '@vanilla-extract/css',
          '@beauginbey/vanilla-components',
          '@beauginbey/vanilla-tokens',
          '@beauginbey/vanilla-colors',
        ],
        // Force re-optimization when deps change (useful for development)
        force: process.env.NODE_ENV === 'development',
      },
      // Custom cache directory to avoid conflicts
      cacheDir: '../../../node_modules/.vite-storybook',
    });
  },
};

export default config;
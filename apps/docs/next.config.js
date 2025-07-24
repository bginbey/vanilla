const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  flexsearch: {
    codeblocks: true,
  },
  staticImage: true,
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withVanillaExtract(withNextra({
  reactStrictMode: true,
  transpilePackages: ['@beauginbey/vanilla-components', '@beauginbey/vanilla-tokens', '@beauginbey/vanilla-colors'],
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
}));
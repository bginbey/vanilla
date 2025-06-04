import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>🍦 Vanilla Design System</span>,
  project: {
    link: 'https://github.com/your-org/vanilla-design-system',
  },
  docsRepositoryBase: 'https://github.com/your-org/vanilla-design-system/tree/main/apps/docs',
  footer: {
    text: 'Vanilla Design System © 2024',
  },
  primaryHue: 213,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    float: true,
    title: 'On This Page',
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  darkMode: false,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Vanilla Design System',
    };
  },
};

export default config;
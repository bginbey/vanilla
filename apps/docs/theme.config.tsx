import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { ThemeToggle } from './components/ThemeToggle';
import { GitHubButton } from './components/GitHubButton';

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>🍦 Vanilla Design System</span>,
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
  darkMode: true,
  navbar: {
    extraContent: (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <GitHubButton />
        <ThemeToggle />
      </div>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Vanilla Design System',
    };
  },
};

export default config;
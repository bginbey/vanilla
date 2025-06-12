// @ts-check
import { theme } from '@beauginbey/vanilla-components';

// Apply theme class globally
if (typeof document !== 'undefined') {
  document.documentElement.className = theme;
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

// Function to apply theme globally
const applyTheme = (theme) => {
  // Load CSS files if not already loaded
  if (!document.getElementById('vanilla-components-styles')) {
    const componentStyles = document.createElement('link');
    componentStyles.id = 'vanilla-components-styles';
    componentStyles.rel = 'stylesheet';
    componentStyles.href = '/components.css';
    document.head.appendChild(componentStyles);
    
    const colorStyles = document.createElement('link');
    colorStyles.id = 'vanilla-colors-styles';
    colorStyles.rel = 'stylesheet';
    colorStyles.href = '/colors.css';
    document.head.appendChild(colorStyles);
  }
  
  // Apply dark mode class if needed
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Set background color for better visual feedback
  document.body.style.backgroundColor = 'var(--gray-1)';
  document.body.style.color = 'var(--gray-12)';
  
  // Apply styles to Storybook docs container
  const docsContainer = document.querySelector('.docs-story') || document.querySelector('.sbdocs');
  if (docsContainer) {
    docsContainer.style.backgroundColor = 'var(--gray-1)';
    docsContainer.style.color = 'var(--gray-12)';
  }
  
  // Apply to the main docs wrapper
  const docsWrapper = document.querySelector('.sbdocs-wrapper');
  if (docsWrapper) {
    docsWrapper.style.backgroundColor = 'var(--gray-1)';
    docsWrapper.style.color = 'var(--gray-12)';
  }
  
  // Apply to all docs containers with a more aggressive approach
  const style = document.createElement('style');
  style.id = 'vanilla-docs-theme';
  style.textContent = `
    .sbdocs,
    .sbdocs-wrapper,
    .sbdocs-content,
    .docs-story,
    .sb-main-padded {
      background-color: var(--gray-1) !important;
      color: var(--gray-12) !important;
    }
    
    .sbdocs h1,
    .sbdocs h2,
    .sbdocs h3,
    .sbdocs h4,
    .sbdocs h5,
    .sbdocs h6,
    .sbdocs p,
    .sbdocs span,
    .sbdocs div {
      color: inherit;
    }
    
    /* Style code blocks */
    .sbdocs pre,
    .sbdocs code {
      background-color: var(--gray-3) !important;
      border-color: var(--gray-6) !important;
    }
    
    /* Style tables */
    .sbdocs table {
      background-color: var(--gray-2) !important;
    }
    
    .sbdocs th {
      background-color: var(--gray-3) !important;
      border-color: var(--gray-6) !important;
    }
    
    .sbdocs td {
      border-color: var(--gray-6) !important;
    }
  `;
  
  // Remove existing style if present
  const existingStyle = document.getElementById('vanilla-docs-theme');
  if (existingStyle) {
    existingStyle.remove();
  }
  document.head.appendChild(style);
  
  // Add default CSS variables for components that aren't wrapped in RadixTheme
  const root = document.documentElement;
  root.style.setProperty('--color-accent-base', 'var(--blue-9)');
  root.style.setProperty('--color-accent-hover', 'var(--blue-10)');
  root.style.setProperty('--color-accent-text', 'white');
  root.style.setProperty('--color-focus-ring', 'var(--blue-8)');
  root.style.setProperty('--radius-3', '0.375rem');
  
  // Add spacing variables for button padding
  root.style.setProperty('--space-1', '0.25rem');
  root.style.setProperty('--space-2', '0.5rem');
  root.style.setProperty('--space-3', '0.75rem');
  root.style.setProperty('--space-4', '1rem');
  root.style.setProperty('--space-5', '1.25rem');
  
  // Add font size variables
  root.style.setProperty('--font-size-sm', '0.875rem');
  root.style.setProperty('--font-size-base', '1rem');
  root.style.setProperty('--font-size-lg', '1.125rem');
};

export const decorators = [
  (Story, context) => {
    applyTheme(context.globals.theme);
    return Story();
  },
];

// Listen for global changes to apply theme to docs pages
if (typeof window !== 'undefined') {
  // Store current theme
  let currentTheme = 'light';
  
  // Apply theme on initial load
  const applyInitialTheme = () => {
    applyTheme(currentTheme);
  };
  
  // Try multiple times to ensure DOM is ready
  setTimeout(applyInitialTheme, 50);
  setTimeout(applyInitialTheme, 150);
  setTimeout(applyInitialTheme, 300);
  
  // Also apply on DOM content loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyInitialTheme);
  } else {
    applyInitialTheme();
  }
  
  // Listen for theme changes
  window.__STORYBOOK_ADDONS_CHANNEL__?.on('globalsUpdated', ({ globals }) => {
    if (globals.theme) {
      currentTheme = globals.theme;
      applyTheme(currentTheme);
    }
  });
  
  // Also listen for URL changes (docs navigation)
  let lastUrl = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      setTimeout(() => applyTheme(currentTheme), 100);
    }
  }).observe(document, { subtree: true, childList: true });
}

export default {
  parameters,
  globalTypes,
  decorators,
};
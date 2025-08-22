import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

// Check if user prefers dark mode
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply theme based on system preference
addons.setConfig({
  theme: prefersDark ? themes.dark : themes.light,
});

// Listen for changes to system appearance
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Update the theme based on the new preference
    addons.setConfig({
      theme: e.matches ? themes.dark : themes.light,
    });
    // Force reload to apply theme change completely
    window.location.reload();
  });
}
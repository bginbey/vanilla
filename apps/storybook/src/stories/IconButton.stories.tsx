import type { Meta, StoryObj } from '@storybook/react';
import { IconButton, Box, Text } from '@beauginbey/vanilla-components';
import React from 'react';

// Mock icons
const IconSearch = (props: any) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
};

const IconSettings = (props: any) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m20.22-6.22l-4.24 4.24m-9.96 0L2.78 7.78m17.44 12.44l-4.24-4.24m-9.96 0L2.78 16.22" />
    </svg>
  );
};

const IconHeart = (props: any) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};

const IconSun = (props: any) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
};

const IconMoon = (props: any) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
};

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['solid', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    'aria-label': {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: IconSearch,
    'aria-label': 'Search',
  },
};

export const Variants: Story = {
  render: () => (
    <Box display="flex" gap={3}>
      <IconButton icon={IconSearch} variant="solid" aria-label="Search" />
      <IconButton icon={IconSettings} variant="outline" aria-label="Settings" />
      <IconButton icon={IconHeart} variant="ghost" aria-label="Favorite" />
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box display="flex" gap={3} alignItems="center">
      <IconButton icon={IconSearch} size="sm" aria-label="Search" />
      <IconButton icon={IconSearch} size="md" aria-label="Search" />
      <IconButton icon={IconSearch} size="lg" aria-label="Search" />
    </Box>
  ),
};

export const States: Story = {
  render: () => (
    <Box display="flex" gap={3}>
      <IconButton icon={IconSettings} aria-label="Settings" />
      <IconButton icon={IconSettings} disabled aria-label="Settings" />
    </Box>
  ),
};

export const ThemeToggle: Story = {
  render: () => {
    const [isDark, setIsDark] = React.useState(false);
    
    return (
      <Box 
        p={6} 
        backgroundColor={isDark ? 'primary' : 'tertiary'} 
        borderRadius="lg"
        minWidth="200px"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text color={isDark ? 'inverse' : 'primary'}>
            {isDark ? 'Dark' : 'Light'} Mode
          </Text>
          <IconButton
            icon={isDark ? IconSun : IconMoon}
            variant="ghost"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setIsDark(!isDark)}
          />
        </Box>
      </Box>
    );
  },
};
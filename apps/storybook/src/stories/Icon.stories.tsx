import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconProvider } from '@beauginbey/vanilla-components';

// Mock icon components
const IconSearch = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const IconHeart = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const IconSettings = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
  </svg>
);

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: { type: 'select' },
      options: ['current', 'primary', 'secondary', 'success', 'warning', 'error'],
    },
    stroke: {
      control: { type: 'number', min: 1, max: 3, step: 0.5 },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: IconSearch,
  },
};

export const Props: Story = {
  args: {
    icon: IconSettings,
    size: 'md',
    color: 'current',
    stroke: 2,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Icon icon={IconHeart} size="xs" />
      <Icon icon={IconHeart} size="sm" />
      <Icon icon={IconHeart} size="md" />
      <Icon icon={IconHeart} size="lg" />
      <Icon icon={IconHeart} size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => {
    const colors = ['current', 'primary', 'secondary', 'success', 'warning', 'error'] as const;
    
    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        {colors.map(color => (
          <Icon key={color} icon={IconSearch} color={color} size="lg" />
        ))}
      </div>
    );
  },
};
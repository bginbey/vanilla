import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '@beauginbey/vanilla-components';
import type { AccentColor } from '@beauginbey/vanilla-components';
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
    color: {
      control: 'select',
      options: [
        'blue', 'green', 'red', 'yellow', 'orange', 'purple',
        'gold', 'bronze', 'brown', 'amber', 'tomato', 'ruby', 'crimson',
        'pink', 'plum', 'violet', 'iris', 'indigo', 'cyan', 'teal',
        'jade', 'grass', 'lime', 'mint', 'sky'
      ],
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

export const Props: Story = {
  args: {
    icon: IconSettings,
    'aria-label': 'Settings',
    variant: 'solid',
    size: 'md',
    disabled: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <IconButton icon={IconSearch} variant="solid" aria-label="Search" />
      <IconButton icon={IconSettings} variant="outline" aria-label="Settings" />
      <IconButton icon={IconHeart} variant="ghost" aria-label="Favorite" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <IconButton icon={IconSearch} size="sm" aria-label="Search" />
      <IconButton icon={IconSearch} size="md" aria-label="Search" />
      <IconButton icon={IconSearch} size="lg" aria-label="Search" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <IconButton icon={IconSettings} variant="solid" aria-label="Settings" />
        <IconButton icon={IconSettings} variant="solid" disabled aria-label="Settings" />
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <IconButton icon={IconSettings} variant="outline" aria-label="Settings" />
        <IconButton icon={IconSettings} variant="outline" disabled aria-label="Settings" />
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <IconButton icon={IconSettings} variant="ghost" aria-label="Settings" />
        <IconButton icon={IconSettings} variant="ghost" disabled aria-label="Settings" />
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => {
    const colors: AccentColor[] = ['blue', 'green', 'red', 'amber', 'violet', 'teal'];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {colors.map(color => (
            <IconButton
              key={color}
              icon={IconHeart}
              variant="solid"
              color={color}
              aria-label={`${color} heart`}
            />
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {colors.map(color => (
            <IconButton
              key={color}
              icon={IconSettings}
              variant="outline"
              color={color}
              aria-label={`${color} settings`}
            />
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {colors.map(color => (
            <IconButton
              key={color}
              icon={IconSearch}
              variant="ghost"
              color={color}
              aria-label={`${color} search`}
            />
          ))}
        </div>
      </div>
    );
  },
};
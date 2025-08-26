import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@beauginbey/vanilla-components';
import type { AccentColor } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outline', 'filled', 'unstyled'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    error: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
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
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Props: Story = {
  args: {
    placeholder: 'Interactive playground',
    variant: 'outline',
    type: 'text',
    error: false,
    disabled: false,
    fullWidth: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <Input variant="outline" placeholder="Outline variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="unstyled" placeholder="Unstyled variant" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <Input placeholder="Normal input" />
      <Input placeholder="Error input" error />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="With value" defaultValue="Filled value" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => {
    const colors: AccentColor[] = ['blue', 'green', 'red', 'amber', 'violet', 'teal'];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontWeight: 500, marginBottom: 8 }}>Focus colors (click to focus)</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 600 }}>
          {colors.map(color => (
            <Input
              key={color}
              color={color}
              placeholder={color}
              variant="outline"
            />
          ))}
        </div>
      </div>
    );
  },
};
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@beauginbey/vanilla-components';
import type { AccentColor } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
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
    error: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable feature',
  },
};

export const Props: Story = {
  args: {
    label: 'Interactive playground',
    size: 'md',
    error: false,
    disabled: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch (default)" />
      <Switch size="lg" label="Large switch" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Switch label="Unchecked" />
      <Switch label="Checked" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
      <Switch label="Error state" error />
      <Switch label="Error checked" error defaultChecked />
    </div>
  ),
};

export const Colors: Story = {
  render: () => {
    const colors: AccentColor[] = ['blue', 'green', 'red', 'amber', 'violet', 'teal'];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontWeight: 500, marginBottom: 8 }}>Checked state colors</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 600 }}>
          {colors.map(color => (
            <Switch
              key={color}
              label={color}
              color={color}
              defaultChecked
            />
          ))}
        </div>
      </div>
    );
  },
};
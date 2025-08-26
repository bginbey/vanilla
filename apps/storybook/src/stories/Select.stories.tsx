import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@beauginbey/vanilla-components';
import type { AccentColor } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outline', 'filled', 'unstyled'],
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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
    ),
  },
};

export const Props: Story = {
  args: {
    variant: 'outline',
    error: false,
    disabled: false,
    fullWidth: false,
    children: (
      <>
        <option value="">Interactive playground</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <Select variant="outline">
        <option value="">Outline variant</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
      <Select variant="filled">
        <option value="">Filled variant</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
      <Select variant="unstyled">
        <option value="">Unstyled variant</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <Select>
        <option value="">Normal select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
      <Select error>
        <option value="">Error select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
      <Select disabled>
        <option value="">Disabled select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
      <Select defaultValue="1">
        <option value="">Select an option</option>
        <option value="1">Selected option</option>
        <option value="2">Option 2</option>
      </Select>
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
            <Select key={color} color={color} variant="outline">
              <option value="">{color}</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </Select>
          ))}
        </div>
      </div>
    );
  },
};
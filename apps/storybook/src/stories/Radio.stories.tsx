import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '@beauginbey/vanilla-components';
import type { AccentColor } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Radio',
  component: Radio,
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio button',
    name: 'default',
  },
};

export const Props: Story = {
  args: {
    label: 'Interactive playground',
    name: 'playground',
    size: 'md',
    error: false,
    disabled: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Radio size="sm" name="size" value="sm" label="Small radio" />
      <Radio size="md" name="size" value="md" label="Medium radio (default)" defaultChecked />
      <Radio size="lg" name="size" value="lg" label="Large radio" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Radio name="state1" label="Unchecked" />
      <Radio name="state2" label="Checked" defaultChecked />
      <Radio name="state3" label="Disabled" disabled />
      <Radio name="state4" label="Disabled checked" disabled defaultChecked />
      <Radio name="state5" label="Error state" error />
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
            <fieldset key={color} style={{ border: 'none', padding: 0, margin: 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Radio
                  name={`${color}-group`}
                  value="option1"
                  label={`${color} - Option 1`}
                  color={color}
                  defaultChecked
                />
                <Radio
                  name={`${color}-group`}
                  value="option2"
                  label={`${color} - Option 2`}
                  color={color}
                />
              </div>
            </fieldset>
          ))}
        </div>
      </div>
    );
  },
};
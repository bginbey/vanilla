import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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

export const RadioGroup: Story = {
  render: (args) => (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend style={{ fontSize: 16, fontWeight: 500, marginBottom: 12 }}>
        Choose your favorite color
      </legend>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Radio {...args} name="color" value="red" label="Red" defaultChecked />
        <Radio {...args} name="color" value="green" label="Green" />
        <Radio {...args} name="color" value="blue" label="Blue" />
        <Radio {...args} name="color" value="yellow" label="Yellow" />
      </div>
    </fieldset>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Radio {...args} name="state1" label="Unchecked" />
      <Radio {...args} name="state2" label="Checked" defaultChecked />
      <Radio {...args} name="state3" label="Disabled" disabled />
      <Radio {...args} name="state4" label="Disabled checked" disabled defaultChecked />
      <Radio {...args} name="state5" label="Error state" error />
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Standalone radio button',
    name: 'standalone',
  },
};

export const Controlled: Story = {
  render: function Render(args) {
    const [selected, setSelected] = React.useState('option1');
    
    return (
      <div>
        <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
          <legend style={{ fontSize: 16, fontWeight: 500, marginBottom: 12 }}>
            Select an option
          </legend>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Radio
              {...args}
              name="controlled"
              value="option1"
              label="Option 1"
              checked={selected === 'option1'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <Radio
              {...args}
              name="controlled"
              value="option2"
              label="Option 2"
              checked={selected === 'option2'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <Radio
              {...args}
              name="controlled"
              value="option3"
              label="Option 3"
              checked={selected === 'option3'}
              onChange={(e) => setSelected(e.target.value)}
            />
          </div>
        </fieldset>
        <p style={{ marginTop: 16, fontSize: 14, color: '#666' }}>
          Selected: {selected}
        </p>
      </div>
    );
  },
};

export const HorizontalLayout: Story = {
  render: (args) => (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend style={{ fontSize: 16, fontWeight: 500, marginBottom: 12 }}>
        Choose size
      </legend>
      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <Radio {...args} name="size" value="small" label="Small" />
        <Radio {...args} name="size" value="medium" label="Medium" defaultChecked />
        <Radio {...args} name="size" value="large" label="Large" />
      </div>
    </fieldset>
  ),
};

export const WithDescriptions: Story = {
  render: (args) => (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend style={{ fontSize: 16, fontWeight: 500, marginBottom: 12 }}>
        Select a plan
      </legend>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <label style={{ display: 'flex', gap: 12, cursor: 'pointer' }}>
          <Radio {...args} name="plan" value="free" />
          <div>
            <div style={{ fontWeight: 500 }}>Free</div>
            <div style={{ fontSize: 14, color: '#666', marginTop: 4 }}>
              Basic features for personal use
            </div>
          </div>
        </label>
        <label style={{ display: 'flex', gap: 12, cursor: 'pointer' }}>
          <Radio {...args} name="plan" value="pro" defaultChecked />
          <div>
            <div style={{ fontWeight: 500 }}>Pro</div>
            <div style={{ fontSize: 14, color: '#666', marginTop: 4 }}>
              Advanced features for professionals
            </div>
          </div>
        </label>
        <label style={{ display: 'flex', gap: 12, cursor: 'pointer' }}>
          <Radio {...args} name="plan" value="enterprise" />
          <div>
            <div style={{ fontWeight: 500 }}>Enterprise</div>
            <div style={{ fontSize: 14, color: '#666', marginTop: 4 }}>
              Custom solutions for large teams
            </div>
          </div>
        </label>
      </div>
    </fieldset>
  ),
};

export const WithError: Story = {
  render: (args) => (
    <div>
      <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
        <legend style={{ fontSize: 16, fontWeight: 500, marginBottom: 12 }}>
          Select your preference <span style={{ color: '#dc2626' }}>*</span>
        </legend>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Radio {...args} name="preference" value="yes" label="Yes" error />
          <Radio {...args} name="preference" value="no" label="No" error />
          <Radio {...args} name="preference" value="maybe" label="Maybe" error />
        </div>
      </fieldset>
      <p style={{ marginTop: 8, fontSize: 12, color: '#dc2626' }}>
        Please select an option
      </p>
    </div>
  ),
};
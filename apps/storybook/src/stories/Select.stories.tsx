import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@beauginbey/vanilla-components';

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

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <Select {...args} variant="outline">
        <option value="">Outline variant</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
      <Select {...args} variant="filled">
        <option value="">Filled variant</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
      <Select {...args} variant="unstyled">
        <option value="">Unstyled variant</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <Select {...args}>
        <option value="">Normal select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
      <Select {...args} error>
        <option value="">Error select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
      <Select {...args} disabled>
        <option value="">Disabled select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: (
      <>
        <option value="">Full width select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export const WithGroups: Story = {
  args: {
    children: (
      <>
        <option value="">Select a country</option>
        <optgroup label="North America">
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="mx">Mexico</option>
        </optgroup>
        <optgroup label="Europe">
          <option value="uk">United Kingdom</option>
          <option value="fr">France</option>
          <option value="de">Germany</option>
          <option value="it">Italy</option>
        </optgroup>
        <optgroup label="Asia">
          <option value="jp">Japan</option>
          <option value="cn">China</option>
          <option value="kr">South Korea</option>
        </optgroup>
      </>
    ),
  },
};

export const Controlled: Story = {
  render: function Render(args) {
    const [value, setValue] = React.useState('');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
        <Select
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="">Select a fruit</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
          <option value="grape">Grape</option>
        </Select>
        <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
          Selected value: {value || '(none)'}
        </p>
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <label htmlFor="labeled-select" style={{ fontSize: 14, fontWeight: 500 }}>
        Choose your country
      </label>
      <Select {...args} id="labeled-select">
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
      </Select>
    </div>
  ),
};

export const ErrorWithMessage: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <label htmlFor="error-select" style={{ fontSize: 14, fontWeight: 500 }}>
        Select your role
      </label>
      <Select
        {...args}
        id="error-select"
        error
        aria-describedby="error-message"
        defaultValue=""
      >
        <option value="" disabled>Please select a role</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="manager">Manager</option>
      </Select>
      <p id="error-message" style={{ margin: 0, fontSize: 12, color: '#dc2626' }}>
        Please select a valid role
      </p>
    </div>
  ),
};
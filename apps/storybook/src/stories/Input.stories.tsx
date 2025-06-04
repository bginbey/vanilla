import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@beauginbey/vanilla-components';

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
  },
  args: {
    placeholder: 'Enter text...',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'outline',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <Input {...args} variant="outline" placeholder="Outline variant" />
      <Input {...args} variant="filled" placeholder="Filled variant" />
      <Input {...args} variant="unstyled" placeholder="Unstyled variant" />
    </div>
  ),
};

export const InputTypes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <Input {...args} type="text" placeholder="Text input" />
      <Input {...args} type="email" placeholder="Email input" />
      <Input {...args} type="password" placeholder="Password input" />
      <Input {...args} type="number" placeholder="Number input" />
      <Input {...args} type="tel" placeholder="Phone input" />
      <Input {...args} type="url" placeholder="URL input" />
      <Input {...args} type="search" placeholder="Search input" />
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <Input {...args} placeholder="Normal input" />
      <Input {...args} placeholder="Error input" error />
      <Input {...args} placeholder="Disabled input" disabled />
      <Input {...args} placeholder="Read-only input" readOnly value="Read only text" />
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: 'Full width input',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export const WithValue: Story = {
  args: {
    defaultValue: 'Initial value',
  },
};

export const Controlled: Story = {
  render: function Render(args) {
    const [value, setValue] = React.useState('');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
        <Input
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Controlled input"
        />
        <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
          Value: {value || '(empty)'}
        </p>
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <label htmlFor="labeled-input" style={{ fontSize: 14, fontWeight: 500 }}>
        Email Address
      </label>
      <Input {...args} id="labeled-input" type="email" placeholder="john@example.com" />
    </div>
  ),
};

export const ErrorWithMessage: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <label htmlFor="error-input" style={{ fontSize: 14, fontWeight: 500 }}>
        Email Address
      </label>
      <Input
        {...args}
        id="error-input"
        type="email"
        placeholder="john@example.com"
        error
        aria-describedby="error-message"
      />
      <p id="error-message" style={{ margin: 0, fontSize: 12, color: '#dc2626' }}>
        Please enter a valid email address
      </p>
    </div>
  ),
};
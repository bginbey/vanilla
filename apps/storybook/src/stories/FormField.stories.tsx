import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormField, Input } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    helperText: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'boolean' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    children: <Input type="email" placeholder="john@example.com" />,
  },
};

export const Props: Story = {
  args: {
    label: 'Field Label',
    helperText: 'This is helper text',
    required: false,
    disabled: false,
    error: false,
    errorMessage: '',
    children: <Input placeholder="Interactive playground" />,
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <FormField label="Normal Field" helperText="Helper text appears here">
        <Input placeholder="Normal state" />
      </FormField>
      
      <FormField label="Required Field" required helperText="This field is required">
        <Input placeholder="Required field" />
      </FormField>
      
      <FormField label="Disabled Field" disabled helperText="This field is disabled">
        <Input placeholder="Disabled field" />
      </FormField>
      
      <FormField 
        label="Error Field" 
        error 
        errorMessage="This field has an error"
      >
        <Input placeholder="Error state" defaultValue="Invalid value" />
      </FormField>
    </div>
  ),
};
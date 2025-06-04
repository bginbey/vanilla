import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormField, Input, Select, Checkbox, Radio, Switch } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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

export const WithInput: Story = {
  args: {
    label: 'Email Address',
    helperText: 'We\'ll never share your email with anyone else.',
  },
  render: (args) => (
    <FormField {...args}>
      <Input type="email" placeholder="john@example.com" />
    </FormField>
  ),
};

export const WithSelect: Story = {
  args: {
    label: 'Country',
    helperText: 'Select your country of residence',
  },
  render: (args) => (
    <FormField {...args}>
      <Select>
        <option value="">Choose a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
      </Select>
    </FormField>
  ),
};

export const WithCheckbox: Story = {
  args: {
    helperText: 'You can unsubscribe at any time.',
  },
  render: (args) => (
    <FormField {...args}>
      <Checkbox label="I want to receive promotional emails" />
    </FormField>
  ),
};

export const WithRadioGroup: Story = {
  args: {
    label: 'Subscription Plan',
    helperText: 'Choose the plan that best fits your needs',
  },
  render: (args) => (
    <div>
      <FormField {...args}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Radio name="plan" value="basic" label="Basic - $9/month" />
          <Radio name="plan" value="pro" label="Pro - $19/month" defaultChecked />
          <Radio name="plan" value="enterprise" label="Enterprise - Contact us" />
        </div>
      </FormField>
    </div>
  ),
};

export const WithSwitch: Story = {
  args: {
    helperText: 'Enable this to receive notifications about your account activity',
  },
  render: (args) => (
    <FormField {...args}>
      <Switch label="Email notifications" />
    </FormField>
  ),
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    required: true,
    helperText: 'Enter your first and last name',
  },
  render: (args) => (
    <FormField {...args}>
      <Input placeholder="John Doe" />
    </FormField>
  ),
};

export const WithError: Story = {
  args: {
    label: 'Email Address',
    error: true,
    errorMessage: 'Please enter a valid email address',
  },
  render: (args) => (
    <FormField {...args}>
      <Input type="email" placeholder="john@example.com" defaultValue="invalid-email" />
    </FormField>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    disabled: true,
    helperText: 'Your username cannot be changed',
  },
  render: (args) => (
    <FormField {...args}>
      <Input defaultValue="john_doe" />
    </FormField>
  ),
};

export const CompleteForm: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      country: '',
      notifications: true,
      plan: 'basic',
      terms: false,
    });
    
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.country) newErrors.country = 'Please select a country';
      if (!formData.terms) newErrors.terms = 'You must accept the terms';
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        alert('Form submitted successfully!');
      }
    };
    
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <FormField
          label="Full Name"
          required
          error={!!errors.name}
          errorMessage={errors.name}
        >
          <Input
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              setErrors({ ...errors, name: '' });
            }}
            placeholder="John Doe"
          />
        </FormField>
        
        <FormField
          label="Email Address"
          required
          error={!!errors.email}
          errorMessage={errors.email}
          helperText="We'll use this to contact you"
        >
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              setErrors({ ...errors, email: '' });
            }}
            placeholder="john@example.com"
          />
        </FormField>
        
        <FormField
          label="Country"
          required
          error={!!errors.country}
          errorMessage={errors.country}
        >
          <Select
            value={formData.country}
            onChange={(e) => {
              setFormData({ ...formData, country: e.target.value });
              setErrors({ ...errors, country: '' });
            }}
          >
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
          </Select>
        </FormField>
        
        <FormField
          label="Subscription Plan"
          helperText="You can change this later"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Radio 
              name="plan" 
              value="basic" 
              label="Basic - $9/month"
              checked={formData.plan === 'basic'}
              onChange={() => setFormData({ ...formData, plan: 'basic' })}
            />
            <Radio 
              name="plan" 
              value="pro" 
              label="Pro - $19/month"
              checked={formData.plan === 'pro'}
              onChange={() => setFormData({ ...formData, plan: 'pro' })}
            />
          </div>
        </FormField>
        
        <FormField>
          <Switch
            label="Email notifications"
            checked={formData.notifications}
            onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
          />
        </FormField>
        
        <FormField
          error={!!errors.terms}
          errorMessage={errors.terms}
        >
          <Checkbox
            label="I accept the terms and conditions"
            checked={formData.terms}
            onChange={(e) => {
              setFormData({ ...formData, terms: e.target.checked });
              setErrors({ ...errors, terms: '' });
            }}
          />
        </FormField>
        
        <button type="submit" style={{ marginTop: 16 }}>
          Submit Form
        </button>
      </form>
    );
  },
};
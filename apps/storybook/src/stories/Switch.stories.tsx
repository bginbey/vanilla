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

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Switch {...args} size="sm" label="Small switch" />
      <Switch {...args} size="md" label="Medium switch (default)" />
      <Switch {...args} size="lg" label="Large switch" />
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Switch {...args} label="Unchecked" />
      <Switch {...args} label="Checked" defaultChecked />
      <Switch {...args} label="Disabled" disabled />
      <Switch {...args} label="Disabled checked" disabled defaultChecked />
      <Switch {...args} label="Error state" error />
      <Switch {...args} label="Error checked" error defaultChecked />
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Toggle feature',
  },
};

export const Controlled: Story = {
  render: function Render(args) {
    const [isOn, setIsOn] = React.useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Switch
          {...args}
          label="Controlled switch"
          checked={isOn}
          onChange={(e) => setIsOn(e.target.checked)}
        />
        <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
          Status: {isOn ? 'ON' : 'OFF'}
        </p>
      </div>
    );
  },
};

export const SettingsExample: Story = {
  render: function Render(args) {
    const [settings, setSettings] = React.useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      analytics: false,
    });
    
    const handleChange = (setting: keyof typeof settings) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSettings(prev => ({
        ...prev,
        [setting]: e.target.checked,
      }));
    };
    
    return (
      <div style={{ width: 300 }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: 18 }}>Settings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Push Notifications</span>
            <Switch
              {...args}
              checked={settings.notifications}
              onChange={handleChange('notifications')}
              aria-label="Toggle notifications"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Dark Mode</span>
            <Switch
              {...args}
              checked={settings.darkMode}
              onChange={handleChange('darkMode')}
              aria-label="Toggle dark mode"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Auto-save</span>
            <Switch
              {...args}
              checked={settings.autoSave}
              onChange={handleChange('autoSave')}
              aria-label="Toggle auto-save"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Analytics</span>
            <Switch
              {...args}
              checked={settings.analytics}
              onChange={handleChange('analytics')}
              aria-label="Toggle analytics"
            />
          </div>
        </div>
      </div>
    );
  },
};

export const WithDescriptions: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
      <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 500, marginBottom: 4 }}>Email notifications</div>
          <div style={{ fontSize: 14, color: '#666' }}>
            Receive email updates about your account activity
          </div>
        </div>
        <Switch {...args} defaultChecked />
      </label>
      
      <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 500, marginBottom: 4 }}>Marketing emails</div>
          <div style={{ fontSize: 14, color: '#666' }}>
            Receive emails about new features and updates
          </div>
        </div>
        <Switch {...args} />
      </label>
      
      <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 500, marginBottom: 4 }}>Two-factor authentication</div>
          <div style={{ fontSize: 14, color: '#666' }}>
            Add an extra layer of security to your account
          </div>
        </div>
        <Switch {...args} defaultChecked />
      </label>
    </div>
  ),
};

export const WithError: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Switch
        {...args}
        id="terms-switch"
        label="I agree to the terms and conditions"
        error
        aria-describedby="error-message"
      />
      <p id="error-message" style={{ margin: 0, fontSize: 12, color: '#dc2626', marginLeft: 56 }}>
        You must accept the terms to continue
      </p>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => {
    const colors: AccentColor[] = ['blue', 'green', 'red', 'amber', 'violet', 'teal', 'crimson', 'jade'];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h3 style={{ margin: 0, fontSize: 18 }}>Accent Colors</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, maxWidth: 500 }}>
          {colors.map(color => (
            <Switch
              key={color}
              label={color.charAt(0).toUpperCase() + color.slice(1)}
              color={color}
              defaultChecked
            />
          ))}
        </div>
        
        <h3 style={{ margin: '20px 0 0 0', fontSize: 18 }}>Different Sizes with Colors</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Switch size="sm" label="Small Purple" color="purple" defaultChecked />
          <Switch size="md" label="Medium Orange" color="orange" defaultChecked />
          <Switch size="lg" label="Large Mint" color="mint" defaultChecked />
        </div>
      </div>
    );
  },
};
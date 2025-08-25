import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Theme } from '@beauginbey/vanilla-components';
import type { AccentColor } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'rounded'],
    },
    error: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Checkbox {...args} variant="default" label="Default checkbox" />
      <Checkbox {...args} variant="rounded" label="Rounded checkbox" />
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Checkbox {...args} label="Unchecked" />
      <Checkbox {...args} label="Checked" defaultChecked />
      <Checkbox {...args} label="Indeterminate" indeterminate defaultChecked />
      <Checkbox {...args} label="Disabled" disabled />
      <Checkbox {...args} label="Disabled checked" disabled defaultChecked />
      <Checkbox {...args} label="Error state" error />
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Standalone checkbox',
  },
};

export const Controlled: Story = {
  render: function Render(args) {
    const [checked, setChecked] = React.useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Checkbox
          {...args}
          label="Controlled checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
          Checked: {checked ? 'Yes' : 'No'}
        </p>
      </div>
    );
  },
};

export const CheckboxGroup: Story = {
  render: function Render(args) {
    const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
    
    const items = [
      { id: 'item1', label: 'Option 1' },
      { id: 'item2', label: 'Option 2' },
      { id: 'item3', label: 'Option 3' },
      { id: 'item4', label: 'Option 4' },
    ];
    
    const handleChange = (id: string, checked: boolean) => {
      setSelectedItems(prev =>
        checked
          ? [...prev, id]
          : prev.filter(item => item !== id)
      );
    };
    
    return (
      <div>
        <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
          <legend style={{ fontSize: 16, fontWeight: 500, marginBottom: 12 }}>
            Select your preferences
          </legend>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {items.map(item => (
              <Checkbox
                {...args}
                key={item.id}
                label={item.label}
                checked={selectedItems.includes(item.id)}
                onChange={(e) => handleChange(item.id, e.target.checked)}
              />
            ))}
          </div>
        </fieldset>
        <p style={{ marginTop: 16, fontSize: 14, color: '#666' }}>
          Selected: {selectedItems.length === 0 ? 'None' : selectedItems.join(', ')}
        </p>
      </div>
    );
  },
};

export const IndeterminateExample: Story = {
  render: function Render(args) {
    const [parentChecked, setParentChecked] = React.useState(false);
    const [childStates, setChildStates] = React.useState({
      child1: false,
      child2: false,
      child3: false,
    });
    
    const allChecked = Object.values(childStates).every(Boolean);
    const someChecked = Object.values(childStates).some(Boolean);
    
    const handleParentChange = () => {
      const newState = !allChecked;
      setParentChecked(newState);
      setChildStates({
        child1: newState,
        child2: newState,
        child3: newState,
      });
    };
    
    const handleChildChange = (child: keyof typeof childStates) => {
      const newChildStates = {
        ...childStates,
        [child]: !childStates[child],
      };
      setChildStates(newChildStates);
      
      const allCheckedNow = Object.values(newChildStates).every(Boolean);
      setParentChecked(allCheckedNow);
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Checkbox
          {...args}
          label="Select all"
          checked={allChecked}
          indeterminate={someChecked && !allChecked}
          onChange={handleParentChange}
        />
        <div style={{ marginLeft: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Checkbox
            {...args}
            label="Child option 1"
            checked={childStates.child1}
            onChange={() => handleChildChange('child1')}
          />
          <Checkbox
            {...args}
            label="Child option 2"
            checked={childStates.child2}
            onChange={() => handleChildChange('child2')}
          />
          <Checkbox
            {...args}
            label="Child option 3"
            checked={childStates.child3}
            onChange={() => handleChildChange('child3')}
          />
        </div>
      </div>
    );
  },
};

export const WithError: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Checkbox
        {...args}
        id="terms"
        label="I accept the terms and conditions"
        error
        aria-describedby="error-message"
      />
      <p id="error-message" style={{ margin: 0, fontSize: 12, color: '#dc2626', marginLeft: 28 }}>
        You must accept the terms to continue
      </p>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: (args) => {
    const accentColors: AccentColor[] = [
      'blue', 'green', 'red', 'yellow', 'orange',
      'purple', 'gold', 'bronze', 'brown', 'amber',
      'tomato', 'ruby', 'crimson', 'pink', 'plum',
      'violet', 'iris', 'indigo', 'cyan', 'teal',
      'jade', 'grass', 'lime', 'mint', 'sky'
    ];
    
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(5, 1fr)', 
        gap: '1rem',
        padding: '1rem'
      }}>
        {accentColors.map(color => (
          <Theme key={color} accentColor={color} asChild>
            <div style={{ 
              padding: '1rem', 
              borderRadius: '8px',
              backgroundColor: 'var(--color-panel)',
              border: '1px solid var(--color-border)'
            }}>
              <h4 style={{ 
                margin: '0 0 0.75rem 0',
                color: 'var(--color-text)',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                {color}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Checkbox label="Unchecked" />
                <Checkbox label="Checked" defaultChecked />
                <Checkbox label="Indeterminate" indeterminate defaultChecked />
              </div>
            </div>
          </Theme>
        ))}
      </div>
    );
  }
};
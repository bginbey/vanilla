import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@beauginbey/vanilla-components';
import type { AccentColor } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    as: {
      control: 'select',
      options: ['button', 'a'],
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Props: Story = {
  args: {
    children: 'Interactive playground',
    variant: 'solid',
    size: 'md',
    fullWidth: false,
    disabled: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button variant="solid">Normal</Button>
        <Button variant="solid" disabled>
          Disabled
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button variant="outline">Normal</Button>
        <Button variant="outline" disabled>
          Disabled
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button variant="ghost">Normal</Button>
        <Button variant="ghost" disabled>
          Disabled
        </Button>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => {
    const colors: AccentColor[] = ['blue', 'green', 'red', 'amber', 'violet', 'teal'];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {colors.map(color => (
            <Button key={color} variant="solid" color={color}>
              {color}
            </Button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {colors.map(color => (
            <Button key={color} variant="outline" color={color}>
              {color}
            </Button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {colors.map(color => (
            <Button key={color} variant="ghost" color={color}>
              {color}
            </Button>
          ))}
        </div>
      </div>
    );
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@beauginbey/vanilla-components';
import type { AccentColor } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: [
        'primary', 'secondary', 'tertiary', 'inverse',
        'blue', 'green', 'red', 'yellow', 'orange', 'purple',
        'gold', 'bronze', 'brown', 'amber', 'tomato', 'ruby', 'crimson',
        'pink', 'plum', 'violet', 'iris', 'indigo', 'cyan', 'teal',
        'jade', 'grass', 'lime', 'mint', 'sky'
      ],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    truncate: {
      control: 'boolean',
    },
    as: {
      control: 'select',
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export const Props: Story = {
  args: {
    children: 'Interactive playground - adjust controls to see text variations',
    size: 'base',
    weight: 'regular',
    color: 'primary',
    align: 'left',
    truncate: false,
    as: 'p',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
      <Text size="xs">Extra small text (xs)</Text>
      <Text size="sm">Small text (sm)</Text>
      <Text size="base">Base text (base)</Text>
      <Text size="lg">Large text (lg)</Text>
      <Text size="xl">Extra large text (xl)</Text>
      <Text size="2xl">2X large text (2xl)</Text>
      <Text size="3xl">3X large text (3xl)</Text>
      <Text size="4xl">4X large text (4xl)</Text>
      <Text size="5xl">5X large text (5xl)</Text>
    </div>
  ),
};

export const Colors: Story = {
  render: () => {
    const semanticColors = ['primary', 'secondary', 'tertiary'] as const;
    const accentColors: AccentColor[] = ['blue', 'green', 'red', 'amber', 'violet', 'teal'];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <Text weight="semibold" style={{ marginBottom: 12 }}>Semantic Colors</Text>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {semanticColors.map(color => (
              <Text key={color} color={color}>
                {color.charAt(0).toUpperCase() + color.slice(1)} text color
              </Text>
            ))}
          </div>
        </div>
        
        <div>
          <Text weight="semibold" style={{ marginBottom: 12 }}>Accent Colors</Text>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {accentColors.map(color => (
              <Text key={color} color={color}>
                {color}
              </Text>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import { Text, Box } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'inverse', 'brand', 'success', 'warning', 'error', 'info'],
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

export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={2}>
      <Text size="xs">Extra Small Text (xs)</Text>
      <Text size="sm">Small Text (sm)</Text>
      <Text size="base">Base Text (base)</Text>
      <Text size="lg">Large Text (lg)</Text>
      <Text size="xl">Extra Large Text (xl)</Text>
      <Text size="2xl">2X Large Text (2xl)</Text>
      <Text size="3xl">3X Large Text (3xl)</Text>
      <Text size="4xl">4X Large Text (4xl)</Text>
      <Text size="5xl">5X Large Text (5xl)</Text>
    </Box>
  ),
};

export const Weights: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={2}>
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
    </Box>
  ),
};

export const Colors: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={2}>
      <Text color="primary">Primary color text</Text>
      <Text color="secondary">Secondary color text</Text>
      <Text color="tertiary">Tertiary color text</Text>
      <Box backgroundColor={9} p={2}>
        <Text color="inverse">Inverse color text</Text>
      </Box>
      <Text color="brand">Brand color text</Text>
      <Text color="success">Success color text</Text>
      <Text color="warning">Warning color text</Text>
      <Text color="error">Error color text</Text>
      <Text color="info">Info color text</Text>
    </Box>
  ),
};

export const Headings: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={3}>
      <Text as="h1" size="5xl" weight="bold">
        Heading 1
      </Text>
      <Text as="h2" size="4xl" weight="bold">
        Heading 2
      </Text>
      <Text as="h3" size="3xl" weight="semibold">
        Heading 3
      </Text>
      <Text as="h4" size="2xl" weight="semibold">
        Heading 4
      </Text>
      <Text as="h5" size="xl" weight="medium">
        Heading 5
      </Text>
      <Text as="h6" size="lg" weight="medium">
        Heading 6
      </Text>
    </Box>
  ),
};

export const Truncation: Story = {
  args: {
    truncate: true,
    children: 'This is a very long text that should be truncated when it exceeds the container width. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Alignment: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={3}>
      <Box backgroundColor={2} p={3} borderRadius="md">
        <Text align="left">Left aligned text</Text>
      </Box>
      <Box backgroundColor={2} p={3} borderRadius="md">
        <Text align="center">Center aligned text</Text>
      </Box>
      <Box backgroundColor={2} p={3} borderRadius="md">
        <Text align="right">Right aligned text</Text>
      </Box>
    </Box>
  ),
};
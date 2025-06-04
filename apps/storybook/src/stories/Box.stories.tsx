import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'main', 'aside', 'header', 'footer'],
    },
    display: {
      control: 'select',
      options: ['none', 'flex', 'block', 'inline-block', 'inline-flex', 'grid'],
    },
    p: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24],
    },
    backgroundColor: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    p: 4,
    backgroundColor: 'secondary',
    borderRadius: 'md',
    children: 'This is a Box component',
  },
};

export const FlexLayout: Story = {
  args: {
    display: 'flex',
    gap: 4,
    p: 4,
    backgroundColor: 'secondary',
    borderRadius: 'lg',
  },
  render: (args) => (
    <Box {...args}>
      <Box p={3} backgroundColor="primary" borderRadius="md">
        <Text>Item 1</Text>
      </Box>
      <Box p={3} backgroundColor="primary" borderRadius="md">
        <Text>Item 2</Text>
      </Box>
      <Box p={3} backgroundColor="primary" borderRadius="md">
        <Text>Item 3</Text>
      </Box>
    </Box>
  ),
};

export const AsSection: Story = {
  args: {
    as: 'section',
    p: 6,
    backgroundColor: 'tertiary',
    borderRadius: 'xl',
  },
  render: (args) => (
    <Box {...args}>
      <Text as="h2" size="2xl" weight="bold" mb={3}>
        Section Title
      </Text>
      <Text color="secondary">
        This Box is rendered as a semantic section element.
      </Text>
    </Box>
  ),
};

export const Responsive: Story = {
  args: {
    p: { mobile: 2, tablet: 4, desktop: 6 },
    display: { mobile: 'block', tablet: 'flex' },
    gap: { tablet: 4 },
    backgroundColor: 'secondary',
    borderRadius: 'lg',
  },
  render: (args) => (
    <Box {...args}>
      <Box p={3} backgroundColor="primary" borderRadius="md">
        <Text>Responsive Item 1</Text>
      </Box>
      <Box p={3} backgroundColor="primary" borderRadius="md">
        <Text>Responsive Item 2</Text>
      </Box>
    </Box>
  ),
};
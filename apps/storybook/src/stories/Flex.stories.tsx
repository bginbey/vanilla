import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Box } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'],
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    gap: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24],
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gap: 4,
    children: (
      <>
        <Box p={3} backgroundColor={3} borderRadius="md">Item 1</Box>
        <Box p={3} backgroundColor={3} borderRadius="md">Item 2</Box>
        <Box p={3} backgroundColor={3} borderRadius="md">Item 3</Box>
      </>
    ),
  },
};

export const Props: Story = {
  args: {
    direction: 'row',
    align: 'center',
    justify: 'space-between',
    wrap: 'wrap',
    gap: 4,
    p: 6,
    backgroundColor: 2,
    borderRadius: 'lg',
    children: (
      <>
        <Box p={3} backgroundColor={4} borderRadius="md">Flex Item 1</Box>
        <Box p={3} backgroundColor={4} borderRadius="md">Flex Item 2</Box>
        <Box p={3} backgroundColor={4} borderRadius="md">Flex Item 3</Box>
      </>
    ),
  },
};
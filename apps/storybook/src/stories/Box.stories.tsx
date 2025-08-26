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
    m: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24],
    },
    backgroundColor: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'transparent'],
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    gap: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24],
    },
    flexDirection: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    justifyContent: {
      control: 'select',
      options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'],
    },
    alignItems: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Box component with Sprinkles',
    p: 4,
    backgroundColor: 2,
    borderRadius: 'md',
  },
};

export const Props: Story = {
  args: {
    children: (
      <>
        <Text>Interactive playground</Text>
        <Text size="sm" color="secondary">Adjust the controls to explore Box capabilities</Text>
      </>
    ),
    as: 'div',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    p: 6,
    backgroundColor: 3,
    borderRadius: 'lg',
    border: '1px solid',
    borderColor: 'default',
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import { Grid, Box } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'text',
      description: 'Number of columns or grid-template-columns value',
    },
    rows: {
      control: 'text',
      description: 'Number of rows or grid-template-rows value',
    },
    gap: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
    flow: {
      control: 'select',
      options: ['row', 'column', 'dense', 'row dense', 'column dense'],
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: 3,
    gap: 4,
    children: (
      <>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <Box key={i} p={4} backgroundColor={3} borderRadius="md" textAlign="center">
            Item {i}
          </Box>
        ))}
      </>
    ),
  },
};

export const Props: Story = {
  args: {
    columns: '1fr 2fr 1fr',
    rows: 'auto',
    gap: 4,
    align: 'stretch',
    justify: 'stretch',
    flow: 'row',
    p: 6,
    backgroundColor: 2,
    borderRadius: 'lg',
    children: (
      <>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <Box key={i} p={4} backgroundColor={4} borderRadius="md" textAlign="center">
            Grid Item {i}
          </Box>
        ))}
      </>
    ),
  },
};
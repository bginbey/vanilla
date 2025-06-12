import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Box, Text } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
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
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
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

const DemoBox = ({ children }: { children: React.ReactNode }) => (
  <Box
    p={4}
    backgroundColor={10}
    borderRadius="md"
    minWidth="100px"
    textAlign="center"
  >
    <Text color="inverse" weight="medium">
      {children}
    </Text>
  </Box>
);

export const Default: Story = {
  args: {
    gap: 3,
    p: 4,
    backgroundColor: 2,
    borderRadius: 'lg',
    children: (
      <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
      </>
    ),
  },
};

export const DirectionColumn: Story = {
  args: {
    direction: 'column',
    gap: 3,
    p: 4,
    backgroundColor: 2,
    borderRadius: 'lg',
    children: (
      <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
      </>
    ),
  },
};

export const AlignmentAndJustification: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={6}>
      <Box>
        <Text size="lg" weight="semibold" mb={2}>
          Align: center, Justify: between
        </Text>
        <Flex
          align="center"
          justify="between"
          p={4}
          backgroundColor={2}
          borderRadius="lg"
          minHeight="100px"
          maxWidth="400px"
        >
          <DemoBox>Start</DemoBox>
          <DemoBox>End</DemoBox>
        </Flex>
      </Box>

      <Box>
        <Text size="lg" weight="semibold" mb={2}>
          Align: end, Justify: center
        </Text>
        <Flex
          align="end"
          justify="center"
          p={4}
          backgroundColor={2}
          borderRadius="lg"
          minHeight="100px"
          maxWidth="400px"
        >
          <Box p={2} backgroundColor={10} borderRadius="md">
            <Text color="inverse">Short</Text>
          </Box>
          <Box p={4} backgroundColor={10} borderRadius="md">
            <Text color="inverse">Tall</Text>
          </Box>
          <Box p={3} backgroundColor={10} borderRadius="md">
            <Text color="inverse">Medium</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  ),
};

export const Wrapping: Story = {
  args: {
    wrap: 'wrap',
    gap: 3,
    p: 4,
    backgroundColor: 2,
    borderRadius: 'lg',
    maxWidth: '400px',
    children: (
      <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
        <DemoBox>Item 4</DemoBox>
        <DemoBox>Item 5</DemoBox>
      </>
    ),
  },
};

export const ResponsiveDirection: Story = {
  args: {
    direction: { mobile: 'column', tablet: 'row' },
    gap: 3,
    p: 4,
    backgroundColor: 2,
    borderRadius: 'lg',
    children: (
      <>
        <Box flex="1" p={4} backgroundColor={10} borderRadius="md">
          <Text color="inverse">Flex 1</Text>
        </Box>
        <Box flex="1" p={4} backgroundColor={10} borderRadius="md">
          <Text color="inverse">Flex 2</Text>
        </Box>
      </>
    ),
  },
};

export const ComplexLayout: Story = {
  render: () => (
    <Flex direction="column" gap={4} p={6} backgroundColor={1} borderRadius="xl">
      <Flex justify="between" align="center">
        <Text size="2xl" weight="bold">Dashboard</Text>
        <Flex gap={2}>
          <Box p={2} backgroundColor={3} borderRadius="md">
            <Text size="sm">Settings</Text>
          </Box>
          <Box p={2} backgroundColor={3} borderRadius="md">
            <Text size="sm">Profile</Text>
          </Box>
        </Flex>
      </Flex>
      
      <Flex gap={4} wrap="wrap">
        <Flex direction="column" gap={3} flex="1" minWidth="200px">
          <Box p={4} backgroundColor={2} borderRadius="lg">
            <Text weight="semibold" mb={2}>Statistics</Text>
            <Text size="3xl" weight="bold">1,234</Text>
            <Text size="sm" color={10}>+12% from last week</Text>
          </Box>
          <Box p={4} backgroundColor={2} borderRadius="lg">
            <Text weight="semibold" mb={2}>Revenue</Text>
            <Text size="3xl" weight="bold">$5,678</Text>
            <Text size="sm" color={10}>+8% from last week</Text>
          </Box>
        </Flex>
        
        <Box flex="2" style={{ minWidth: '300px' }} p={4} backgroundColor={2} borderRadius="lg">
          <Text weight="semibold" mb={3}>Recent Activity</Text>
          <Flex direction="column" gap={2}>
            <Flex justify="between" p={2} backgroundColor={3} borderRadius="md">
              <Text>User signup</Text>
              <Text size="sm" color={11}>2 min ago</Text>
            </Flex>
            <Flex justify="between" p={2} backgroundColor={3} borderRadius="md">
              <Text>New order</Text>
              <Text size="sm" color={11}>5 min ago</Text>
            </Flex>
            <Flex justify="between" p={2} backgroundColor={3} borderRadius="md">
              <Text>Payment received</Text>
              <Text size="sm" color={11}>12 min ago</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  ),
};
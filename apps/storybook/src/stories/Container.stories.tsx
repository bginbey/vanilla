import type { Meta, StoryObj } from '@storybook/react';
import { Container, Box, Text } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['1', '2', '3', '4'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => (
  <Box p={6} backgroundColor={2} borderRadius="lg">
    <Text size="2xl" weight="bold" mb={3}>
      Container Content
    </Text>
    <Text color={11} mb={4}>
      This content is constrained by the container's max-width. The container 
      provides consistent horizontal padding and centers the content by default.
    </Text>
    <Box display="flex" gap={3}>
      <Box flex="1" p={4} backgroundColor={3} borderRadius="md">
        <Text weight="semibold">Feature 1</Text>
        <Text size="sm" color={11} mt={1}>
          Lorem ipsum dolor sit amet
        </Text>
      </Box>
      <Box flex="1" p={4} backgroundColor={3} borderRadius="md">
        <Text weight="semibold">Feature 2</Text>
        <Text size="sm" color={11} mt={1}>
          Consectetur adipiscing elit
        </Text>
      </Box>
      <Box flex="1" p={4} backgroundColor={3} borderRadius="md">
        <Text weight="semibold">Feature 3</Text>
        <Text size="sm" color={11} mt={1}>
          Sed do eiusmod tempor
        </Text>
      </Box>
    </Box>
  </Box>
);

export const Default: Story = {
  args: {
    children: <DemoContent />,
  },
};

export const Sizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={6} p={6}>
      <Box>
        <Text size="lg" weight="semibold" mb={2}>
          Size 1 (640px max-width)
        </Text>
        <Box backgroundColor={1} p={1} borderRadius="lg">
          <Container size="1">
            <Box p={4} backgroundColor={2} borderRadius="md">
              <Text>Smallest container size</Text>
            </Box>
          </Container>
        </Box>
      </Box>

      <Box>
        <Text size="lg" weight="semibold" mb={2}>
          Size 2 (768px max-width)
        </Text>
        <Box backgroundColor={1} p={1} borderRadius="lg">
          <Container size="2">
            <Box p={4} backgroundColor={2} borderRadius="md">
              <Text>Small container size</Text>
            </Box>
          </Container>
        </Box>
      </Box>

      <Box>
        <Text size="lg" weight="semibold" mb={2}>
          Size 3 (1024px max-width)
        </Text>
        <Box backgroundColor={1} p={1} borderRadius="lg">
          <Container size="3">
            <Box p={4} backgroundColor={2} borderRadius="md">
              <Text>Medium container size</Text>
            </Box>
          </Container>
        </Box>
      </Box>

      <Box>
        <Text size="lg" weight="semibold" mb={2}>
          Size 4 (1280px max-width - default)
        </Text>
        <Box backgroundColor={1} p={1} borderRadius="lg">
          <Container size="4">
            <Box p={4} backgroundColor={2} borderRadius="md">
              <Text>Large container size (default)</Text>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  ),
};

export const Alignment: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={6} p={6} width="100%">
      <Box>
        <Text size="lg" weight="semibold" mb={2}>
          Left aligned
        </Text>
        <Box backgroundColor={1} p={2} borderRadius="lg" width="100%">
          <Container size="2" align="left">
            <Box p={4} backgroundColor={2} borderRadius="md">
              <Text>This container is left-aligned</Text>
            </Box>
          </Container>
        </Box>
      </Box>

      <Box>
        <Text size="lg" weight="semibold" mb={2}>
          Center aligned (default)
        </Text>
        <Box backgroundColor={1} p={2} borderRadius="lg" width="100%">
          <Container size="2" align="center">
            <Box p={4} backgroundColor={2} borderRadius="md">
              <Text>This container is center-aligned</Text>
            </Box>
          </Container>
        </Box>
      </Box>

      <Box>
        <Text size="lg" weight="semibold" mb={2}>
          Right aligned
        </Text>
        <Box backgroundColor={1} p={2} borderRadius="lg" width="100%">
          <Container size="2" align="right">
            <Box p={4} backgroundColor={2} borderRadius="md">
              <Text>This container is right-aligned</Text>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  ),
};

export const RealWorldExample: Story = {
  render: () => (
    <Box backgroundColor={1} minHeight="100vh">
      {/* Navigation */}
      <Box backgroundColor={2} borderBottom="1px solid" borderColor={6} py={4}>
        <Container>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Text size="xl" weight="bold">My Website</Text>
            <Box display="flex" gap={4}>
              <Text>Home</Text>
              <Text>About</Text>
              <Text>Services</Text>
              <Text>Contact</Text>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Hero Section */}
      <Container>
        <Box py={20} textAlign="center">
          <Text size="5xl" weight="bold" mb={4}>
            Welcome to Our Site
          </Text>
          <Text size="xl" color={11} mb={6}>
            Build amazing experiences with our design system
          </Text>
          <Box display="flex" gap={3} justifyContent="center">
            <Box px={6} py={3} backgroundColor={10} color="white" borderRadius="lg">
              <Text weight="medium">Get Started</Text>
            </Box>
            <Box px={6} py={3} backgroundColor={3} borderRadius="lg">
              <Text weight="medium">Learn More</Text>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Features Section */}
      <Box backgroundColor={2} py={16}>
        <Container>
          <Text size="3xl" weight="bold" textAlign="center" mb={8}>
            Features
          </Text>
          <Box display="grid" gridTemplateColumns={{ mobile: '1', tablet: '3' }} gap={6}>
            <Box p={6} backgroundColor={1} borderRadius="lg">
              <Text size="xl" weight="semibold" mb={2}>Fast</Text>
              <Text color={11}>Lightning-fast performance with zero runtime CSS</Text>
            </Box>
            <Box p={6} backgroundColor={1} borderRadius="lg">
              <Text size="xl" weight="semibold" mb={2}>Flexible</Text>
              <Text color={11}>Fully customizable components with design tokens</Text>
            </Box>
            <Box p={6} backgroundColor={1} borderRadius="lg">
              <Text size="xl" weight="semibold" mb={2}>Accessible</Text>
              <Text color={11}>Built with accessibility in mind from the ground up</Text>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  ),
};
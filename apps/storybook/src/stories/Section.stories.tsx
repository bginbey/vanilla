import type { Meta, StoryObj } from '@storybook/react';
import { Section, Box, Text, Container } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Layout/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['1', '2', '3', '4'],
    },
    as: {
      control: 'select',
      options: ['section', 'div', 'article', 'aside', 'main'],
    },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundColor: 2,
    children: (
      <Container>
        <Text size="2xl" weight="bold">
          Default Section (size 3)
        </Text>
        <Text color={11} mt={2}>
          Sections provide consistent vertical padding for page content.
        </Text>
      </Container>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <Box>
      <Section size="1" backgroundColor={1}>
        <Container>
          <Text size="lg" weight="semibold">Size 1 Section</Text>
          <Text color={11}>Smallest vertical padding (py: 4 = 1rem)</Text>
        </Container>
      </Section>

      <Section size="2" backgroundColor={2}>
        <Container>
          <Text size="lg" weight="semibold">Size 2 Section</Text>
          <Text color={11}>Small vertical padding (py: 8 = 2rem)</Text>
        </Container>
      </Section>

      <Section size="3" backgroundColor={3}>
        <Container>
          <Text size="lg" weight="semibold">Size 3 Section (default)</Text>
          <Text color={11}>Medium vertical padding (py: 12 = 3rem)</Text>
        </Container>
      </Section>

      <Section size="4" backgroundColor={4}>
        <Container>
          <Text size="lg" weight="semibold">Size 4 Section</Text>
          <Text color={11}>Large vertical padding (py: 16 = 4rem)</Text>
        </Container>
      </Section>
    </Box>
  ),
};

export const AlternatingSections: Story = {
  render: () => (
    <Box>
      <Section backgroundColor={1}>
        <Container>
          <Text size="3xl" weight="bold" mb={4}>
            Hero Section
          </Text>
          <Text size="lg" color={11}>
            This is a hero section with default padding. It provides a good amount 
            of breathing room for important content.
          </Text>
        </Container>
      </Section>

      <Section backgroundColor={2}>
        <Container>
          <Text size="2xl" weight="bold" mb={4}>
            Features Section
          </Text>
          <Box display="grid" gridTemplateColumns={{ mobile: '1', tablet: '3' }} gap={4}>
            <Box p={4} backgroundColor={3} borderRadius="lg">
              <Text weight="semibold">Feature 1</Text>
            </Box>
            <Box p={4} backgroundColor={3} borderRadius="lg">
              <Text weight="semibold">Feature 2</Text>
            </Box>
            <Box p={4} backgroundColor={3} borderRadius="lg">
              <Text weight="semibold">Feature 3</Text>
            </Box>
          </Box>
        </Container>
      </Section>

      <Section backgroundColor={1}>
        <Container>
          <Text size="2xl" weight="bold" mb={4}>
            About Section
          </Text>
          <Text color={11}>
            Another section with alternating background color to create visual separation.
          </Text>
        </Container>
      </Section>
    </Box>
  ),
};

export const ResponsiveSizing: Story = {
  args: {
    size: { mobile: '2', tablet: '3', desktop: '4' },
    backgroundColor: 2,
    children: (
      <Container>
        <Text size="2xl" weight="bold">
          Responsive Section Padding
        </Text>
        <Text color={11} mt={2}>
          This section has different padding at different breakpoints:
        </Text>
        <Box mt={3}>
          <Text>• Mobile: Size 2 (py: 8)</Text>
          <Text>• Tablet: Size 3 (py: 12)</Text>
          <Text>• Desktop: Size 4 (py: 16)</Text>
        </Box>
      </Container>
    ),
  },
};

export const FullPageExample: Story = {
  render: () => (
    <Box>
      {/* Hero Section */}
      <Section size="4" backgroundColor={10} as="header">
        <Container>
          <Box textAlign="center" color="white">
            <Text size="5xl" weight="bold" mb={4}>
              Welcome to Our Platform
            </Text>
            <Text size="xl" mb={6} style={{ opacity: 0.9 }}>
              Build amazing products with our design system
            </Text>
            <Box display="flex" gap={3} justifyContent="center">
              <Box px={6} py={3} backgroundColor={1} color={10} borderRadius="lg">
                <Text weight="medium">Get Started</Text>
              </Box>
              <Box 
                px={6} 
                py={3} 
                backgroundColor="transparent" 
                color="white" 
                borderRadius="lg"
                style={{ border: '2px solid white' }}
              >
                <Text weight="medium">Learn More</Text>
              </Box>
            </Box>
          </Box>
        </Container>
      </Section>

      {/* Features Section */}
      <Section backgroundColor={1}>
        <Container>
          <Text size="3xl" weight="bold" textAlign="center" mb={8}>
            Why Choose Us
          </Text>
          <Box display="grid" gridTemplateColumns={{ mobile: '1', tablet: '3' }} gap={6}>
            <Box textAlign="center">
              <Box 
                backgroundColor={10} 
                borderRadius="full" 
                style={{ width: '64px', height: '64px', marginLeft: 'auto', marginRight: 'auto' }} 
                mb={4}
              />
              <Text size="xl" weight="semibold" mb={2}>Fast</Text>
              <Text color={11}>Lightning-fast performance</Text>
            </Box>
            <Box textAlign="center">
              <Box 
                backgroundColor={10} 
                borderRadius="full" 
                style={{ width: '64px', height: '64px', marginLeft: 'auto', marginRight: 'auto' }} 
                mb={4}
              />
              <Text size="xl" weight="semibold" mb={2}>Secure</Text>
              <Text color={11}>Enterprise-grade security</Text>
            </Box>
            <Box textAlign="center">
              <Box 
                backgroundColor={10} 
                borderRadius="full" 
                style={{ width: '64px', height: '64px', marginLeft: 'auto', marginRight: 'auto' }} 
                mb={4}
              />
              <Text size="xl" weight="semibold" mb={2}>Scalable</Text>
              <Text color={11}>Grows with your business</Text>
            </Box>
          </Box>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section size="4" backgroundColor={2}>
        <Container size="2">
          <Box textAlign="center">
            <Text size="3xl" weight="bold" mb={4}>
              Ready to Get Started?
            </Text>
            <Text size="lg" color={11} mb={6}>
              Join thousands of developers building with our design system
            </Text>
            <Box px={8} py={4} backgroundColor={10} color="white" borderRadius="lg" display="inline-block">
              <Text size="lg" weight="medium">Start Building Today</Text>
            </Box>
          </Box>
        </Container>
      </Section>

      {/* Footer */}
      <Section size="2" backgroundColor={12} as="footer">
        <Container>
          <Box textAlign="center" color={1}>
            <Text>© 2025 Your Company. All rights reserved.</Text>
          </Box>
        </Container>
      </Section>
    </Box>
  ),
};
import type { Meta, StoryObj } from '@storybook/react';
import { Grid, Box, Text } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    columns: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '12'],
    },
    rows: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6'],
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

const GridItem = ({ children }: { children: React.ReactNode }) => (
  <Box p={4} backgroundColor={10} borderRadius="md" textAlign="center">
    <Text color="inverse" weight="medium">
      {children}
    </Text>
  </Box>
);

export const Default: Story = {
  args: {
    columns: '3',
    gap: 3,
    p: 4,
    backgroundColor: 2,
    borderRadius: 'lg',
    children: (
      <>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
      </>
    ),
  },
};

export const CustomColumns: Story = {
  args: {
    columns: '1fr 2fr 1fr',
    gap: 3,
    p: 4,
    backgroundColor: 2,
    borderRadius: 'lg',
    children: (
      <>
        <GridItem>1fr</GridItem>
        <GridItem>2fr (wider)</GridItem>
        <GridItem>1fr</GridItem>
      </>
    ),
  },
};

export const ResponsiveGrid: Story = {
  args: {
    columns: { mobile: '1', tablet: '2', desktop: '4' },
    gap: 3,
    p: 4,
    backgroundColor: 2,
    borderRadius: 'lg',
    children: (
      <>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
        <GridItem>7</GridItem>
        <GridItem>8</GridItem>
      </>
    ),
  },
};

export const AutoFitGrid: Story = {
  args: {
    columns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 3,
    p: 4,
    backgroundColor: 2,
    borderRadius: 'lg',
    children: (
      <>
        <GridItem>Auto</GridItem>
        <GridItem>Fit</GridItem>
        <GridItem>Grid</GridItem>
        <GridItem>Items</GridItem>
        <GridItem>Responsive</GridItem>
      </>
    ),
  },
};

export const GridWithRows: Story = {
  args: {
    columns: '3',
    rows: 'auto 200px auto',
    gap: 3,
    p: 4,
    backgroundColor: 2,
    borderRadius: 'lg',
    children: (
      <>
        <Box p={3} backgroundColor={10} borderRadius="md">
          <Text color="inverse">Auto height</Text>
        </Box>
        <Box p={3} backgroundColor={10} borderRadius="md">
          <Text color="inverse">Auto height</Text>
        </Box>
        <Box p={3} backgroundColor={10} borderRadius="md">
          <Text color="inverse">Auto height</Text>
        </Box>
        <Box p={3} backgroundColor={10} borderRadius="md" height="100%">
          <Text color="inverse">200px row</Text>
        </Box>
        <Box p={3} backgroundColor={10} borderRadius="md" height="100%">
          <Text color="inverse">200px row</Text>
        </Box>
        <Box p={3} backgroundColor={10} borderRadius="md" height="100%">
          <Text color="inverse">200px row</Text>
        </Box>
        <Box p={3} backgroundColor={10} borderRadius="md">
          <Text color="inverse">Auto height</Text>
        </Box>
        <Box p={3} backgroundColor={10} borderRadius="md">
          <Text color="inverse">Auto height</Text>
        </Box>
        <Box p={3} backgroundColor={10} borderRadius="md">
          <Text color="inverse">Auto height</Text>
        </Box>
      </>
    ),
  },
};

export const DashboardGrid: Story = {
  render: () => (
    <Grid
      columns="repeat(12, 1fr)"
      rows="auto 1fr auto"
      gap={4}
      p={6}
      backgroundColor={1}
      borderRadius="xl"
      minHeight="600px"
      style={{ width: '800px' }}
    >
      {/* Header - full width */}
      <Box 
        style={{ gridColumn: '1 / -1' }}
        p={4}
        backgroundColor={2}
        borderRadius="lg"
      >
        <Text size="2xl" weight="bold">Dashboard Header</Text>
      </Box>
      
      {/* Sidebar - 3 columns */}
      <Box 
        style={{ gridColumn: 'span 3', gridRow: '2' }}
        p={4}
        backgroundColor={2}
        borderRadius="lg"
      >
        <Text weight="semibold" mb={3}>Sidebar</Text>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box p={2} backgroundColor={3} borderRadius="md">
            <Text>Menu Item 1</Text>
          </Box>
          <Box p={2} backgroundColor={3} borderRadius="md">
            <Text>Menu Item 2</Text>
          </Box>
          <Box p={2} backgroundColor={3} borderRadius="md">
            <Text>Menu Item 3</Text>
          </Box>
        </Box>
      </Box>
      
      {/* Main content - 9 columns */}
      <Box 
        style={{ gridColumn: 'span 9', gridRow: '2' }}
        p={4}
        backgroundColor={2}
        borderRadius="lg"
      >
        <Text weight="semibold" mb={3}>Main Content</Text>
        <Grid columns="3" gap={3}>
          <Box p={3} backgroundColor={3} borderRadius="md">
            <Text weight="medium">Card 1</Text>
            <Text size="2xl" weight="bold" mt={2}>123</Text>
          </Box>
          <Box p={3} backgroundColor={3} borderRadius="md">
            <Text weight="medium">Card 2</Text>
            <Text size="2xl" weight="bold" mt={2}>456</Text>
          </Box>
          <Box p={3} backgroundColor={3} borderRadius="md">
            <Text weight="medium">Card 3</Text>
            <Text size="2xl" weight="bold" mt={2}>789</Text>
          </Box>
        </Grid>
      </Box>
      
      {/* Footer - full width */}
      <Box 
        style={{ gridColumn: '1 / -1' }}
        p={4}
        backgroundColor={2}
        borderRadius="lg"
      >
        <Text>Footer content</Text>
      </Box>
    </Grid>
  ),
};

export const ImageGallery: Story = {
  render: () => (
    <Grid
      columns="repeat(auto-fill, minmax(150px, 1fr))"
      gap={2}
      p={4}
      backgroundColor={2}
      borderRadius="lg"
      maxWidth="600px"
    >
      {Array.from({ length: 12 }, (_, i) => (
        <Box
          key={i}
          backgroundColor={10}
          borderRadius="md"
          style={{ aspectRatio: '1 / 1' }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="inverse" weight="bold" size="2xl">
            {i + 1}
          </Text>
        </Box>
      ))}
    </Grid>
  ),
};
import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconProvider, Button, Box, Text } from '@beauginbey/vanilla-components';

// Mock icons for demonstration
const IconHome = (props: any) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
};

const IconSearch = (props: any) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
};

const IconHeart = (props: any) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};

const IconSettings = (props: any) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m20.22-6.22l-4.24 4.24m-9.96 0L2.78 7.78m17.44 12.44l-4.24-4.24m-9.96 0L2.78 16.22" />
    </svg>
  );
};

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false,
      description: 'The icon component to render',
    },
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the icon',
    },
    color: {
      control: { type: 'select' },
      options: ['inherit', 'current', 'primary', 'secondary', 'tertiary', 'error', 'warning', 'success', 'info'],
      description: 'Color of the icon',
    },
    stroke: {
      control: { type: 'number', min: 0.5, max: 3, step: 0.5 },
      description: 'Stroke width for the icon',
    },
    label: {
      control: 'text',
      description: 'Accessible label for the icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: IconHome,
  },
};

export const Sizes: Story = {
  render: () => (
    <Box display="flex" gap={3} alignItems="center">
      <Icon icon={IconHeart} size="xs" color="error" />
      <Icon icon={IconHeart} size="sm" color="error" />
      <Icon icon={IconHeart} size="md" color="error" />
      <Icon icon={IconHeart} size="lg" color="error" />
      <Icon icon={IconHeart} size="xl" color="error" />
    </Box>
  ),
};

export const Colors: Story = {
  render: () => (
    <Box display="flex" gap={3} alignItems="center">
      <Icon icon={IconHeart} color="primary" />
      <Icon icon={IconHeart} color="secondary" />
      <Icon icon={IconHeart} color="tertiary" />
      <Icon icon={IconHeart} color="error" />
      <Icon icon={IconHeart} color="warning" />
      <Icon icon={IconHeart} color="success" />
      <Icon icon={IconHeart} color="info" />
    </Box>
  ),
};

export const SemanticColors: Story = {
  render: () => (
    <Box display="flex" gap={3} alignItems="center" flexDirection="column">
      <Box display="flex" gap={3} alignItems="center">
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          <Icon icon={IconHome} color="primary" size="lg" />
          <Text size="sm">primary</Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          <Icon icon={IconHome} color="secondary" size="lg" />
          <Text size="sm">secondary</Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          <Icon icon={IconHome} color="tertiary" size="lg" />
          <Text size="sm">tertiary</Text>
        </Box>
      </Box>
      <Box display="flex" gap={3} alignItems="center">
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          <Icon icon={IconHeart} color="error" size="lg" />
          <Text size="sm">error</Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          <Icon icon={IconSettings} color="warning" size="lg" />
          <Text size="sm">warning</Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          <Icon icon={IconSearch} color="success" size="lg" />
          <Text size="sm">success</Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          <Icon icon={IconHome} color="info" size="lg" />
          <Text size="sm">info</Text>
        </Box>
      </Box>
    </Box>
  ),
};

export const CustomSize: Story = {
  render: () => (
    <Box display="flex" gap={3} alignItems="center">
      <Icon icon={IconHome} size={40} />
      <Icon icon={IconHome} size="3rem" />
      <Icon icon={IconHome} size={64} />
    </Box>
  ),
};

export const WithButtons: Story = {
  render: () => (
    <Box display="flex" gap={3} flexDirection="column">
      <Box display="flex" gap={2}>
        <Button leftIcon={IconSearch}>Search</Button>
        <Button rightIcon={IconHeart} variant="outline">
          Favorite
        </Button>
        <Button leftIcon={IconHome} rightIcon={IconSettings} variant="ghost">
          Dashboard
        </Button>
      </Box>
      <Box display="flex" gap={2}>
        <Button size="sm" aria-label="Search">
          <Icon icon={IconSearch} />
        </Button>
        <Button variant="outline" aria-label="Favorite">
          <Icon icon={IconHeart} />
        </Button>
        <Button variant="ghost" aria-label="Settings">
          <Icon icon={IconSettings} />
        </Button>
      </Box>
    </Box>
  ),
};

export const WithProvider: Story = {
  render: () => (
    <IconProvider size="lg" color="info" stroke={1.5}>
      <Box display="flex" gap={3} alignItems="center">
        <Icon icon={IconHome} />
        <Icon icon={IconSearch} />
        <Icon icon={IconHeart} />
        <Icon icon={IconSettings} />
        <Icon icon={IconHeart} color="error" size="xl" />
      </Box>
    </IconProvider>
  ),
};

export const Accessibility: Story = {
  render: () => (
    <Box display="flex" gap={4} flexDirection="column">
      <Box>
        <Text size="sm" color="secondary" mb={2}>
          Decorative icon (no label):
        </Text>
        <Icon icon={IconHeart} color="error" />
      </Box>
      <Box>
        <Text size="sm" color="secondary" mb={2}>
          Meaningful icon (with label):
        </Text>
        <Icon icon={IconHeart} color="error" label="Add to favorites" />
      </Box>
    </Box>
  ),
};

export const StrokeWidth: Story = {
  render: () => (
    <Box display="flex" gap={3} alignItems="center">
      <Icon icon={IconHeart} size="xl" stroke={0.5} />
      <Icon icon={IconHeart} size="xl" stroke={1} />
      <Icon icon={IconHeart} size="xl" stroke={1.5} />
      <Icon icon={IconHeart} size="xl" stroke={2} />
      <Icon icon={IconHeart} size="xl" stroke={2.5} />
      <Icon icon={IconHeart} size="xl" stroke={3} />
    </Box>
  ),
};
import type { Meta, StoryObj } from '@storybook/react';
import { Theme, Button, Box, Text, Input, Select, Checkbox, Radio, Switch } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Theme',
  component: Theme,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    accentColor: {
      control: 'select',
      options: ['blue', 'green', 'red', 'yellow', 'orange', 'purple'],
    },
    grayColor: {
      control: 'select',
      options: ['gray'],
    },
    appearance: {
      control: 'select',
      options: ['light', 'dark', 'inherit'],
    },
    panelBackground: {
      control: 'select',
      options: ['solid', 'translucent'],
    },
    scaling: {
      control: 'select',
      options: ['90%', '95%', '100%', '105%', '110%'],
    },
    radius: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large', 'full'],
    },
    highContrast: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Theme>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => (
  <Box p={8}>
    <Box mb={8}>
      <Box mb={4}>
        <Text size="4xl" weight="bold">
          Theme Component Demo
        </Text>
      </Box>
      <Box mb={6}>
        <Text size="lg" color="secondary">
          Explore how different theme settings affect the appearance of components.
        </Text>
      </Box>
    </Box>

    <Box display="flex" flexDirection="column" gap={8}>
      {/* Buttons Section */}
      <Box>
        <Box mb={4}>
          <Text size="2xl" weight="semibold">
            Buttons
          </Text>
        </Box>
        <Box display="flex" gap={3}>
          <Button variant="solid">Solid Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </Box>
      </Box>

      {/* Form Elements Section */}
      <Box>
        <Box mb={4}>
          <Text size="2xl" weight="semibold">
            Form Elements
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" gap={4} maxWidth="400px">
          <Input placeholder="Enter some text..." />
          <Select>
            <option>Choose an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </Select>
          <Box display="flex" gap={4}>
            <Checkbox defaultChecked label="Checkbox" />
            <Radio name="demo" defaultChecked label="Radio 1" />
            <Radio name="demo" label="Radio 2" />
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Switch defaultChecked />
            <Text>Toggle Switch</Text>
          </Box>
        </Box>
      </Box>

      {/* Color Scales */}
      <Box>
        <Box mb={4}>
          <Text size="2xl" weight="semibold">
            Color Scale Demo
          </Text>
        </Box>
        <Box display="flex" gap={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((step) => (
            <Box
              key={step}
              width="40px"
              height="40px"
              borderRadius="md"
              style={{
                backgroundColor: `var(--accent-${step})`,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Typography Scaling */}
      <Box>
        <Box mb={4}>
          <Text size="2xl" weight="semibold">
            Typography Scaling
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <Text size="xs">Extra Small Text (xs)</Text>
          <Text size="sm">Small Text (sm)</Text>
          <Text size="base">Base Text (base)</Text>
          <Text size="lg">Large Text (lg)</Text>
          <Text size="xl">Extra Large Text (xl)</Text>
          <Text size="2xl">2XL Text</Text>
          <Text size="3xl">3XL Text</Text>
        </Box>
      </Box>
    </Box>
  </Box>
);

export const Default: Story = {
  args: {
    accentColor: 'blue',
    grayColor: 'gray',
    appearance: 'light',
    panelBackground: 'solid',
    scaling: '100%',
    radius: 'medium',
    highContrast: false,
    children: <DemoContent />,
  },
};

export const AccentColors: Story = {
  render: () => (
    <Box display="flex" flexDirection="column">
      {(['blue', 'green', 'red', 'yellow', 'orange', 'purple'] as const).map((color) => (
        <Theme key={color} accentColor={color} asChild>
          <Box p={6} borderBottom="1px solid" borderColor={6}>
            <Box mb={3}>
              <Text size="lg" weight="semibold">
                Accent Color: {color}
              </Text>
            </Box>
            <Box display="flex" gap={3}>
              <Button size="sm">Primary</Button>
              <Button variant="outline" size="sm">Outline</Button>
              <Button variant="ghost" size="sm">Ghost</Button>
            </Box>
          </Box>
        </Theme>
      ))}
    </Box>
  ),
};

export const ScalingOptions: Story = {
  render: () => (
    <Box display="flex" flexDirection="column">
      {(['90%', '95%', '100%', '105%', '110%'] as const).map((scale) => (
        <Theme key={scale} scaling={scale} asChild>
          <Box p={6} borderBottom="1px solid" borderColor={6}>
            <Box mb={3}>
              <Text size="lg" weight="semibold">
                Scaling: {scale}
              </Text>
            </Box>
            <Box display="flex" gap={3} alignItems="center">
              <Button size="sm">Button</Button>
              <Button size="md">Medium Button</Button>
              <Button size="lg">Large Button</Button>
              <Input placeholder="Input field" style={{ width: '200px' }} />
              <Text>Sample text</Text>
            </Box>
          </Box>
        </Theme>
      ))}
    </Box>
  ),
};

export const RadiusOptions: Story = {
  render: () => (
    <Box display="flex" flexDirection="column">
      {(['none', 'small', 'medium', 'large', 'full'] as const).map((radius) => (
        <Theme key={radius} radius={radius} asChild>
          <Box p={6} borderBottom="1px solid" borderColor={6}>
            <Box mb={3}>
              <Text size="lg" weight="semibold">
                Radius: {radius}
              </Text>
            </Box>
            <Box display="flex" gap={3}>
              <Button size="sm">Button</Button>
              <Box
                p={3}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-3)',
                }}
              >
                <Text>Panel with radius</Text>
              </Box>
            </Box>
          </Box>
        </Theme>
      ))}
    </Box>
  ),
};

export const DarkMode: Story = {
  args: {
    appearance: 'dark',
    accentColor: 'blue',
    children: <DemoContent />,
  },
};

export const HighContrast: Story = {
  args: {
    highContrast: true,
    accentColor: 'blue',
    children: <DemoContent />,
  },
};
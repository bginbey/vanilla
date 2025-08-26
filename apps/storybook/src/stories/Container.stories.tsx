import type { Meta, StoryObj } from '@storybook/react';
import { Container, Text } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
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

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '2rem', backgroundColor: 'var(--gray-3)', minHeight: '200px' }}>
        <Text>Container content - this width is constrained</Text>
      </div>
    ),
  },
};

export const Props: Story = {
  args: {
    size: '3',
    align: 'center',
    children: (
      <div style={{ padding: '3rem', backgroundColor: 'var(--gray-3)', minHeight: '300px' }}>
        <Text size="lg" weight="semibold">Interactive Container</Text>
        <Text color="secondary" style={{ marginTop: '1rem' }}>
          Adjust the size and align controls to see how the container behaves. 
          The container constrains the maximum width of its content while maintaining responsive behavior.
        </Text>
      </div>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['1', '2', '3', '4'] as const).map(size => (
        <Container key={size} size={size}>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--gray-3)', borderRadius: '8px' }}>
            <Text weight="semibold">Size {size} Container</Text>
            <Text size="sm" color="secondary">
              Max width constrained to size level {size}
            </Text>
          </div>
        </Container>
      ))}
    </div>
  ),
};
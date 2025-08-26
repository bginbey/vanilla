import type { Meta, StoryObj } from '@storybook/react';
import { Section, Container, Text } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['1', '2', '3', '4'],
    },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Container>
        <Text>Section with default padding</Text>
      </Container>
    ),
  },
};

export const Props: Story = {
  args: {
    size: '3',
    style: { backgroundColor: 'var(--gray-2)' },
    children: (
      <Container>
        <Text size="lg" weight="semibold">Interactive Section</Text>
        <Text color="secondary" style={{ marginTop: '1rem' }}>
          Adjust the size control to see different padding levels. 
          Sections provide consistent vertical spacing for page layouts.
        </Text>
      </Container>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      {(['1', '2', '3', '4'] as const).map((size, index) => (
        <Section 
          key={size} 
          size={size}
          style={{ 
            backgroundColor: index % 2 === 0 ? 'var(--gray-2)' : 'var(--gray-3)'
          }}
        >
          <Container>
            <Text weight="semibold">Section Size {size}</Text>
            <Text size="sm" color="secondary">
              This section has size {size} padding
            </Text>
          </Container>
        </Section>
      ))}
    </>
  ),
};
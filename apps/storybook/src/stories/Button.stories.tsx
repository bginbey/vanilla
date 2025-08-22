import type { Meta, StoryObj } from '@storybook/react';
import { Button, Theme } from '@beauginbey/vanilla-components';
import type { AccentColor } from '@beauginbey/vanilla-components';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    as: {
      control: 'select',
      options: ['button', 'a'],
    },
    color: {
      control: 'select',
      options: [
        'blue', 'green', 'red', 'yellow', 'orange', 'purple',
        'gold', 'bronze', 'brown', 'amber', 'tomato', 'ruby', 'crimson',
        'pink', 'plum', 'violet', 'iris', 'indigo', 'cyan', 'teal',
        'jade', 'grass', 'lime', 'mint', 'sky'
      ],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    size: 'md',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button variant="solid" disabled>
        Solid
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AsLink: Story = {
  args: {
    as: 'a',
    href: 'https://example.com',
    children: 'Link Button',
    variant: 'outline',
  },
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
        Add Item
      </Button>
      <Button variant="outline">
        Settings
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.4 18L8 16.6l4.6-4.6L8 7.4L9.4 6l6 6l-6 6Z" />
        </svg>
      </Button>
    </div>
  ),
};

// New stories for theming

export const ThemeColors: Story = {
  render: () => {
    const accentColors: AccentColor[] = [
      'blue', 'green', 'red', 'yellow', 'orange', 'purple',
      'gold', 'bronze', 'brown', 'amber', 'tomato', 'ruby', 'crimson',
      'pink', 'plum', 'violet', 'iris', 'indigo', 'cyan', 'teal',
      'jade', 'grass', 'lime', 'mint', 'sky'
    ];

    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
        width: '100%',
        maxWidth: '1200px' 
      }}>
        {accentColors.map(color => (
          <Theme key={color} accentColor={color} asChild>
            <div style={{ 
              padding: '1rem', 
              borderRadius: '8px',
              backgroundColor: 'var(--color-panel)',
              border: '1px solid var(--color-border)'
            }}>
              <h4 style={{ 
                margin: '0 0 0.5rem 0',
                color: 'var(--color-text)',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                {color}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Button variant="solid" size="sm">Solid</Button>
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="ghost" size="sm">Ghost</Button>
              </div>
            </div>
          </Theme>
        ))}
      </div>
    );
  }
};

export const ColorOverride: Story = {
  render: () => {
    return (
      <Theme>
        <div style={{ 
          padding: '2rem',
          backgroundColor: 'var(--color-background)',
          borderRadius: '8px'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Theme accent: blue</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button >Theme Color</Button>
            <Button color="crimson">Crimson</Button>
            <Button color="grass">Grass</Button>
            <Button color="amber">Amber</Button>
            <Button color="violet">Violet</Button>
          </div>
        </div>
      </Theme>
    );
  },
};

export const GrayPairing: Story = {
  render: () => {
    const pairings = [
      { accent: 'blue', gray: 'slate', label: 'Blue + Slate (auto)' },
      { accent: 'purple', gray: 'mauve', label: 'Purple + Mauve (auto)' },
      { accent: 'green', gray: 'sage', label: 'Green + Sage (auto)' },
      { accent: 'amber', gray: 'sand', label: 'Amber + Sand (auto)' },
      { accent: 'red', gray: 'gray', label: 'Red + Gray (auto)' },
    ] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {pairings.map(({ accent, gray, label }) => (
          <Theme key={accent} accentColor={accent} grayColor="auto">
            <div style={{ 
              padding: '1.5rem',
              backgroundColor: 'var(--color-panel)',
              borderRadius: '8px',
              border: '1px solid var(--color-border)'
            }}>
              <h4 style={{ 
                margin: '0 0 1rem 0',
                color: 'var(--color-text)'
              }}>
                {label}
              </h4>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Button variant="solid">Accent</Button>
                <Button variant="outline">Outline</Button>
                <div style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: '4px',
                  color: 'var(--color-text-secondary)',
                  fontSize: '14px'
                }}>
                  Gray surface
                </div>
                <div style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  color: 'var(--color-text-tertiary)',
                  fontSize: '14px'
                }}>
                  Gray border
                </div>
              </div>
            </div>
          </Theme>
        ))}
      </div>
    );
  }
};

export const HighContrast: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Theme accentColor="blue">
        <div style={{ 
          padding: '1.5rem',
          backgroundColor: 'var(--color-panel)',
          borderRadius: '8px',
          border: '1px solid var(--color-border)'
        }}>
          <h4 style={{ margin: '0 0 1rem 0' }}>Normal Contrast</h4>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>
      </Theme>
      
      <Theme accentColor="blue" highContrast>
        <div style={{ 
          padding: '1.5rem',
          backgroundColor: 'var(--color-panel)',
          borderRadius: '8px',
          border: '1px solid var(--color-border)'
        }}>
          <h4 style={{ margin: '0 0 1rem 0' }}>High Contrast</h4>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>
      </Theme>
    </div>
  ),
};

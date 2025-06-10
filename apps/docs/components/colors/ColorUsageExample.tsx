import React from 'react';
import { Box, Text, Button } from '@beauginbey/vanilla-components';

interface ExampleProps {
  step: number | number[];
  title: string;
  description: string;
  children: React.ReactNode;
}

function Example({ step, title, description, children }: ExampleProps) {
  const steps = Array.isArray(step) ? step : [step];
  
  return (
    <Box mb={8}>
      <Box mb={3}>
        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <Box
            display="flex"
            gap={1}
          >
            {steps.map(s => (
              <Box
                key={s}
                px={2}
                py={1}
                backgroundColor={2}
                borderRadius="sm"
                style={{
                  border: '1px solid var(--gray-6)',
                }}
              >
                <Text size="sm" weight="semibold" style={{ fontFamily: 'monospace' }}>
                  Step {s}
                </Text>
              </Box>
            ))}
          </Box>
          <Text size="lg" weight="semibold">
            {title}
          </Text>
        </Box>
        <Text color={11}>
          {description}
        </Text>
      </Box>
      <Box
        p={6}
        backgroundColor={1}
        borderRadius="lg"
        style={{
          border: '1px solid var(--gray-6)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export function ColorUsageExample() {
  return (
    <Box>
      {/* Steps 1-2: Backgrounds */}
      <Example
        step={[1, 2]}
        title="App & Subtle Backgrounds"
        description="Steps 1 and 2 are designed for app backgrounds and subtle component backgrounds. Step 1 is typically used for the main app background, while Step 2 provides subtle contrast."
      >
        <Box display="flex" gap={4}>
          <Box flex={1} p={4} backgroundColor={1} borderRadius="md">
            <Text size="sm" mb={2}>Step 1: App Background</Text>
            <Box p={3} backgroundColor={2} borderRadius="sm">
              <Text size="xs">Step 2: Subtle Background</Text>
            </Box>
          </Box>
        </Box>
      </Example>

      {/* Steps 3-5: Component Backgrounds */}
      <Example
        step={[3, 4, 5]}
        title="Component Backgrounds"
        description="Steps 3, 4, and 5 are for UI component backgrounds. They're designed to provide clear state changes for interactive elements."
      >
        <Box display="flex" gap={3} flexWrap="wrap">
          <Box p={3} backgroundColor={3} borderRadius="md" style={{ minWidth: '150px' }}>
            <Text size="sm">Step 3: Normal</Text>
          </Box>
          <Box p={3} backgroundColor={4} borderRadius="md" style={{ minWidth: '150px' }}>
            <Text size="sm">Step 4: Hover</Text>
          </Box>
          <Box p={3} backgroundColor={5} borderRadius="md" style={{ minWidth: '150px' }}>
            <Text size="sm">Step 5: Active/Selected</Text>
          </Box>
        </Box>
      </Example>

      {/* Steps 6-8: Borders */}
      <Example
        step={[6, 7, 8]}
        title="Borders & Separators"
        description="Steps 6, 7, and 8 are for borders. Step 6 for subtle borders, Step 7 for UI element borders, and Step 8 for strong borders and focus rings."
      >
        <Box display="flex" gap={3} flexWrap="wrap">
          <Box
            p={3}
            backgroundColor={1}
            borderRadius="md"
            style={{
              border: '1px solid var(--gray-6)',
              minWidth: '150px',
            }}
          >
            <Text size="sm">Step 6: Subtle</Text>
          </Box>
          <Box
            p={3}
            backgroundColor={1}
            borderRadius="md"
            style={{
              border: '1px solid var(--gray-7)',
              minWidth: '150px',
            }}
          >
            <Text size="sm">Step 7: UI Border</Text>
          </Box>
          <Box
            p={3}
            backgroundColor={1}
            borderRadius="md"
            style={{
              border: '2px solid var(--gray-8)',
              minWidth: '150px',
            }}
          >
            <Text size="sm">Step 8: Strong/Focus</Text>
          </Box>
        </Box>
      </Example>

      {/* Steps 9-10: Solid Colors */}
      <Example
        step={[9, 10]}
        title="Solid Colors"
        description="Steps 9 and 10 are designed for solid backgrounds. Step 9 is the purest, highest chroma color, while Step 10 is for hover states."
      >
        <Box display="flex" gap={3} flexWrap="wrap">
          <Button variant="solid">
            Step 9: Primary Action
          </Button>
          <Box
            as="button"
            px={4}
            py={2}
            style={{
              backgroundColor: 'var(--blue-10)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            Step 10: Hover State
          </Box>
        </Box>
      </Example>

      {/* Steps 11-12: Text */}
      <Example
        step={[11, 12]}
        title="Text Colors"
        description="Steps 11 and 12 are for text. Step 11 provides low-contrast text for secondary content, while Step 12 provides high-contrast text for primary content."
      >
        <Box>
          <Text size="lg" color={12} mb={2}>
            Step 12: High-contrast text for headings and primary content
          </Text>
          <Text color={11}>
            Step 11: Low-contrast text for secondary content, descriptions, and subtle UI text that doesn&apos;t need to grab attention.
          </Text>
        </Box>
      </Example>

      {/* Practical Example */}
      <Box mt={12}>
        <Text size="2xl" weight="bold" mb={6}>
          Practical Example: Card Component
        </Text>
        <Box
          p={6}
          backgroundColor={2}
          borderRadius="lg"
          style={{
            border: '1px solid var(--gray-6)',
          }}
        >
          <Box display="flex" gap={4} flexWrap="wrap">
            <Box
              flex={1}
              p={5}
              backgroundColor={1}
              borderRadius="md"
              style={{
                border: '1px solid var(--gray-7)',
                minWidth: '280px',
              }}
            >
              <Box mb={3}>
                <Text size="lg" weight="semibold" color={12}>
                  Card Title
                </Text>
                <Text size="sm" color={11}>
                  Secondary text using Step 11
                </Text>
              </Box>
              <Box mb={4}>
                <Text color={12} mb={2}>
                  This card demonstrates proper color usage across different UI elements.
                </Text>
                <Box
                  p={2}
                  backgroundColor={3}
                  borderRadius="sm"
                  style={{
                    border: '1px solid var(--gray-6)',
                  }}
                >
                  <Text size="sm" color={11}>
                    Nested content with subtle background
                  </Text>
                </Box>
              </Box>
              <Box display="flex" gap={2}>
                <Button variant="solid" size="sm">
                  Primary Action
                </Button>
                <Button variant="outline" size="sm">
                  Secondary
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
import { useState } from 'react';
import { ThemeProvider, useTheme, Button, Box, Text, Theme } from '@beauginbey/vanilla-components';

function ThemeControls() {
  const { theme, setTheme } = useTheme();
  
  const themes: Theme[] = ['light', 'cream', 'dark'];
  
  return (
    <Box display="flex" gap={4} p={4}>
      {themes.map((t) => (
        <Button
          key={t}
          variant={theme === t ? 'solid' : 'outline'}
          onClick={() => setTheme(t)}
          size="sm"
        >
          {t.charAt(0).toUpperCase() + t.slice(1)} Theme
        </Button>
      ))}
    </Box>
  );
}

function DemoContent() {
  return (
    <Box p={8}>
      <Text size="4xl" weight="bold" as="h1">
        Vanilla Design System
      </Text>
      <Text size="lg" color="secondary" mt={4} as="p" variant="body">
        Experience our beautiful theming system with smooth transitions between light, cream, and dark themes.
      </Text>
      
      <Box mt={8} display="flex" gap={4}>
        <Button variant="solid">Primary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </Box>
      
      <Box mt={8} p={6} backgroundColor="secondary" borderRadius="lg" boxShadow="base">
        <Text size="2xl" weight="semibold" mb={4}>
          Card Component
        </Text>
        <Text color="tertiary">
          This card demonstrates how our semantic color tokens adapt across different themes.
        </Text>
      </Box>
      
      <Box mt={8} display="flex" gap={4}>
        <Box p={4} backgroundColor="tertiary" borderRadius="md">
          <Text variant="label">Label Text</Text>
        </Box>
        <Box p={4} backgroundColor="primary" border borderRadius="md">
          <Text>
            Code: <Text as="span" variant="code">npm install @beauginbey/vanilla-components</Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default function ThemeExample() {
  return (
    <ThemeProvider defaultTheme="light">
      <Box minHeight="100vh" backgroundColor="primary" color="primary">
        <ThemeControls />
        <DemoContent />
      </Box>
    </ThemeProvider>
  );
}
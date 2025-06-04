import { ThemeProvider, useTheme, Button, Box, Text, Theme } from '@beauginbey/vanilla-components';

function ThemeControls() {
  const { theme, setTheme } = useTheme();
  
  const themes: Theme[] = ['light', 'cream', 'dark'];
  
  return (
    <Box as="div" display="flex" gap={4} p={4}>
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
      <Box mb={8}>
        <Text as="h1" size="5xl" weight="bold">
          Theme System Demo
        </Text>
        <Box mt={4}>
          <Text as="p" size="lg" color="secondary">
            Switch between light, cream, and dark themes to see how components adapt.
          </Text>
        </Box>
      </Box>
      
      <Box display="flex" gap={4} flexDirection={{ mobile: 'column', tablet: 'row' }}>
        <Button variant="solid">Primary Button</Button>
        <Button variant="outline">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </Box>
      
      <Box mt={8} p={6} backgroundColor="secondary" borderRadius="lg" boxShadow="base">
        <Box mb={4}>
          <Text size="2xl" weight="semibold">
            Card Component
          </Text>
        </Box>
        <Text color="tertiary">
          This card demonstrates how our semantic color tokens adapt across different themes.
        </Text>
      </Box>
      
      <Box mt={8} display="flex" gap={4}>
        <Box p={4} backgroundColor="tertiary" borderRadius="md">
          <Text size="sm" weight="semibold">Label Text</Text>
        </Box>
        <Box p={4} backgroundColor="primary" borderRadius="md" style={{ border: '1px solid var(--vanilla-color-border-primary)' }}>
          <Text>
            Code: <Text as="span" size="sm" color="secondary">npm install @beauginbey/vanilla-components</Text>
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
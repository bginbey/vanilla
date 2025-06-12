import { Button, Box, Text, Flex } from '@beauginbey/vanilla-components';
import { useEffect, useState } from 'react';

function ThemeControls() {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    // Check if dark mode is currently active
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);
  
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  
  return (
    <Flex gap={4} p={4}>
      <Button
        variant="solid"
        onClick={toggleTheme}
        size="sm"
      >
        {isDark ? 'Light' : 'Dark'} Mode
      </Button>
    </Flex>
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
            Toggle between light and dark modes to see how components adapt.
          </Text>
        </Box>
      </Box>
      
      <Flex gap={4} direction={{ mobile: 'column', tablet: 'row' }}>
        <Button variant="solid">Primary Button</Button>
        <Button variant="outline">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </Flex>
      
      <Box mt={8} p={6} backgroundColor={3} borderRadius="lg" boxShadow="base">
        <Box mb={4}>
          <Text size="2xl" weight="semibold">
            Card Component
          </Text>
        </Box>
        <Text color="secondary">
          This card demonstrates how our color system adapts between light and dark modes.
        </Text>
      </Box>
      
      <Flex mt={8} gap={4}>
        <Box p={4} backgroundColor={2} borderRadius="md">
          <Text size="sm" weight="semibold">Label Text</Text>
        </Box>
        <Box p={4} backgroundColor={1} borderRadius="md" style={{ border: '1px solid var(--gray-7)' }}>
          <Text>
            Code: <Text as="span" size="sm" color="secondary">npm install @beauginbey/vanilla-components</Text>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default function ThemeExample() {
  return (
    <Box minHeight="100vh" backgroundColor={1}>
      <ThemeControls />
      <DemoContent />
    </Box>
  );
}
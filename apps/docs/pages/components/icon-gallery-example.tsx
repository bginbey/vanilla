import { Icon, Box, Text, Flex } from '@beauginbey/vanilla-components';

// Example icons

const IconCopy = (props: { width?: number | string; height?: number | string; size?: number | string; color?: string; stroke?: number; className?: string; [key: string]: any }) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );
};

const IconCheck = (props: { width?: number | string; height?: number | string; size?: number | string; color?: string; stroke?: number; className?: string; [key: string]: any }) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

export default function IconGalleryExample() {
  return (
    <Box p={6}>
      <Box mb={4}>
        <Text as="h2" size="2xl" weight="bold">
          Icon Gallery Features
        </Text>
      </Box>
      
      <Flex gap={4} flexWrap="wrap" mb={6}>
        <Flex 
          p={4} 
          borderRadius="lg" 
          backgroundColor={3}
          alignItems="center"
          gap={3}
        >
          <Icon icon={IconCopy} size="lg" color="info" />
          <Text>Click any icon to copy SVG</Text>
        </Flex>
        
        <Flex 
          p={4} 
          borderRadius="lg" 
          backgroundColor={2}
          alignItems="center"
          gap={3}
        >
          <Icon icon={IconCheck} size="lg" color="success" />
          <Text>Toast notification on copy</Text>
        </Flex>
      </Flex>
      
      <Box mb={2}>
        <Text size="lg" color="secondary">
          Features:
        </Text>
      </Box>
      <Box as="ul" pl={5}>
        <li>Search icons by name</li>
        <li>Filter by category</li>
        <li>Click to copy SVG code</li>
        <li>Responsive grid layout</li>
        <li>Toast notifications</li>
        <li>Hover effects</li>
      </Box>
    </Box>
  );
}
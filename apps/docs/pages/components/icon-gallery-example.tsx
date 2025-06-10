import { Icon, Box, Text } from '@beauginbey/vanilla-components';

// Example icons

const IconCopy = (props: React.SVGProps<SVGSVGElement>) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );
};

const IconCheck = (props: React.SVGProps<SVGSVGElement>) => {
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
      <Text as="h2" size="2xl" weight="bold" mb={4}>
        Icon Gallery Features
      </Text>
      
      <Box display="flex" gap={4} flexWrap="wrap" mb={6}>
        <Box 
          p={4} 
          borderRadius="lg" 
          backgroundColor={3}
          display="flex"
          alignItems="center"
          gap={3}
        >
          <Icon icon={IconCopy} size="lg" color="info" />
          <Text>Click any icon to copy SVG</Text>
        </Box>
        
        <Box 
          p={4} 
          borderRadius="lg" 
          backgroundColor="secondary"
          display="flex"
          alignItems="center"
          gap={3}
        >
          <Icon icon={IconCheck} size="lg" color="success" />
          <Text>Toast notification on copy</Text>
        </Box>
      </Box>
      
      <Text size="lg" color="secondary" mb={2}>
        Features:
      </Text>
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
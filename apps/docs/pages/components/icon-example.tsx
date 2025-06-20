import { Icon, IconProvider, Button, Box, Text, Flex } from '@beauginbey/vanilla-components';

// Mock icons for demonstration
const IconHome = (props: { width?: number | string; height?: number | string; size?: number | string; color?: string; stroke?: number; className?: string; [key: string]: any }) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
};

const IconSearch = (props: { width?: number | string; height?: number | string; size?: number | string; color?: string; stroke?: number; className?: string; [key: string]: any }) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
};

const IconHeart = (props: { width?: number | string; height?: number | string; size?: number | string; color?: string; stroke?: number; className?: string; [key: string]: any }) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};

const IconSettings = (props: { width?: number | string; height?: number | string; size?: number | string; color?: string; stroke?: number; className?: string; [key: string]: any }) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m20.22-6.22l-4.24 4.24m-9.96 0L2.78 7.78m17.44 12.44l-4.24-4.24m-9.96 0L2.78 16.22" />
    </svg>
  );
};

export default function IconExample() {
  return (
    <Box p={8}>
      <Box mb={6}>
        <Text as="h1" size="3xl" weight="bold">
          Icon System Demo
        </Text>
      </Box>

      {/* Basic Usage */}
      <Box mb={8}>
        <Box mb={4}>
          <Text as="h2" size="2xl" weight="semibold">
            Basic Icons
          </Text>
        </Box>
        <Flex gap={4} alignItems="center">
          <Icon icon={IconHome} />
          <Icon icon={IconSearch} size="lg" />
          <Icon icon={IconHeart} color="error" />
          <Icon icon={IconSettings} size="xl" color={9} />
        </Flex>
      </Box>

      {/* Size Variations */}
      <Box mb={8}>
        <Box mb={4}>
          <Text as="h2" size="2xl" weight="semibold">
            Size Variations
          </Text>
        </Box>
        <Flex gap={4} alignItems="center">
          <Icon icon={IconHeart} size="xs" color="error" />
          <Icon icon={IconHeart} size="sm" color="error" />
          <Icon icon={IconHeart} size="md" color="error" />
          <Icon icon={IconHeart} size="lg" color="error" />
          <Icon icon={IconHeart} size="xl" color="error" />
          <Icon icon={IconHeart} size={48} color="error" />
        </Flex>
      </Box>

      {/* Buttons with Icons */}
      <Box mb={8}>
        <Box mb={4}>
          <Text as="h2" size="2xl" weight="semibold">
            Icons in Buttons
          </Text>
        </Box>
        <Flex gap={3} flexWrap="wrap">
          <Button leftIcon={IconSearch} variant="solid">
            Search
          </Button>
          <Button rightIcon={IconHeart} variant="outline">
            Favorite
          </Button>
          <Button leftIcon={IconHome} rightIcon={IconSettings} variant="ghost">
            Dashboard
          </Button>
        </Flex>
      </Box>

      {/* Icon-only Buttons */}
      <Box mb={8}>
        <Box mb={4}>
          <Text as="h2" size="2xl" weight="semibold">
            Icon-only Buttons
          </Text>
        </Box>
        <Flex gap={3}>
          <Button variant="solid" size="sm" aria-label="Search">
            <Icon icon={IconSearch} />
          </Button>
          <Button variant="outline" aria-label="Favorite">
            <Icon icon={IconHeart} />
          </Button>
          <Button variant="ghost" aria-label="Settings">
            <Icon icon={IconSettings} />
          </Button>
        </Flex>
      </Box>

      {/* Icon Provider */}
      <Box mb={8}>
        <Box mb={4}>
          <Text as="h2" size="2xl" weight="semibold">
            Icon Provider
          </Text>
        </Box>
        <IconProvider size="lg" color="info" stroke={1.5}>
          <Flex gap={4} alignItems="center">
            <Icon icon={IconHome} />
            <Icon icon={IconSearch} />
            <Icon icon={IconHeart} />
            <Icon icon={IconSettings} />
          </Flex>
        </IconProvider>
      </Box>

      {/* Custom Styling */}
      <Box>
        <Box mb={4}>
          <Text as="h2" size="2xl" weight="semibold">
            Custom Styling
          </Text>
        </Box>
        <Flex gap={4} alignItems="center">
          <Icon
            icon={IconHome}
            size="xl"
            style={{
              backgroundColor: 'var(--blue-3)',
              padding: '8px',
              borderRadius: '8px',
            }}
          />
          <Icon
            icon={IconHeart}
            size="xl"
            color="error"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            }}
          />
          <Icon
            icon={IconSettings}
            size="xl"
            style={{
              transform: 'rotate(45deg)',
              color: 'var(--purple-9)',
            }}
          />
        </Flex>
      </Box>
    </Box>
  );
}
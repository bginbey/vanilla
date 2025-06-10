import { Icon, IconProvider, Button, Box, Text } from '@beauginbey/vanilla-components';

// Mock icons for demonstration
const IconHome = (props: any) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
};

const IconSearch = (props: any) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
};

const IconHeart = (props: any) => {
  const { stroke = 2, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} {...rest}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};

const IconSettings = (props: any) => {
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
      <Text as="h1" size="3xl" weight="bold" mb={6}>
        Icon System Demo
      </Text>

      {/* Basic Usage */}
      <Box mb={8}>
        <Text as="h2" size="2xl" weight="semibold" mb={4}>
          Basic Icons
        </Text>
        <Box display="flex" gap={4} alignItems="center">
          <Icon icon={IconHome} />
          <Icon icon={IconSearch} size="lg" />
          <Icon icon={IconHeart} color="error" />
          <Icon icon={IconSettings} size="xl" color={9} />
        </Box>
      </Box>

      {/* Size Variations */}
      <Box mb={8}>
        <Text as="h2" size="2xl" weight="semibold" mb={4}>
          Size Variations
        </Text>
        <Box display="flex" gap={4} alignItems="center">
          <Icon icon={IconHeart} size="xs" color="error" />
          <Icon icon={IconHeart} size="sm" color="error" />
          <Icon icon={IconHeart} size="md" color="error" />
          <Icon icon={IconHeart} size="lg" color="error" />
          <Icon icon={IconHeart} size="xl" color="error" />
          <Icon icon={IconHeart} size={48} color="error" />
        </Box>
      </Box>

      {/* Buttons with Icons */}
      <Box mb={8}>
        <Text as="h2" size="2xl" weight="semibold" mb={4}>
          Icons in Buttons
        </Text>
        <Box display="flex" gap={3} flexWrap="wrap">
          <Button leftIcon={IconSearch} variant="solid">
            Search
          </Button>
          <Button rightIcon={IconHeart} variant="outline">
            Favorite
          </Button>
          <Button leftIcon={IconHome} rightIcon={IconSettings} variant="ghost">
            Dashboard
          </Button>
        </Box>
      </Box>

      {/* Icon-only Buttons */}
      <Box mb={8}>
        <Text as="h2" size="2xl" weight="semibold" mb={4}>
          Icon-only Buttons
        </Text>
        <Box display="flex" gap={3}>
          <Button variant="solid" size="sm" aria-label="Search">
            <Icon icon={IconSearch} />
          </Button>
          <Button variant="outline" aria-label="Favorite">
            <Icon icon={IconHeart} />
          </Button>
          <Button variant="ghost" aria-label="Settings">
            <Icon icon={IconSettings} />
          </Button>
        </Box>
      </Box>

      {/* Icon Provider */}
      <Box mb={8}>
        <Text as="h2" size="2xl" weight="semibold" mb={4}>
          Icon Provider
        </Text>
        <IconProvider size="lg" color="info" stroke={1.5}>
          <Box display="flex" gap={4} alignItems="center">
            <Icon icon={IconHome} />
            <Icon icon={IconSearch} />
            <Icon icon={IconHeart} />
            <Icon icon={IconSettings} />
          </Box>
        </IconProvider>
      </Box>

      {/* Custom Styling */}
      <Box>
        <Text as="h2" size="2xl" weight="semibold" mb={4}>
          Custom Styling
        </Text>
        <Box display="flex" gap={4} alignItems="center">
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
        </Box>
      </Box>
    </Box>
  );
}
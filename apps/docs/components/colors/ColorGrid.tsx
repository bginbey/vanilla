import React, { useState, useEffect } from 'react';
import { Box, Text } from '@beauginbey/vanilla-components';
import { ColorScale } from './ColorScale';
import * as colors from '@beauginbey/vanilla-colors';

export function ColorGrid() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check current theme on mount
    setIsDark(document.documentElement.classList.contains('dark'));
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Group colors by type
  const grayScales = [
    { name: 'Gray', scale: isDark ? colors.grayDark : colors.gray },
    { name: 'Gray', scale: isDark ? colors.grayDarkA : colors.grayA, isAlpha: true },
  ];

  const colorScales = [
    { name: 'Blue', scale: isDark ? colors.blueDark : colors.blue },
    { name: 'Blue', scale: isDark ? colors.blueDarkA : colors.blueA, isAlpha: true },
    { name: 'Green', scale: isDark ? colors.greenDark : colors.green },
    { name: 'Green', scale: isDark ? colors.greenDarkA : colors.greenA, isAlpha: true },
    { name: 'Red', scale: isDark ? colors.redDark : colors.red },
    { name: 'Red', scale: isDark ? colors.redDarkA : colors.redA, isAlpha: true },
    { name: 'Yellow', scale: isDark ? colors.yellowDark : colors.yellow },
    { name: 'Yellow', scale: isDark ? colors.yellowDarkA : colors.yellowA, isAlpha: true },
    { name: 'Orange', scale: isDark ? colors.orangeDark : colors.orange },
    { name: 'Orange', scale: isDark ? colors.orangeDarkA : colors.orangeA, isAlpha: true },
    { name: 'Purple', scale: isDark ? colors.purpleDark : colors.purple },
    { name: 'Purple', scale: isDark ? colors.purpleDarkA : colors.purpleA, isAlpha: true },
  ];

  return (
    <Box>

      {/* Gray Scales */}
      <Box mb={8}>
        <Box mb={4}>
          <Text size="xl" weight="bold">
            Neutrals
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" gap={4}>
          {grayScales.map((colorData, index) => (
            <ColorScale
              key={`gray-${index}`}
              name={colorData.name}
              scale={colorData.scale}
              isAlpha={colorData.isAlpha}
            />
          ))}
        </Box>
      </Box>

      {/* Color Scales */}
      <Box mb={8}>
        <Text size="xl" weight="bold" mb={4}>
          Colors
        </Text>
        <Box display="flex" flexDirection="column" gap={4}>
          {colorScales.map((colorData, index) => (
            <ColorScale
              key={`${colorData.name}-${index}`}
              name={colorData.name}
              scale={colorData.scale}
              isAlpha={colorData.isAlpha}
            />
          ))}
        </Box>
      </Box>

      {/* Overlay Scales */}
      <Box>
        <Text size="xl" weight="bold" mb={4}>
          Overlays
        </Text>
        <Box display="flex" flexDirection="column" gap={4}>
          <ColorScale
            name="Black"
            scale={{
              1: 'rgba(0, 0, 0, 0.05)',
              2: 'rgba(0, 0, 0, 0.10)',
              3: 'rgba(0, 0, 0, 0.15)',
              4: 'rgba(0, 0, 0, 0.20)',
              5: 'rgba(0, 0, 0, 0.30)',
              6: 'rgba(0, 0, 0, 0.40)',
              7: 'rgba(0, 0, 0, 0.50)',
              8: 'rgba(0, 0, 0, 0.60)',
              9: 'rgba(0, 0, 0, 0.70)',
              10: 'rgba(0, 0, 0, 0.80)',
              11: 'rgba(0, 0, 0, 0.90)',
              12: 'rgba(0, 0, 0, 0.95)',
            }}
            isAlpha={true}
          />
          <ColorScale
            name="White"
            scale={{
              1: 'rgba(255, 255, 255, 0.05)',
              2: 'rgba(255, 255, 255, 0.10)',
              3: 'rgba(255, 255, 255, 0.15)',
              4: 'rgba(255, 255, 255, 0.20)',
              5: 'rgba(255, 255, 255, 0.30)',
              6: 'rgba(255, 255, 255, 0.40)',
              7: 'rgba(255, 255, 255, 0.50)',
              8: 'rgba(255, 255, 255, 0.60)',
              9: 'rgba(255, 255, 255, 0.70)',
              10: 'rgba(255, 255, 255, 0.80)',
              11: 'rgba(255, 255, 255, 0.90)',
              12: 'rgba(255, 255, 255, 0.95)',
            }}
            isAlpha={true}
          />
        </Box>
      </Box>
    </Box>
  );
}
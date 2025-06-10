import React from 'react';
import { Box, Text } from '@beauginbey/vanilla-components';
import { ColorSwatch } from './ColorSwatch';

interface ColorScaleProps {
  name: string;
  scale: Record<number, string>;
  isAlpha?: boolean;
}

export function ColorScale({ name, scale, isAlpha = false }: ColorScaleProps) {
  const colorName = name.toLowerCase();
  const cssVarPrefix = isAlpha ? `--${colorName}-a` : `--${colorName}`;

  return (
    <Box>
      <Box mb={3} display="flex" alignItems="center" gap={2}>
        <Text size="sm" weight="semibold" style={{ fontFamily: 'monospace' }}>
          {name}
        </Text>
        {isAlpha && (
          <Text size="xs" color={11} style={{ opacity: 0.7 }}>
            Alpha
          </Text>
        )}
      </Box>
      <Box
        display="grid"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2px',
        }}
      >
        {Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
          <ColorSwatch
            key={step}
            colorName={colorName}
            step={step}
            value={scale[step]}
            cssVar={`${cssVarPrefix}-${step}`}
          />
        ))}
      </Box>
    </Box>
  );
}
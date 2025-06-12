import React from 'react';
import { Box, Text, Flex, Grid } from '@beauginbey/vanilla-components';
import { ColorSwatch } from './ColorSwatch';
import type { ColorScale as ColorScaleType } from '@beauginbey/vanilla-colors';

interface ColorScaleProps {
  name: string;
  scale: ColorScaleType;
  isAlpha?: boolean;
}

export function ColorScale({ name, scale, isAlpha = false }: ColorScaleProps) {
  const colorName = name.toLowerCase();
  const cssVarPrefix = isAlpha ? `--${colorName}-a` : `--${colorName}`;

  return (
    <Box>
      <Flex mb={3} alignItems="center" gap={2}>
        <Text size="sm" weight="semibold" style={{ fontFamily: 'monospace' }}>
          {name}
        </Text>
        {isAlpha && (
          <Text size="xs" color="secondary" style={{ opacity: 0.7 }}>
            Alpha
          </Text>
        )}
      </Flex>
      <Grid
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
            value={scale[step as keyof ColorScaleType]}
            cssVar={`${cssVarPrefix}-${step}`}
          />
        ))}
      </Grid>
    </Box>
  );
}
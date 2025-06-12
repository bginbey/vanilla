import React, { useState } from 'react';
import { Box, Text } from '@beauginbey/vanilla-components';

interface ColorSwatchProps {
  colorName: string;
  step: number;
  value: string;
  cssVar: string;
  showLabel?: boolean;
}

export function ColorSwatch({ colorName, step, value, cssVar, showLabel = true }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button
        onClick={handleClick}
        style={{
          width: '100%',
          height: '48px',
          backgroundColor: `var(${cssVar})`,
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          position: 'relative',
          transition: 'transform 0.2s ease',
          outline: 'none',
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'scale(0.95)';
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label={`${colorName} step ${step}: ${value}. Click to copy.`}
      />
      
      {showLabel && (
        <Text
          size="xs"
          style={{
            marginTop: '4px',
            textAlign: 'center',
            fontFamily: 'monospace',
          }}
        >
          {step}
        </Text>
      )}

      {/* Tooltip */}
      {showTooltip && (
        <Box
          position="absolute"
          style={{
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: '8px',
            padding: '8px 12px',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            borderRadius: '6px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <div>{value}</div>
          <div style={{ opacity: 0.7 }}>{cssVar}</div>
          {copied && <div style={{ color: '#4ade80' }}>Copied!</div>}
        </Box>
      )}
    </div>
  );
}
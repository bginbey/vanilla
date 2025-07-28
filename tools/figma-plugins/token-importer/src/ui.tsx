// First thing - log that this file is being executed
console.log('UI.TSX EXECUTING - TOP OF FILE');

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './ui.css';

console.log('UI script loaded - after imports');

// Import token data
import * as vanillaColors from '@beauginbey/vanilla-colors';
import spacingTokens from '@tokens/tokens/spacing.json';
import typographyTokens from '@tokens/tokens/typography.json';
import shadowTokens from '@tokens/tokens/shadow.json';
import radiusTokens from '@tokens/tokens/radius.json';
import animationTokens from '@tokens/tokens/animation.json';

console.log('Imports loaded', { vanillaColors, spacingTokens });

function App() {
  console.log('App component rendering');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [selectedTokens, setSelectedTokens] = useState({
    colors: true,
    spacing: true,
    typography: true,
    shadows: true,
    radii: true,
    animation: true
  });

  useEffect(() => {
    // Listen for messages from the plugin
    window.onmessage = (event) => {
      const msg = event.data.pluginMessage;
      if (msg.type === 'import-complete') {
        setStatus('success');
        setLoading(false);
      } else if (msg.type === 'import-error') {
        setStatus('error');
        setLoading(false);
      }
    };
  }, []);

  const handleImport = () => {
    setLoading(true);
    setStatus('loading');

    // Prepare token data
    const tokens: any = {};

    if (selectedTokens.colors) {
      tokens.colors = {
        primitive: {
          gray: vanillaColors.gray,
          blue: vanillaColors.blue,
          green: vanillaColors.green,
          red: vanillaColors.red,
          yellow: vanillaColors.yellow,
          orange: vanillaColors.orange,
          purple: vanillaColors.purple,
        },
        primitiveDark: {
          grayDark: vanillaColors.grayDark,
          blueDark: vanillaColors.blueDark,
          greenDark: vanillaColors.greenDark,
          redDark: vanillaColors.redDark,
          yellowDark: vanillaColors.yellowDark,
          orangeDark: vanillaColors.orangeDark,
          purpleDark: vanillaColors.purpleDark,
        },
        // Semantic mappings matching the component library
        semantic: {
          // Background colors
          'background-primary': { light: 'Primitive/gray/1', dark: 'Primitive/gray/1' },
          'background-secondary': { light: 'Primitive/gray/2', dark: 'Primitive/gray/2' },
          
          // Surface colors
          'surface': { light: 'Primitive/gray/3', dark: 'Primitive/gray/3' },
          'surface-hover': { light: 'Primitive/gray/4', dark: 'Primitive/gray/4' },
          'surface-active': { light: 'Primitive/gray/5', dark: 'Primitive/gray/5' },
          
          // Text colors
          'text-primary': { light: 'Primitive/gray/12', dark: 'Primitive/gray/12' },
          'text-secondary': { light: 'Primitive/gray/11', dark: 'Primitive/gray/11' },
          'text-tertiary': { light: 'Primitive/gray/10', dark: 'Primitive/gray/10' },
          'text-disabled': { light: 'Primitive/gray/8', dark: 'Primitive/gray/8' },
          
          // Border colors
          'border-default': { light: 'Primitive/gray/6', dark: 'Primitive/gray/6' },
          'border-hover': { light: 'Primitive/gray/7', dark: 'Primitive/gray/7' },
          
          // Accent colors (using blue as default)
          'accent-base': { light: 'Primitive/blue/9', dark: 'Primitive/blue/9' },
          'accent-hover': { light: 'Primitive/blue/10', dark: 'Primitive/blue/10' },
          'accent-active': { light: 'Primitive/blue/11', dark: 'Primitive/blue/11' },
          'accent-surface': { light: 'Primitive/blue/3', dark: 'Primitive/blue/3' },
          'accent-surface-hover': { light: 'Primitive/blue/4', dark: 'Primitive/blue/4' },
          'accent-border': { light: 'Primitive/blue/7', dark: 'Primitive/blue/7' },
          'accent-border-hover': { light: 'Primitive/blue/8', dark: 'Primitive/blue/8' },
          'accent-text-low': { light: 'Primitive/blue/11', dark: 'Primitive/blue/11' },
          
          // Error colors
          'error-base': { light: 'Primitive/red/9', dark: 'Primitive/red/9' },
          
          // Special colors
          'accent-text': { light: '#FFFFFF', dark: '#FFFFFF' }, // White text on solid buttons
        }
      };
    }

    if (selectedTokens.spacing) {
      tokens.spacing = spacingTokens.spacing;
    }

    if (selectedTokens.typography) {
      tokens.typography = typographyTokens.font;
    }

    if (selectedTokens.shadows) {
      tokens.shadows = shadowTokens.shadow;
    }

    if (selectedTokens.radii) {
      tokens.radii = radiusTokens.radius;
    }

    if (selectedTokens.animation) {
      tokens.animation = animationTokens;
    }

    // Send to plugin
    parent.postMessage({ pluginMessage: { type: 'import-tokens', tokens } }, '*');
  };

  const handleCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

  return (
    <div className="plugin-ui">
      <h2>Import Vanilla Tokens</h2>
      <p>Select which tokens to import as Figma Variables:</p>

      <div className="token-options">
        {Object.entries(selectedTokens).map(([key, value]) => (
          <label key={key} className="checkbox-label">
            <input
              type="checkbox"
              checked={value}
              onChange={(e) => setSelectedTokens(prev => ({
                ...prev,
                [key]: e.target.checked
              }))}
              disabled={loading}
            />
            <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
          </label>
        ))}
      </div>

      {status === 'success' && (
        <div className="success-message">
          ✓ Tokens imported successfully!
        </div>
      )}

      {status === 'error' && (
        <div className="error-message">
          ✗ Error importing tokens. Check the console for details.
        </div>
      )}

      <div className="button-group">
        <button onClick={handleCancel} disabled={loading}>
          Cancel
        </button>
        <button 
          onClick={handleImport} 
          disabled={loading || !Object.values(selectedTokens).some(v => v)}
          className="primary"
        >
          {loading ? 'Importing...' : 'Import Tokens'}
        </button>
      </div>
    </div>
  );
}

console.log('About to render React app');

try {
  const rootElement = document.getElementById('root');
  console.log('Root element:', rootElement);
  
  if (rootElement) {
    ReactDOM.render(<App />, rootElement);
    console.log('React render completed');
  } else {
    console.error('Root element not found');
  }
} catch (error) {
  console.error('Error rendering React app:', error);
}
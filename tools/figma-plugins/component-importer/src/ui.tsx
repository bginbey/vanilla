import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './ui.css';

interface ComponentInfo {
  name: string;
  dependencies: {
    colors?: string[];
    spacing?: string[];
    typography?: string[];
    radius?: string[];
    shadows?: string[];
  };
}

interface DependencyCheckResult {
  valid: boolean;
  missing: string[];
}

function App() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [selectedComponents, setSelectedComponents] = useState<string[]>(['Button']);
  const [availableComponents, setAvailableComponents] = useState<ComponentInfo[]>([]);
  const [dependencyResults, setDependencyResults] = useState<Record<string, DependencyCheckResult>>({});
  const [showDependencies, setShowDependencies] = useState(false);
  const [noTokensFound, setNoTokensFound] = useState(false);
  const [initError, setInitError] = useState<string | null>(null);
  const [availableCollections, setAvailableCollections] = useState<string[]>([]);

  useEffect(() => {
    // Listen for messages from the plugin
    window.onmessage = (event) => {
      const msg = event.data.pluginMessage;
      if (msg.type === 'components-loaded') {
        setAvailableComponents(msg.components);
        setAvailableCollections(msg.availableCollections || []);
        setNoTokensFound(false);
        setInitError(null);
      } else if (msg.type === 'no-collections-found') {
        setNoTokensFound(true);
        setAvailableComponents([]);
      } else if (msg.type === 'initialization-error') {
        setInitError(msg.error);
        setAvailableComponents([]);
      } else if (msg.type === 'dependency-check-complete') {
        setDependencyResults(msg.results);
      } else if (msg.type === 'creation-complete') {
        setStatus('success');
        setLoading(false);
      } else if (msg.type === 'creation-error') {
        setStatus('error');
        setLoading(false);
      }
    };
  }, []);
  
  useEffect(() => {
    // Check dependencies when selection changes
    if (selectedComponents.length > 0) {
      parent.postMessage({ 
        pluginMessage: { 
          type: 'check-dependencies', 
          components: selectedComponents 
        } 
      }, '*');
    }
  }, [selectedComponents]);

  const handleComponentToggle = (component: string) => {
    setSelectedComponents(prev => {
      if (prev.includes(component)) {
        return prev.filter(c => c !== component);
      } else {
        return [...prev, component];
      }
    });
  };

  const handleCreate = () => {
    if (selectedComponents.length === 0) return;
    
    // Check if all dependencies are valid
    const invalidComponents = selectedComponents.filter(
      comp => dependencyResults[comp] && !dependencyResults[comp].valid
    );
    
    if (invalidComponents.length > 0) {
      alert(`Please import missing tokens first for: ${invalidComponents.join(', ')}`);
      return;
    }
    
    setLoading(true);
    setStatus('loading');
    
    parent.postMessage({ 
      pluginMessage: { 
        type: 'create-components', 
        components: selectedComponents 
      } 
    }, '*');
  };

  const handleCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

  return (
    <div className="plugin-ui">
      <div className="header">
        <h2>Create Vanilla Components</h2>
        {!noTokensFound && !initError && (
          <p>Select components to generate in Figma:</p>
        )}
      </div>
      
      {noTokensFound && (
        <div className="error-message" style={{ margin: '16px' }}>
          <h3>No Design Tokens Found</h3>
          <p>Please run the Token Importer plugin first to import your design tokens.</p>
          <p style={{ marginTop: '8px' }}>Required collections: Colors, Spacing, Typography, Effects</p>
        </div>
      )}
      
      {initError && (
        <div className="error-message" style={{ margin: '16px' }}>
          <h3>Initialization Error</h3>
          <p>{initError}</p>
        </div>
      )}
      
      {!noTokensFound && !initError && availableCollections.length > 0 && (
        <div className="info-section" style={{ margin: '16px', padding: '12px', background: '#f0f0f0', borderRadius: '6px' }}>
          <strong>Available Token Collections:</strong> {availableCollections.join(', ')}
        </div>
      )}

      {!noTokensFound && !initError && (
        <div className="component-list">
        {availableComponents.map(component => {
          const isSelected = selectedComponents.includes(component.name);
          const dependencyCheck = dependencyResults[component.name];
          const hasInvalidDeps = dependencyCheck && !dependencyCheck.valid;
          
          return (
            <div key={component.name} className={`component-item ${hasInvalidDeps ? 'has-missing-deps' : ''}`}>
              <label>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleComponentToggle(component.name)}
                  disabled={loading}
                />
                <div className="component-info">
                  <span className="component-name">{component.name}</span>
                  <span className="component-description">
                    {getComponentDescription(component.name)}
                  </span>
                </div>
              </label>
              {isSelected && hasInvalidDeps && (
                <div className="missing-deps-warning">
                  ⚠️ Missing tokens: {dependencyCheck.missing.join(', ')}
                </div>
              )}
            </div>
          );
        })}
        </div>
      )}
      
      {!noTokensFound && !initError && (
        <>
          <button 
            className="toggle-deps-btn"
            onClick={() => setShowDependencies(!showDependencies)}
          >
            {showDependencies ? 'Hide' : 'Show'} Token Dependencies
          </button>
          
          {showDependencies && (
        <div className="dependencies-info">
          {selectedComponents.map(compName => {
            const comp = availableComponents.find(c => c.name === compName);
            if (!comp) return null;
            
            return (
              <div key={compName} className="component-deps">
                <h4>{compName} Dependencies:</h4>
                <ul>
                  {comp.dependencies.colors && comp.dependencies.colors.length > 0 && (
                    <li>Colors: {comp.dependencies.colors.join(', ')}</li>
                  )}
                  {comp.dependencies.spacing && comp.dependencies.spacing.length > 0 && (
                    <li>Spacing: {comp.dependencies.spacing.join(', ')}</li>
                  )}
                  {comp.dependencies.typography && comp.dependencies.typography.length > 0 && (
                    <li>Typography: {comp.dependencies.typography.join(', ')}</li>
                  )}
                  {comp.dependencies.radius && comp.dependencies.radius.length > 0 && (
                    <li>Border Radius: {comp.dependencies.radius.join(', ')}</li>
                  )}
                  {comp.dependencies.shadows && comp.dependencies.shadows.length > 0 && (
                    <li>Shadows: {comp.dependencies.shadows.join(', ')}</li>
                  )}
                </ul>
              </div>
            );
          })}
          </div>
        )}
        </>
      )}

      {status === 'success' && (
        <div className="success-message">
          ✓ Components created successfully!
        </div>
      )}

      {status === 'error' && (
        <div className="error-message">
          ✗ Error creating components. Check the console for details.
        </div>
      )}

      <div className="info-section">
        <h3>What will be created:</h3>
        <ul>
          <li>Component sets with all variants</li>
          <li>Variable bindings to imported design tokens</li>
          <li>Proper auto-layout structure</li>
          <li>Size and variant properties</li>
          <li>Boolean properties (fullWidth, disabled, etc.)</li>
          <li>Theme-aware components (light/dark mode support)</li>
        </ul>
        
        {selectedComponents.length > 0 && (
          <div className="selected-summary">
            <strong>Selected components:</strong> {selectedComponents.join(', ')}
          </div>
        )}
      </div>

      <div className="button-group">
        <button onClick={handleCancel} disabled={loading}>
          Cancel
        </button>
        <button 
          onClick={handleCreate} 
          disabled={loading || selectedComponents.length === 0}
          className="primary"
        >
          {loading ? 'Creating...' : `Create ${selectedComponents.length} Component${selectedComponents.length !== 1 ? 's' : ''}`}
        </button>
      </div>
    </div>
  );
}

function getComponentDescription(component: string): string {
  const descriptions: { [key: string]: string } = {
    Button: 'Solid, outline, and ghost variants with sizes',
    Input: 'Text input with error states and variants',
    Checkbox: 'Checkbox with label and states',
    Radio: 'Radio button with label and states',
    Switch: 'Toggle switch with sizes',
    Select: 'Dropdown select with variants'
  };
  
  return descriptions[component] || '';
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
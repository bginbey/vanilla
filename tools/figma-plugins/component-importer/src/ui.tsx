import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './ui.css';

const availableComponents = [
  'Button',
  'Input',
  'Checkbox',
  'Radio',
  'Switch',
  'Select'
];

function App() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [selectedComponents, setSelectedComponents] = useState<string[]>(['Button']);

  React.useEffect(() => {
    // Listen for messages from the plugin
    window.onmessage = (event) => {
      const msg = event.data.pluginMessage;
      if (msg.type === 'creation-complete') {
        setStatus('success');
        setLoading(false);
      } else if (msg.type === 'creation-error') {
        setStatus('error');
        setLoading(false);
      }
    };
  }, []);

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
        <p>Select components to generate in Figma:</p>
      </div>

      <div className="component-list">
        {availableComponents.map(component => (
          <label key={component} className="component-item">
            <input
              type="checkbox"
              checked={selectedComponents.includes(component)}
              onChange={() => handleComponentToggle(component)}
              disabled={loading}
            />
            <div className="component-info">
              <span className="component-name">{component}</span>
              <span className="component-description">
                {getComponentDescription(component)}
              </span>
            </div>
          </label>
        ))}
      </div>

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
          <li>Interactive states (hover, pressed, etc.)</li>
          <li>Variable bindings for tokens</li>
          <li>Auto-layout structure</li>
          <li>Boolean properties for toggles</li>
        </ul>
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
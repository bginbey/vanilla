import { Sandpack } from '@codesandbox/sandpack-react';
import { sandpackDark } from '@codesandbox/sandpack-themes';

interface LiveExampleProps {
  code: string;
  showCode?: boolean;
  dependencies?: Record<string, string>;
  theme?: 'light' | 'cream';
}

const defaultDependencies = {
  '@beauginbey/vanilla-components': '1.0.1',
  '@beauginbey/vanilla-tokens': '1.0.0',
  'react': '18.2.0',
  'react-dom': '18.2.0',
};

export function LiveExample({ 
  code, 
  showCode = true,
  dependencies = {},
  theme = 'light' 
}: LiveExampleProps) {
  // Ensure code is a string and not undefined
  if (!code || typeof code !== 'string') {
    console.error('LiveExample: Invalid code prop', code);
    return <div>Error: Invalid code provided to LiveExample</div>;
  }
  
  const files = {
    '/App.tsx': code.trim(),
    '/index.tsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import { light, cream } from '@beauginbey/vanilla-components';
import App from './App';

// Apply theme class to root element
const themeClass = ${theme === 'cream' ? 'cream' : 'light'};
document.documentElement.className = themeClass;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
  };

  try {
    return (
      <div className="sandpack-wrapper">
        <Sandpack
          template="react-ts"
          files={files}
          options={{
            showNavigator: false,
            showTabs: showCode,
            showLineNumbers: true,
            showConsoleButton: true,
            editorHeight: 400,
            externalResources: [
              'https://unpkg.com/@beauginbey/vanilla-components@1.0.1/dist/index.css'
            ],
          }}
          customSetup={{
            dependencies: {
              ...defaultDependencies,
              ...dependencies,
            },
          }}
          theme={sandpackDark}
        />
      </div>
    );
  } catch (error) {
    console.error('Sandpack error:', error);
    return (
      <div style={{ padding: '20px', border: '1px solid red', borderRadius: '4px' }}>
        <p>Error loading code example: {error?.message || 'Unknown error'}</p>
        <details>
          <summary>Error details</summary>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </details>
      </div>
    );
  }
}
import { Sandpack } from '@codesandbox/sandpack-react';
import { sandpackDark } from '@codesandbox/sandpack-themes';

interface LiveExampleProps {
  code: string;
  showCode?: boolean;
  dependencies?: Record<string, string>;
}

const defaultDependencies = {
  '@beauginbey/vanilla-components': '^1.0.0',
  '@beauginbey/vanilla-tokens': '^1.0.0',
  'react': '^18.0.0',
  'react-dom': '^18.0.0',
};

export function LiveExample({ 
  code, 
  showCode = true,
  dependencies = {} 
}: LiveExampleProps) {
  const files = {
    '/App.tsx': code,
    '/index.tsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import { lightTheme } from '@beauginbey/vanilla-components';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className={lightTheme}>
      <App />
    </div>
  </React.StrictMode>
);`,
  };

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
}
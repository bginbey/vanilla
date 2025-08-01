import { Sandpack } from '@codesandbox/sandpack-react';
import { sandpackDark, githubLight } from '@codesandbox/sandpack-themes';
import { useTheme } from 'nextra-theme-docs';

interface LiveExampleProps {
  code: string;
  showCode?: boolean;
  dependencies?: Record<string, string>;
}

const defaultDependencies = {
  '@beauginbey/vanilla-components': '1.4.0',
  '@beauginbey/vanilla-tokens': '1.1.1',
  'react': '18.2.0',
  'react-dom': '18.2.0',
  '@types/react': '18.2.48',
  '@types/react-dom': '18.2.18',
};

export function LiveExample({ 
  code, 
  showCode = true,
  dependencies = {}
}: LiveExampleProps) {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';
  
  // Ensure code is a string and not undefined
  if (!code || typeof code !== 'string') {
    console.error('LiveExample: Invalid code prop', code);
    return <div>Error: Invalid code provided to LiveExample</div>;
  }
  
  const files = {
    '/App.tsx': code.trim(),
    '/index.tsx': `import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { theme, Box, Theme } from '@beauginbey/vanilla-components';
import App from './App';

// Apply theme class to root element
document.documentElement.className = theme;
${isDark ? `document.documentElement.classList.add('dark');` : ''}

// Add wrapper with padding and theme context
function AppWrapper() {
  return (
    <Theme>
      <Box p="4">
        <App />
      </Box>
    </Theme>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <AppWrapper />
    </StrictMode>
  );
}`,
    '/tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["**/*.ts", "**/*.tsx"]
}`,
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
              'https://unpkg.com/@beauginbey/vanilla-colors@0.1.0/dist/index.css',
              'https://unpkg.com/@beauginbey/vanilla-components@1.4.0/dist/index.css'
            ],
          }}
          customSetup={{
            dependencies: {
              ...defaultDependencies,
              ...dependencies,
            },
          }}
          theme={isDark ? sandpackDark : githubLight}
        />
      </div>
    );
  } catch (error) {
    console.error('Sandpack error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return (
      <div style={{ padding: '20px', border: '1px solid red', borderRadius: '4px' }}>
        <p>Error loading code example: {errorMessage}</p>
        <details>
          <summary>Error details</summary>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </details>
      </div>
    );
  }
}
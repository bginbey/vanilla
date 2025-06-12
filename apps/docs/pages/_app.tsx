import type { AppProps } from 'next/app';
import { RadixTheme, ThemeProvider, theme } from '@beauginbey/vanilla-components';
import '@beauginbey/vanilla-components/styles.css';
import '@beauginbey/vanilla-colors/css';
import { useState, useEffect } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply theme class to document for vanilla-extract styles
  useEffect(() => {
    document.documentElement.className = theme;
  }, []);

  // During SSR, apply the theme class as default
  if (!mounted) {
    return (
      <div className={theme}>
        <ThemeProvider defaultTheme="light" storageKey="vanilla-docs-theme">
          <RadixTheme>
            <Component {...pageProps} />
          </RadixTheme>
        </ThemeProvider>
      </div>
    );
  }

  return (
    <div className={theme}>
      <ThemeProvider defaultTheme="light" storageKey="vanilla-docs-theme">
        <RadixTheme>
          <Component {...pageProps} />
        </RadixTheme>
      </ThemeProvider>
    </div>
  );
}
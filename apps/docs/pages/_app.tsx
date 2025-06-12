import type { AppProps } from 'next/app';
import { theme } from '@beauginbey/vanilla-components';
import '@beauginbey/vanilla-components/styles.css';
import '@beauginbey/vanilla-colors/css';
import { useEffect } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Apply theme class to document for vanilla-extract styles
    document.documentElement.className = theme;
  }, []);

  return (
    <div className={theme}>
      <Component {...pageProps} />
    </div>
  );
}
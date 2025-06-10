import type { AppProps } from 'next/app';
import { theme } from '@beauginbey/vanilla-components';
import '@beauginbey/vanilla-components/styles.css';
import '@beauginbey/vanilla-colors/css';
import { useState, useEffect } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Apply theme class to the document root
      document.documentElement.className = theme;
      
      // Apply dark mode class if needed
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [mounted, isDark]);

  // During SSR, apply the theme class as default
  if (!mounted) {
    return (
      <div className={theme}>
        <Component {...pageProps} />
      </div>
    );
  }

  return <Component {...pageProps} />;
}
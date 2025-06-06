import type { AppProps } from 'next/app';
import { light, cream } from '@beauginbey/vanilla-components';
import '@beauginbey/vanilla-components/styles.css';
import { useState, useEffect } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setMounted(true);
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'cream')) {
      setTheme(savedTheme);
    }
  }, []);

  const themeClass = theme === 'cream' ? cream : light;

  useEffect(() => {
    if (mounted) {
      // Apply theme class to the document root
      document.documentElement.className = themeClass;
    }
  }, [themeClass, mounted]);

  // During SSR, apply the light theme as default
  if (!mounted) {
    return (
      <div className={light}>
        <Component {...pageProps} />
      </div>
    );
  }

  return <Component {...pageProps} />;
}
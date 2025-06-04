import type { AppProps } from 'next/app';
import { light, cream } from '@beauginbey/vanilla-components';
import '@beauginbey/vanilla-components/styles.css';
import { useState, useEffect } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'cream')) {
      setTheme(savedTheme);
    }
  }, []);

  const themeClass = theme === 'cream' ? cream : light;

  useEffect(() => {
    // Apply theme class to the document root
    document.documentElement.className = themeClass;
  }, [themeClass]);

  return <Component {...pageProps} />;
}
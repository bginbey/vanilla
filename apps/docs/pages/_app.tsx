import type { AppProps } from 'next/app';
import { lightTheme } from '@beauginbey/vanilla-components';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={lightTheme}>
      <Component {...pageProps} />
    </div>
  );
}
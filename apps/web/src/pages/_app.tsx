import '@/assets/main.css';

import { AssertiveStoreProvider } from '@/frontend/context/assertives';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AssertiveStoreProvider>
      <Component {...pageProps} />
    </AssertiveStoreProvider>
  );
}

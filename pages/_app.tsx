/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from 'react-query';

import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Navbar />
        <div className="px-10 pt-10 bg-black h-screen text-white">
          <Component {...pageProps} />
        </div>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;

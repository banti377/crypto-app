/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from 'react-query';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import '../styles/globals.css';

const StyledDiv = styled.div`
  padding: 0 10%;
  height: 100%;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div className="bg-gray-200">
          <Navbar />
          <StyledDiv>
            <Component {...pageProps} />
          </StyledDiv>
        </div>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;

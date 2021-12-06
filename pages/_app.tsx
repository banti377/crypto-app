/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="px-10">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

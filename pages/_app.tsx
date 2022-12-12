import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const theme = extendTheme({
  sizes: {
    container: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}

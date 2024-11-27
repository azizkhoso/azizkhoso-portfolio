import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme, Heading } from '@chakra-ui/react';

import '../styles/globals.css';

/** @type {import('@chakra-ui/react').ChakraTheme} */
export const theme = extendTheme({
  sizes: {
    container: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px',
    },
    '1-12': '8.3333%',
    '2-12': '16.6666%',
    '3-12': '25%',
    '4-12': '33.3333%',
    '5-12': '41.6666%',
    '6-12': '50%',
    '7-12': '58.3333%',
    '8-12': '66.6666%',
    '9-12': '75%',
    '10-12': '83.3333%',
    '11-12': '91.6666%',
  },
  components: {
    Heading: {
      fontFamily: 'Inter'
    }
  },
  colors: {
    green: {
      100: '#eefbf1',
      200: '#d7f4db',
      300: '#b1e9bc',
      400: '#7ed795',
      500: '#59c378',
      600: '#27a24f',
      700: '#19823e',
      800: '#146833',
      900: '#12532b',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}

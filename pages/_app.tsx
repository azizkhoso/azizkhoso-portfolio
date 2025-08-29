import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import tinycolor from 'tinycolor2';

import '../styles/globals.css';

const baseYellow = tinycolor('#ffc107');

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
    gray: {
      100: '#e9ecef',
      200: '#dee2e6',
      300: '#ced4da',
      400: '#adb5bd',
      500: '#6c757d',
      600: '#495057',
      700: '#343a40',
      800: '#212529',
      900: '#343a40',
    },
    darkGray: {
      900: '#191919',
      800: '#212121',
      700: '#2c2c2c',
      600: '#383838',
      500: '#444444',
      400: '#505050',
      300: '#5c5c5c',
      200: '#686868',
      100: '#747474',
    },
    yellow: {
      100: baseYellow.lighten(40).toHexString(),
      200: baseYellow.lighten(30).toHexString(),
      300: baseYellow.lighten(20).toHexString(),
      400: baseYellow.lighten(10).toHexString(),
      500: baseYellow.toHexString(),
      600: baseYellow.darken(10).toHexString(),
      700: baseYellow.darken(20).toHexString(),
      800: baseYellow.darken(30).toHexString(),
      900: baseYellow.darken(40).toHexString(),
    }
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Abdul Aziz Khoso | Full Stack Develoepr</title>
      </Head>
      <main>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </main>
    </>
  );
}

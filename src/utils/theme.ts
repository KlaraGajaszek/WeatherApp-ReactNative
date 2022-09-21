import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  palette: {
    primary: {
      light: '#a0d0ee',
      main: '#ffff',
    },
    text: {
      primary: '#8999a9',
      secondary: '#5b7186',
      dark: '#303030',
    },
    background: {
      primar: '#d8e9f6',
      secondary: '#edf9ff',
      light: '#edf7ff',
      dark: '#d5e6f2',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    title: {
      fontSize: 55,
      lineHeight: 20,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 20,
      lineHeight: 20,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 12,
      lineHeight: 20,
      fontWeight: 400,
    },
    body1: {
      fontSize: 12,
      lineHeight: 24,
      fontWeight: 400,
    },
    body2: {
      fontSize: 15,
      lineHeight: 21,
      fontWeight: 400,
    },
    body3: {
      fontSize: 30,
      lineHeight: 21,
      fontWeight: 600,
    },
    overline: {
      fontSize: 15,
      lineHeight: 21,
      fontWeight: 600,
    },
  },
  border: {
    main: '1px solid #ffff',
  },
};

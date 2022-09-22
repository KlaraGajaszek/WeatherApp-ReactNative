import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        light: string;
        main: string;
      };
      text: {
        primary: string;
        secondary: string;
        dark: string;
      };
      background: {
        primar: string;
        secondary: string;
        light: string;
        dark: string;
      };
    };
    typography: {
      fontFamily: string;
      title: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
      };
      subtitle1: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
      };
      subtitle2: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
      };
      body1: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
      };
      body2: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
      };
      body3: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
      };
      overline: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
      };
    };
    border: { main: string };
  }
}

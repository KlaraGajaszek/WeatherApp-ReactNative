import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { MainView } from './src/components/pages/MainView/MainView';
import { WeatherContextProvider } from './src/context/weatherContext';
import { theme } from './src/utils/theme';

export default function App() {
  return (
    <WeatherContextProvider>
      <ThemeProvider theme={theme}>
        <MainView />
      </ThemeProvider>
    </WeatherContextProvider>
  );
}

import { ThemeProvider } from 'styled-components/native';
import { theme } from '../src/utils/theme';
import { WeatherContext } from '../src/context/weatherContext';
import { weatherResonse } from '../src/mocked/weatherResponse';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  // Global decorators
  (Story) => (
    <WeatherContext.Provider value={{ data: weatherResonse, loading: false, error: '' }}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </WeatherContext.Provider>
  ),
];

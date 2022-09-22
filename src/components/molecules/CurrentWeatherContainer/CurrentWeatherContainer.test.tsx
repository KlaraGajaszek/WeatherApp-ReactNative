import { render } from '@testing-library/react-native';

import { ThemeProvider } from 'styled-components/native';
import { CurrentWeatherContainer } from '.';
import { theme } from '../../../utils/theme';

describe('Current Weather container', () => {
  it('all properties should render correctly', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CurrentWeatherContainer
          temperatureValue={20}
          iconId="03d"
          imageWidth={250}
          imageHeight={250}
          temperatureFontSize={20}
        />
      </ThemeProvider>,
    );

    const weatherIcon = getByTestId('03d');
    const temperatureValue = getByText('20°');

    expect(weatherIcon).toBeTruthy();
    expect(temperatureValue).toBeTruthy();
  });
});

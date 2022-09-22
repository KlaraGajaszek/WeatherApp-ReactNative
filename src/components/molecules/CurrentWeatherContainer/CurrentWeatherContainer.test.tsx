import { render } from '../../../test-utils';
import { CurrentWeatherContainer } from '.';

describe('Current Weather container', () => {
  it('all properties should render correctly', () => {
    const { getByText, getByTestId } = render(
      <CurrentWeatherContainer
        temperatureValue={20}
        iconId="03d"
        imageWidth={250}
        imageHeight={250}
        temperatureFontSize={20}
      />,
    );

    const weatherIcon = getByTestId('03d');
    const temperatureValue = getByText('20°');

    expect(weatherIcon).toBeTruthy();
    expect(temperatureValue).toBeTruthy();
  });
});

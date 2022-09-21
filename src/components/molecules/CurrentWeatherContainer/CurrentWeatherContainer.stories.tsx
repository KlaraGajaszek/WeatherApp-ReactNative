import { ComponentMeta } from '@storybook/react';

import { CurrentWeatherContainer, CurrentWeatherContainerProps } from '.';

export default {
  title: 'components/molecules',
  component: CurrentWeatherContainer,
  argTypes: {},
} as ComponentMeta<typeof CurrentWeatherContainer>;

export const WeatherContainer = (args: CurrentWeatherContainerProps) => <CurrentWeatherContainer {...args} />;

WeatherContainer.args = {
  iconId: '01d',
  imageWidth: 50,
  imageHeight: 50,
  temperatureValue: 20,
  temperatureFontSize: 20,
};

import React from 'react';

import { WeatherCard, WeatherCardProps } from '.';

export default {
  title: 'components/organisms',
  component: WeatherCard,
  argTypes: { temperatureValue: 0, iconId: '1d', date: '2022-02-23' },
};

export const WeatherBox = (args: WeatherCardProps) => <WeatherCard {...args} />;

WeatherBox.args = { temperatureValue: 0, iconId: '1d', date: '2022-02-23' };

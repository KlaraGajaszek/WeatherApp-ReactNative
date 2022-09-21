import React from 'react';

import { WeatherDetailsContainer } from '.';

export default {
  title: 'components/molecules',
  component: WeatherDetailsContainer,
  argTypes: { temperatureValue: 0, iconId: '1d', date: '2022-02-23' },
};

export const WeatherDetailsBox = () => <WeatherDetailsContainer />;

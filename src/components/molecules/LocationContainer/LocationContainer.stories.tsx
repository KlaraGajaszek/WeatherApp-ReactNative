import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { LocationContainer } from '.';

export default {
  title: 'components/molecules',
  component: LocationContainer,
  argTypes: {},
} as ComponentMeta<typeof LocationContainer>;

export const LocationBox = () => <LocationContainer />;

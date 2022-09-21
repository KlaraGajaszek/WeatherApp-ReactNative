import { ComponentMeta } from '@storybook/react';

import { ErrorContainer, ErrorContainerProps } from './';

export default {
  title: 'components/atoms',
  component: ErrorContainer,
  argTypes: {},
} as ComponentMeta<typeof ErrorContainer>;

export const ErrorBox = (args: ErrorContainerProps) => <ErrorContainer {...args} />;

ErrorBox.args = {
  errorMessage: 'Error Message',
};

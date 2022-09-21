import { useWeatherContext } from '../../../context/weatherContext';
import { ErrorContainer } from '../../atoms/ErrorContainer/ErrorContainer';

import { ErrorViewContainer } from './ErrorView.styled';

export const ErrorView = () => {
  const weatherData = useWeatherContext();

  return (
    <ErrorViewContainer>
      <ErrorContainer errorMessage={weatherData?.error} />
    </ErrorViewContainer>
  );
};

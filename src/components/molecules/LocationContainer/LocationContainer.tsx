import { useWeatherContext } from '../../../context/weatherContext';

import { CityText, Container, WeatherText } from './LocationContainer.styled';

export const LocationContainer = () => {
  const weatherData = useWeatherContext();

  return (
    <Container>
      <CityText>{weatherData?.data?.city.name}</CityText>
      <WeatherText>{weatherData?.data?.list[0].weather[0].description}</WeatherText>
    </Container>
  );
};

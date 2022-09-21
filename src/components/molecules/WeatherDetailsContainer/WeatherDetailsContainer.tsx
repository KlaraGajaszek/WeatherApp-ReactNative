import { CurrentWeatherContainer } from '../CurrentWeatherContainer/CurrentWeatherContainer';
import { useWeatherContext } from '../../../context/weatherContext';
import { RainIcon } from '../../atoms/RainIcon/RainIcon';
import { WindIcon } from '../../atoms/WindIcon/WindIcon';

import {
  WeatherDetails,
  WeatherDateContainer,
  WeatherContainer,
  TemperatureDetails,
  TemperatureIcon,
} from './WeatherDetailsContainer.styled';

export const WeatherDetailsContainer = () => {
  const weatherData = useWeatherContext();

  return (
    <WeatherDateContainer>
      <TemperatureDetails>
        <TemperatureIcon>
          <RainIcon />
        </TemperatureIcon>
        <WeatherDetails>{weatherData?.data?.list[0].wind.speed}%</WeatherDetails>
      </TemperatureDetails>
      <WeatherContainer>
        <CurrentWeatherContainer
          iconId={weatherData?.data?.list[0].weather[0].icon}
          imageWidth={240}
          imageHeight={150}
          temperatureValue={weatherData?.data?.list[0].main.temp}
          temperatureFontSize={50}
        />
      </WeatherContainer>
      <TemperatureDetails>
        <TemperatureIcon>
          <WindIcon />
        </TemperatureIcon>
        <WeatherDetails>{weatherData?.data?.list[0].wind.speed}km/h</WeatherDetails>
      </TemperatureDetails>
    </WeatherDateContainer>
  );
};

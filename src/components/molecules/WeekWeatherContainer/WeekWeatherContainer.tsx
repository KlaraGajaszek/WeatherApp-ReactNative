import { useWeatherContext } from '../../../context/weatherContext';
import { WeatherCard } from '../../organisms/WeatherCard/WeatherCard';

import { ScrollContainer } from './WeekWeatherContainer.styled';

export const WeekWeatherContainer = () => {
  const weatherData = useWeatherContext();

  return (
    <ScrollContainer horizontal={true}>
      {weatherData?.data?.list.map(({ dt_txt, main, weather }) => (
        <WeatherCard iconId={weather[0].icon} key={dt_txt} temperatureValue={main.temp} date={dt_txt} />
      ))}
    </ScrollContainer>
  );
};

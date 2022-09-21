import { LocationContainer } from '../../molecules/LocationContainer';
import { WeatherDetailsContainer } from '../../molecules/WeatherDetailsContainer';
import { WeekWeatherContainer } from '../../molecules/WeekWeatherContainer';

import { Header, WeatherTemperatureContainer, MainWeatherSectionContainer } from './MainWeatherSection.styled';

export const MainWeatherSection = () => {
  return (
    <>
      <Header>
        <MainWeatherSectionContainer>
          <LocationContainer />
        </MainWeatherSectionContainer>
        <WeatherTemperatureContainer>
          <WeatherDetailsContainer />
        </WeatherTemperatureContainer>
      </Header>
      <WeekWeatherContainer />
    </>
  );
};

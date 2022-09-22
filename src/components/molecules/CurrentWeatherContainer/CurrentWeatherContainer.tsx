import { IconId } from '../../../../types/weatherDetails';

import { Temperature, WeatherIcon, Container } from './CurrentWeatherContainer.styled';

export type CurrentWeatherContainerProps = {
  temperatureValue: number | undefined;
  iconId: IconId | undefined;
  imageWidth: number;
  imageHeight: number;
  temperatureFontSize: number;
};

export const CurrentWeatherContainer = ({
  iconId,
  imageWidth,
  imageHeight,
  temperatureValue,
  temperatureFontSize,
}: CurrentWeatherContainerProps) => {
  return (
    <Container>
      <WeatherIcon
        testID={iconId}
        width={imageWidth}
        height={imageHeight}
        source={{ uri: `http://openweathermap.org/img/w/${iconId}.png` }}
      />
      <Temperature temperatureFontSize={temperatureFontSize}>{temperatureValue}°</Temperature>
    </Container>
  );
};

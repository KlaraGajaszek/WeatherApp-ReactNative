import moment from 'moment';

import { CurrentWeatherContainer } from '../../molecules/CurrentWeatherContainer/CurrentWeatherContainer';
import { IconId } from '../../../services/types/weatherDetails';

import { CardContainer, CardHeader, DayText, HoursText } from './WeatherCard.styled';

export type WeatherCardProps = { temperatureValue: number; iconId: IconId; date: string };

export const WeatherCard = ({ temperatureValue, iconId, date }: WeatherCardProps) => {
  const [day, hours] = date.split(' ');

  const dayName = moment(new Date(day), 'DD/MM/YYYY', true).format('dddd');

  return (
    <CardContainer>
      <CardHeader>
        <DayText>{dayName}</DayText>
        <HoursText>{day}</HoursText>
        <HoursText>{hours}</HoursText>
      </CardHeader>
      <CurrentWeatherContainer
        iconId={iconId}
        imageWidth={120}
        imageHeight={60}
        temperatureValue={temperatureValue}
        temperatureFontSize={25}
      />
    </CardContainer>
  );
};

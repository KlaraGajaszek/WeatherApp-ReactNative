import { WEATHER_API_KEY } from '@env';

export type GeoPosition = { latitude: number; longitude: number } | undefined;

export const getWeatherUrl = (position: GeoPosition) => {
  const basicUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${position?.latitude}&lon=${position?.longitude}&units=metric&appid=`;

  const url = `${basicUrl}${WEATHER_API_KEY}`;

  if (position?.latitude && position?.longitude) {
    return url;
  }

  return;
};

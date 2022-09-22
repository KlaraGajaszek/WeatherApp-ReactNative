import { APIKEY } from '../../variables';

export type GeoPosition = { latitude: number; longitude: number } | undefined;

export const getWeatherUrl = (position: GeoPosition) => {
  const basicUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${position?.latitude}&lon=${position?.longitude}&units=metric&appid=`;

  const url = `${basicUrl}${APIKEY}`;

  if (position?.latitude && position?.longitude) {
    return url;
  }

  return;
};

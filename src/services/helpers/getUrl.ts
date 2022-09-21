export type GeoPosition = { latitude: number; longitude: number } | undefined;
// import { API_BASE } from '@env';

const API = '68d8dd04ef1c04f8f9367c1a8ab3e5f2';

export const getWeatherUrl = (position: GeoPosition) => {
  const basicUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${position?.latitude}&lon=${position?.longitude}&units=metric&appid=`;

  const url = `${basicUrl}${API}`;

  if (position?.latitude && position?.longitude) {
    return url;
  }

  return;
};

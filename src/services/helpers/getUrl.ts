export type GeoPosition = { latitude: number; longitude: number } | undefined;
// import API_BASE from 'react-native-dotenv';

const API = 'YOU KEY';

export const getWeatherUrl = (position: GeoPosition) => {
  const basicUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${position?.latitude}&lon=${position?.longitude}&units=metric&appid=`;

  const url = `${basicUrl}${API}`;

  if (position?.latitude && position?.longitude) {
    return url;
  }

  return;
};

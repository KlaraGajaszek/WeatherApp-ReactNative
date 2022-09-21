import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

import { GeoPosition, getWeatherUrl } from './helpers/getUrl';
import { useFetch } from './helpers/useGetData';
import { WeatherResponse } from './types/weatherDetails';

export const useGetWeatherDetails = () => {
  const [location, setLocation] = useState<GeoPosition>({ latitude: 53, longitude: 56 });

  useEffect(() => {
    (async () => {
      const { coords } = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
      const { latitude, longitude } = coords;

      setLocation({ latitude, longitude });
    })();
  }, []);

  const { data, loading, error } = useFetch<WeatherResponse>(getWeatherUrl(location));

  return { data, loading, error };
};

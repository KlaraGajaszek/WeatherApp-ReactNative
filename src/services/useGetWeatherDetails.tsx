import { useFetch } from './hooks/useGetData';
import { WeatherResponse } from '../mocked/types/weatherDetails';
import { getError } from './helpers/getError';
import { useGetLocalization } from './useGetLocalization';
import { getWeatherUrl } from './helpers/getUrl';

export const useGetWeatherDetails = () => {
  const { localization, errorMessage } = useGetLocalization();
  const { data, loading, error } = useFetch<WeatherResponse>(getWeatherUrl(localization));

  return { data, loading, error: getError(error, errorMessage) };
};

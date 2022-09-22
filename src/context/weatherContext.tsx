import React, { useContext, createContext } from 'react';

import { WeatherResponse } from '../../types/weatherDetails';
import { useGetWeatherDetails } from '../services/useGetWeatherDetails';

type WeatherContextProvider = { children: React.ReactNode };
type Response = { data: WeatherResponse | undefined; loading: boolean; error: string | undefined };

const WeatherContext = createContext<Response | null>(null);

const WeatherContextProvider = ({ children }: WeatherContextProvider) => {
  const { data, loading, error } = useGetWeatherDetails();

  return <WeatherContext.Provider value={{ data, loading, error }}>{children}</WeatherContext.Provider>;
};

const useWeatherContext = () => {
  const userContext = useContext(WeatherContext);
  return userContext;
};

export { useWeatherContext, WeatherContextProvider, WeatherContext };

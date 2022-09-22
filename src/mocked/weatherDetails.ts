export type IconId =
  | '01d'
  | '02d'
  | '03d'
  | '04d'
  | '05d'
  | '06d'
  | '07d'
  | '08d'
  | '09d'
  | '10d'
  | '11d'
  | '12d'
  | '13d'
  | '01n,'
  | '02n'
  | '03n'
  | '04n'
  | '05n'
  | '06n'
  | '07n'
  | '08n'
  | '09n'
  | '10n'
  | '11n'
  | '12n'
  | '13n';

export type Weather = { id: number; main: string; description: string; icon: IconId };
export type WeatherResponse = {
  list: Array<{
    clouds: { all: number };
    dt: number;
    dt_txt: string;
    main: {
      feels_like: number;
      grnd_level: number;
      humidity: number;
      pressure: number;
      sea_level: number;
      temp: number;
      temp_kf: number;
      temp_max: number;
      temp_min: number;
    };
    pop?: number;
    rain?: unknown;
    sys?: { pod: string };
    visibility: number;
    weather: Array<Weather>;
    wind: { speed: number; deg: number; gust: number };
  }>;
  cnt: number;
  cod: string;
  message: number;
  city: {
    coord: { lat: number; lon: number };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
};

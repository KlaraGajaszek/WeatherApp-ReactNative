import styled from 'styled-components/native';

import { CurrentWeatherContainerProps } from './CurrentWeatherContainer';

export type WeatherIconProps = { width: number; height: number };
export type TemperatureProps = Pick<CurrentWeatherContainerProps, 'temperatureFontSize'>;

export const Temperature = styled.Text<TemperatureProps>`
  color: ${({ theme: { palette } }) => palette.text.secondary};
  font-weight: ${({ theme: { typography } }) => typography.overline.fontWeight};
  font-size: ${({ temperatureFontSize }) => temperatureFontSize}px;
`;

export const WeatherIcon = styled.Image<WeatherIconProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

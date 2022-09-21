import styled from 'styled-components/native';

export const WeatherContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const WeatherDateContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const WeatherDetails = styled.Text`
  color: ${({ theme: { palette } }) => palette.text.secondary};
  font-weight: ${({ theme: { typography } }) => typography.overline.fontWeight};
  font-size: ${({ theme: { typography } }) => typography.overline.fontSize}px;
`;

export const TemperatureDetails = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 155px;
`;

export const TemperatureIcon = styled.View`
  margin-right: 5px;
`;

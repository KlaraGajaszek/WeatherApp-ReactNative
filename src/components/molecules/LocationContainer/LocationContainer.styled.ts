import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding-top: 2px;
  align-items: center;
`;

export const CityText = styled.Text`
  font-size: ${({ theme: { typography } }) => typography.body3.fontSize}px;
  color: ${({ theme: { palette } }) => palette.text.secondary};
  font-weight: ${({ theme: { typography } }) => typography.body3.fontWeight};
`;

export const WeatherText = styled.Text`
  margin-top: 0.4px;
  font-size: ${({ theme: { typography } }) => typography.body2.fontSize}px;
  color: ${({ theme: { palette } }) => palette.text.primary};
  font-weight: ${({ theme: { typography } }) => typography.body2.fontWeight};
  line-height: ${({ theme: { typography } }) => typography.body2.lineHeight}px;
`;

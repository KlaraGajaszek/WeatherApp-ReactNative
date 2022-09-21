import styled from 'styled-components/native';

export const CardContainer = styled.View`
  padding: 16px;
  height: 250px;
  width: 170px;
  border-radius: 15px;
  opacity: 0.6;
  margin-right: 8px;
  background-color: ${(props) => props.theme.palette.primary.light};
  border: ${(props) => props.theme.border.main};
`;

export const DayText = styled.Text`
  font-size: ${({ theme: { typography } }) => typography.subtitle1.fontSize}px;
  line-height: ${({ theme: { typography } }) => typography.subtitle1.lineHeight}px;
  font-weight: ${({ theme: { typography } }) => typography.subtitle1.fontWeight};
  color: ${({ theme: { palette } }) => palette.text.dark};
  margin-bottom: 2.4px;
`;

export const HoursText = styled.Text`
  font-size: ${({ theme: { typography } }) => typography.subtitle2.fontSize}px;
  line-height: ${({ theme: { typography } }) => typography.subtitle2.lineHeight}px;
  font-weight: ${({ theme: { typography } }) => typography.subtitle2.fontWeight};
  color: ${({ theme: { palette } }) => palette.text.dark};
`;

export const CardHeader = styled.View`
  align-items: center;
  margin-bottom: 8px;
`;

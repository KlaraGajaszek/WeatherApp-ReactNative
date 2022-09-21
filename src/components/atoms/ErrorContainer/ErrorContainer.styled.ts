import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;

  padding: 8px;
  background: ${({ theme: { palette } }) => palette.background.primar};
  margin: 0 8px;
  border-radius: 8px;
  opacity: 0.8;
`;

export const ErrorHeader = styled.Text`
  font-size: ${({ theme: { typography } }) => typography.subtitle1.fontSize}px;
  line-height: ${({ theme: { typography } }) => typography.subtitle1.lineHeight}px;
  font-weight: ${({ theme: { typography } }) => typography.subtitle1.fontWeight};
  color: ${({ theme: { palette } }) => palette.text.dark};
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const ErrorMessage = styled.Text`
  font-size: ${({ theme: { typography } }) => typography.body2.fontSize}px;
  line-height: ${({ theme: { typography } }) => typography.body2.lineHeight}px;
  font-weight: ${({ theme: { typography } }) => typography.body2.fontWeight};
  color: ${({ theme: { palette } }) => palette.text.dark};
  text-align: center;
`;

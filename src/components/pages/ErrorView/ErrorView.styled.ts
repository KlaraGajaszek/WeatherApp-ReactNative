import styled from 'styled-components/native';

export const ErrorViewContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { palette } }) => palette.primary.light};
`;

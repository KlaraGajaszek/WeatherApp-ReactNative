import { Container, ErrorHeader, ErrorMessage } from './ErrorContainer.styled';

export type ErrorContainerProps = { errorMessage: string };

export const ErrorContainer = ({ errorMessage }: ErrorContainerProps) => {
  return (
    <Container>
      <ErrorHeader>Whoops, something went wrong</ErrorHeader>
      <ErrorMessage>The reason is probably connected with: {errorMessage}</ErrorMessage>
    </Container>
  );
};

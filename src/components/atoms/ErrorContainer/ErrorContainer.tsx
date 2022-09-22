import { ErrorTextMessage } from '../../../constants/errors';
import { Container, ErrorHeader, ErrorMessage } from './ErrorContainer.styled';

export type ErrorContainerProps = { errorMessage: string | undefined };

export const ErrorContainer = ({ errorMessage }: ErrorContainerProps) => {
  return (
    <Container>
      <ErrorHeader>{ErrorTextMessage.title}</ErrorHeader>
      <ErrorMessage>
        `${ErrorTextMessage.description} ${errorMessage}`
      </ErrorMessage>
    </Container>
  );
};

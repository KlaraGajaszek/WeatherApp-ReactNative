import { ErrorTextMessage } from '../../../constants/errors';
import { render } from '../../../test-utils';
import { ErrorContainer } from './ErrorContainer';

describe('Error Container', () => {
  it('render correctly', () => {
    const { getByText } = render(<ErrorContainer errorMessage={'error message'} />);

    const errorDescription = `${ErrorTextMessage.description} error message`;

    const title = getByText('Whoops, something went wrong');
    const description = getByText(errorDescription);

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });
});

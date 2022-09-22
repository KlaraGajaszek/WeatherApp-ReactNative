import { render } from '../../../test-utils';

import { ErrorContainer } from './ErrorContainer';

describe('Error Container', () => {
  it('render correctly', () => {
    const { getByText } = render(<ErrorContainer errorMessage={'error message'} />);

    const title = getByText('Whoops, something went wrong');
    const description = getByText('The reason is probably connected with: error message');

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });
});

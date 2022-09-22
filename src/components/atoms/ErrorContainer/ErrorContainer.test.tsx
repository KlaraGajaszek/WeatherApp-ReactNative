import { render } from '@testing-library/react-native';

import { ThemeProvider } from 'styled-components/native';
import { theme } from '../../../utils/theme';
import { ErrorContainer } from './ErrorContainer';

describe('Error Container', () => {
  it('render correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ErrorContainer errorMessage={'error message'} />
      </ThemeProvider>,
    );
    const title = getByText('Whoops, something went wrong');
    const description = getByText('The reason is probably connected with: error message');
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });
});

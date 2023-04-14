import FormPage from 'pages/FormPage/FormPage';
import { renderWithProviders } from 'utils/test-utils';

describe('FormPage', () => {
  it('FormPage renders', () => {
    renderWithProviders(<FormPage />);
  });
});

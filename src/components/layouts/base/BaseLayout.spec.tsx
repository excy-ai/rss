import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import BaseLayout from 'components/layouts/base/BaseLayout';

describe('BaseLayout', () => {
  it('should contain main and header', () => {
    const { container } = render(<BaseLayout />, { wrapper: BrowserRouter });
    expect(container.querySelector('main')).toBeInTheDocument();
    expect(container.querySelector('header')).toBeInTheDocument();
  });
});

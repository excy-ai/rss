import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';

describe('AboutUsPage', () => {
  it('should contains Go Home', () => {
    render(<AboutUsPage />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Go Home/i)).toBeInTheDocument();
  });
});

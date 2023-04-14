import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';

describe('AboutUsPage', () => {
  it('should contains Go Home', () => {
    render(<AboutUsPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Go Home/i)).toBeInTheDocument();
  });
});

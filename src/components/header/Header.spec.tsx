import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from 'components/header/Header';

describe('Header', () => {
  it('should contain text elements', () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Main/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
});

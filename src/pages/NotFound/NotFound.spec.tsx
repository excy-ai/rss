import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound';

describe('NotFound', () => {
  it('should contain 404 page specific texts', () => {
    render(<NotFound />, { wrapper: BrowserRouter });
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go Home/i)).toBeInTheDocument();
  });
});

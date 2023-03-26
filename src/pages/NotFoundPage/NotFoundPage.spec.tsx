import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

describe('NotFoundPage', () => {
  it('should contain 404 page specific texts', () => {
    render(<NotFoundPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/Go Home/i)).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';
import { BrowserRouter } from 'react-router-dom';

describe('AboutUsPage', () => {
  it('should contains Go Home', () => {
    render(<AboutUsPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Go Home/i)).toBeInTheDocument();
  });
});

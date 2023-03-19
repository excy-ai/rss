import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from 'pages/AboutUs/AboutUs';
import { BrowserRouter } from 'react-router-dom';

describe('AboutUs', () => {
  it('should contains Go Home', () => {
    render(<AboutUs />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Go Home/i)).toBeInTheDocument();
  });
});

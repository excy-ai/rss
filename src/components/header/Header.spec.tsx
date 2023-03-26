import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/header/Header';

describe('Header', () => {
  it('should contain text elements', () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText(/MainPage/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';

describe('MainPage', () => {
  it('should contains search & cards', () => {
    render(<MainPage />, { wrapper: BrowserRouter });
    expect(screen.getByText('Breed filter')).toBeInTheDocument();
    expect(screen.getByText('Abyssinian')).toBeInTheDocument();
  });
  it('should not contain extra card if search input filled', () => {
    render(<MainPage />, { wrapper: BrowserRouter });
    expect(screen.getByText('Breed filter')).toBeInTheDocument();
    expect(screen.getByText('Abyssinian')).toBeInTheDocument();
    expect(screen.getByText('Siberian')).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText(/type something/i), {
      target: { value: 'Abys' },
    });
    expect(screen.getByText('Abyssinian')).toBeInTheDocument();
    expect(screen.queryByText('Siberian')).toBeNull();
  });
});

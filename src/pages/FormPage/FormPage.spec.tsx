import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FormPage from 'pages/FormPage/FormPage';

describe('FormPage', () => {
  it('', () => {
    render(<FormPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/_/i)).toBeInTheDocument();
  });
});

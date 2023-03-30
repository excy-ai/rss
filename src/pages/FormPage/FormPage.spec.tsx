import React from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import FormPage from 'pages/FormPage/FormPage';

describe('FormPage', () => {
  it('FormPage renders', () => {
    render(<FormPage />, { wrapper: BrowserRouter });
  });
});

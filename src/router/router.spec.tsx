import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { routesConfig } from 'router/router';

describe('router', () => {
  it('should open 404 page', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/aboba'],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
  });
});

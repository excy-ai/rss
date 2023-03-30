import React from 'react';

import { createBrowserRouter, Navigate } from 'react-router-dom';

import BaseLayout from 'components/layouts/base/BaseLayout';
import pages from 'pages';
import routes from 'router/routes';

const router = createBrowserRouter([
  {
    path: routes.main,
    element: <BaseLayout />,
    children: [
      {
        path: routes.main,
        element: pages.Main,
      },
      {
        path: routes.aboutUs,
        element: pages.AboutUs,
      },
      {
        path: routes.form,
        element: pages.Form,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={routes.notFound} />,
  },
  {
    path: routes.notFound,
    element: pages.NotFound,
  },
]);

export default router;

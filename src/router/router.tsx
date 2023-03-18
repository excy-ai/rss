import { createBrowserRouter, Navigate } from 'react-router-dom';
import React from 'react';
import pages from 'pages';
import BaseLayout from 'components/layouts/base/BaseLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: pages.Main,
      },
      {
        path: 'about',
        element: pages.AboutUs,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/404'} />,
  },
  {
    path: '/404',
    element: pages.NotFound,
  },
]);

export default router;

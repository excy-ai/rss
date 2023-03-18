import { createBrowserRouter, Navigate } from 'react-router-dom';
import React from 'react';
import pages from 'pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: pages.Main,
  },
  {
    path: '/about',
    element: pages.AboutUs,
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

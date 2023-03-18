import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Main from 'pages/Main/Main';
import NotFound from 'pages/NotFound/NotFound';
import AboutUs from 'pages/AboutUs/AboutUs';
import BaseLayout from 'components/layouts/base/BaseLayout';

import './index.css';

const withLayout = (Layout: typeof React.Component, element: React.ReactNode) => (
  <Layout>{element}</Layout>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: withLayout(BaseLayout, <Main />),
  },
  {
    path: '/about',
    element: withLayout(BaseLayout, <AboutUs />),
  },
  {
    path: '*',
    element: <Navigate to={'/404'} />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

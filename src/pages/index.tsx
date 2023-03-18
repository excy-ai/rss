import React from 'react';
import Main from 'pages/Main/Main';
import NotFound from 'pages/NotFound/NotFound';
import AboutUs from 'pages/AboutUs/AboutUs';
import BaseLayout from 'components/layouts/base/BaseLayout';

const withLayout = (Layout: typeof React.Component, element: React.ReactNode) => (
  <Layout>{element}</Layout>
);

export default {
  Main: withLayout(BaseLayout, <Main />),
  NotFound: <NotFound />,
  AboutUs: withLayout(BaseLayout, <AboutUs />),
};

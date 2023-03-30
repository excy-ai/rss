import React, { FC } from 'react';

import { Outlet } from 'react-router-dom';

import Header from 'components/header/Header';

import 'components/layouts/base/BaseLayout.scss';

const BaseLayout: FC = () => (
  <>
    <Header />
    <main className={'main'}>
      <Outlet />
    </main>
  </>
);

export default BaseLayout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/header/Header';

import './BaseLayout.css';

class BaseLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className={'main'}>
          <Outlet />
        </main>
      </React.Fragment>
    );
  }
}

export default BaseLayout;

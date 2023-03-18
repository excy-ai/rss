import React from 'react';
import Header from 'components/header/Header';

import './BaseLayout.css';

interface BaseLayoutProps {
  children: React.ReactNode;
}

class BaseLayout extends React.Component<BaseLayoutProps, Record<string, never>> {
  render() {
    return (
      <main className={'main'}>
        <Header />
        {this.props.children}
      </main>
    );
  }
}

export default BaseLayout;

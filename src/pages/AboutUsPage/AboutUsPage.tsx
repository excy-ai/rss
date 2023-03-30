import React from 'react';
import { Link } from 'react-router-dom';

import 'pages/AboutUsPage/AboutUsPage.scss';

class AboutUsPage extends React.Component<Record<string, never>, Record<string, never>> {
  render() {
    return (
      <div className={'about-us-container'}>
        <Link to={'/'}>Go Home</Link>
      </div>
    );
  }
}

export default AboutUsPage;

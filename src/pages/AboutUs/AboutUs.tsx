import React from 'react';
import { Link } from 'react-router-dom';

import './AboutUs.css';

class AboutUs extends React.Component<Record<string, never>, Record<string, never>> {
  render() {
    return (
      <div className={'about-us-container'}>
        <Link to={'/'}>Go Home</Link>
      </div>
    );
  }
}

export default AboutUs;

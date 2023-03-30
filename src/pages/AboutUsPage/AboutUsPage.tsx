import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import 'pages/AboutUsPage/AboutUsPage.scss';

const AboutUsPage: FC = () => (
  <div className={'about-us-container'}>
    <Link to={'/'}>Go Home</Link>
  </div>
);

export default AboutUsPage;

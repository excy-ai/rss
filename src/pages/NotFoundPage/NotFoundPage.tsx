import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import 'pages/NotFoundPage/NotFoundPage.scss';

const NotFoundPage: FC = () => (
  <div className={'not-found-container'}>
    <span>
      <b>404</b>
    </span>
    <span>Not Found</span>
    <Link to={'/'}>Go Home</Link>
  </div>
);

export default NotFoundPage;

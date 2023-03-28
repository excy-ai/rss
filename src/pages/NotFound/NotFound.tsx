import React from 'react';
import { Link } from 'react-router-dom';

import 'pages/NotFound/NotFound.scss';

class NotFound extends React.Component<Record<string, never>, Record<string, never>> {
  render() {
    return (
      <div className={'not-found-container'}>
        <span>
          <b>404</b>
        </span>
        <span>Not Found</span>
        <Link to={'/'}>Go Home</Link>
      </div>
    );
  }
}

export default NotFound;

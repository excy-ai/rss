import { FC } from 'react';

import { BallTriangle } from 'react-loader-spinner';

interface BaseLoaderProps {
  color?: string;
}

const BaseLoader: FC<BaseLoaderProps> = ({ color }) => (
  <BallTriangle
    height={100}
    width={100}
    radius={5}
    color={color || '#363636'}
    ariaLabel="ball-triangle-loading"
    visible
  />
);

export default BaseLoader;

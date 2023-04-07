import { ReactEventHandler } from 'react';

export { v4 as generateId } from 'uuid';

export const onImageError: ReactEventHandler<HTMLImageElement> = ({ currentTarget }) => {
  currentTarget.onerror = null;
  currentTarget.src = './not-found-image.jpg';
};

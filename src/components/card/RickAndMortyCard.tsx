import { FC, useState } from 'react';

import { createPortal } from 'react-dom';

import CardField from 'components/card/CardField';
import Popup from 'components/popup/Popup';
import { RickAndMortyCardProps } from 'types';
import { onImageError } from 'utils';

import 'components/card/Card.scss';

const getTitle = (title: string) => (title.length > 25 ? title.substring(0, 25) : title);

const CardDetails: FC<RickAndMortyCardProps> = ({ id, name, status, species, gender, image }) => {
  const title = getTitle(name);

  return (
    <div className="card-popup">
      <h3>{title}</h3>
      <CardField caption="ID">{id}</CardField>
      <CardField caption="Status">{status}</CardField>
      <CardField caption="Species">{species}</CardField>
      <CardField caption="Gender">{gender}</CardField>
      <img className={'card-popup__image'} src={image} onError={onImageError} alt={title} />
    </div>
  );
};

const RickAndMortyCard: FC<RickAndMortyCardProps> = (props) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const togglePopup = () => setIsPopupOpened(!isPopupOpened);

  const { id, name, image } = props;
  const title = getTitle(name);
  const popupInfo = (
    <Popup onBackgroundClick={togglePopup}>
      <CardDetails {...props} />
    </Popup>
  );

  return (
    <>
      <div className="card" onClick={togglePopup}>
        <h3>{title}</h3>
        <CardField caption="ID">{id}</CardField>
        <img className={'card__image'} src={image} onError={onImageError} alt={title} />
      </div>
      {isPopupOpened && createPortal(popupInfo, document.body)}
    </>
  );
};

export default RickAndMortyCard;

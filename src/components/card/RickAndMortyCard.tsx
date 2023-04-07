import { FC, useState } from 'react';

import { createPortal } from 'react-dom';

import CardField from 'components/card/CardField';
import Popup from 'components/popup/Popup';
import { RickAndMortyCardProps } from 'types';
import { onImageError } from 'utils';

import 'components/card/Card.scss';

const RickAndMortyCard: FC<RickAndMortyCardProps> = (props) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const togglePopup = () => setIsPopupOpened(!isPopupOpened);
  const { id, name, status, species, gender, image } = props;
  const title = name.length > 25 ? name.substring(0, 25) : name;
  const popupInfo = (
    <Popup onBackgroundClick={togglePopup}>
      <div className="card-popup">
        <h3>{title}</h3>
        <CardField caption="ID">{id}</CardField>
        <CardField caption="Status">{status}</CardField>
        <CardField caption="Species">{species}</CardField>
        <CardField caption="Gender">{gender}</CardField>
        <img className={'card-popup__image'} src={image} onError={onImageError} alt={title} />
      </div>
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

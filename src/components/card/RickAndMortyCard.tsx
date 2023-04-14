import { FC, useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

import { rickAndMortyApiClient } from 'api/RickAndMortyApiClient';
import CardField from 'components/card/CardField';
import BaseLoader from 'components/loader/BaseLoader';
import Popup from 'components/popup/Popup';
import { RickAndMortyCardProps } from 'types';
import { onImageError } from 'utils';

import 'components/card/Card.scss';

const getTitle = (title: string) => (title.length > 25 ? title.substring(0, 25) : title);

const CardDetails: FC<RickAndMortyCardProps> = ({ id, name }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [card, setCard] = useState<RickAndMortyCardProps | null>(null);
  const title = getTitle(name);

  useEffect(() => {
    rickAndMortyApiClient
      .getCharacter(id)
      .then((card) => {
        setCard(card);
        setIsLoading(false);
      })
      .catch(() => {
        setCard(null);
        setIsLoading(false);
      });
  }, [id]);

  const cardDetailsData = card ? (
    <>
      <h3>{title}</h3>
      <CardField caption="ID">{card.id}</CardField>
      <CardField caption="Status">{card.status}</CardField>
      <CardField caption="Species">{card.species}</CardField>
      <CardField caption="Gender">{card.gender}</CardField>
      <img className={'card-popup__image'} src={card.image} onError={onImageError} alt={title} />
    </>
  ) : (
    <p>Failed to load card data</p>
  );
  return (
    <div className="card-popup">{isLoading ? <BaseLoader color="#000000" /> : cardDetailsData}</div>
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

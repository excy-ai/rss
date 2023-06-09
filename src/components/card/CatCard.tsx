import { FC } from 'react';

import { Link } from 'react-router-dom';

import CardField from 'components/card/CardField';
import { CatCardProps } from 'types';
import { onImageError } from 'utils';

import 'components/card/Card.scss';

const CatCard: FC<CatCardProps> = (props) => {
  const {
    reference_image_id,
    origin,
    country_code,
    weight,
    wikipedia_url,
    name,
    description,
    life_span,
    date,
    temperament,
    image_url,
  } = props;
  const flagUrl = `https://flagcdn.com/${country_code.toLowerCase()}.svg`;
  const imageUrl = reference_image_id
    ? `https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`
    : image_url;
  const title = name.length > 25 ? name.substring(0, 25) : name;
  return (
    <div className="card">
      <h3>{title}</h3>
      <img className={'card__image'} src={imageUrl} onError={onImageError} alt={title} />
      <div className="card__description">
        {description ? <details>{description}</details> : <div className="details-gap" />}
        {date && <CardField caption="Date of invention">{date}</CardField>}
        <CardField caption={'Country'}>
          <img
            className="country-image"
            src={flagUrl}
            alt={'flag'}
            height="20px"
            width="30px"
            onError={onImageError}
          />
          {origin}
        </CardField>
        <CardField caption="Weight">{weight} kg</CardField>
        <CardField caption="Avg life span">{life_span}</CardField>
        <CardField caption="Temperament">{temperament}</CardField>
      </div>
      {wikipedia_url && (
        <Link target="_blank" to={wikipedia_url}>
          WIKI
        </Link>
      )}
    </div>
  );
};

export default CatCard;

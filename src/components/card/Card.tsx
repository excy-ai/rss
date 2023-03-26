import React, { ReactEventHandler } from 'react';
import { Link } from 'react-router-dom';
import CardField from 'components/card/CardField';
import { CardProps } from 'types';

import 'components/card/Card.scss';

class Card extends React.Component<CardProps> {
  onImageError: ReactEventHandler<HTMLImageElement> = ({ currentTarget }) => {
    currentTarget.onerror = null;
    currentTarget.src = './not-found-image.jpg';
  };

  render() {
    const flagUrl = `https://flagcdn.com/${this.props.country_code.toLowerCase()}.svg`;
    const imageUrl = this.props.reference_image_id
      ? `https://cdn2.thecatapi.com/images/${this.props.reference_image_id}.jpg`
      : this.props.image_url;
    return (
      <div className="card">
        <h3>{this.props.name}</h3>
        <img
          className={'card__image'}
          src={imageUrl}
          onError={this.onImageError}
          alt={this.props.name}
        />
        <div className="card__description">
          {this.props.description ? (
            <details>{this.props.description}</details>
          ) : (
            <div className="details-gap" />
          )}
          {this.props.date && <CardField caption="Date of invention">{this.props.date}</CardField>}
          <CardField caption={'Country'}>
            <img
              className="country-image"
              src={flagUrl}
              alt={'flag'}
              height="20px"
              width="30px"
              onError={this.onImageError}
            />
            {this.props.origin}
          </CardField>
          <CardField caption="Weight">{this.props.weight} kg</CardField>
          <CardField caption="Avg life span">{this.props.life_span}</CardField>
          <CardField caption="Temperament">{this.props.temperament}</CardField>
        </div>
        {this.props.wikipedia_url && (
          <Link target="_blank" to={this.props.wikipedia_url}>
            WIKI
          </Link>
        )}
      </div>
    );
  }
}

export default Card;

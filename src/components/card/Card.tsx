import React from 'react';
import { Link } from 'react-router-dom';
import CardField from 'components/card/CardField';

import './Card.css';

type CardState = Record<string, never>;

interface CardProps {
  weight: string;
  name: string;
  temperament: string;
  origin: string;
  country_code: string;
  description?: string;
  life_span: string;
  wikipedia_url: string;
  reference_image_id: string;
}

class Card extends React.Component<CardProps, CardState> {
  render() {
    const flagUrl = `https://flagcdn.com/${this.props.country_code.toLowerCase()}.svg`;
    return (
      <div className="card">
        <h3>{this.props.name}</h3>
        <img
          className={'card__image'}
          src={`https://cdn2.thecatapi.com/images/${this.props.reference_image_id}.jpg`}
          alt={this.props.name}
        />
        <div className="card__description">
          {this.props.description ? (
            <details>{this.props.description}</details>
          ) : (
            <div className="details-gap" />
          )}
          <CardField caption={'Country'}>
            <img className="country-image" src={flagUrl} alt={'flag'} height="20px" width="30px" />
            {this.props.origin}
          </CardField>
          <CardField caption="Weight">{this.props.weight} kg</CardField>
          <CardField caption="Avg life span">{this.props.life_span}</CardField>
          <CardField caption="Temperament">{this.props.temperament}</CardField>
        </div>
        <Link target="_blank" to={this.props.wikipedia_url}>
          WIKI
        </Link>
      </div>
    );
  }
}

export default Card;

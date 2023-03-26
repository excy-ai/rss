import React from 'react';
import { CardFieldProps } from 'types';

import 'components/card/CardField.scss';

class CardField extends React.Component<CardFieldProps> {
  render() {
    return (
      <p className="card__field">
        <strong className="field__caption">{this.props.caption}: </strong>
        <span className="field__text">{this.props.children}</span>
      </p>
    );
  }
}

export default CardField;

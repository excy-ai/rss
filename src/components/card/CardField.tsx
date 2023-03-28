import React from 'react';

import 'components/card/CardField.scss';

type CardFieldState = Record<string, never>;

interface CardFieldProps {
  caption: string;
  children: string | React.ReactNode;
}

class CardField extends React.Component<CardFieldProps, CardFieldState> {
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

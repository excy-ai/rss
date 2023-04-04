import { FC } from 'react';

import { CardFieldProps } from 'types';

import 'components/card/CardField.scss';

const CardField: FC<CardFieldProps> = (props) => (
  <p className="card__field">
    <strong className="field__caption">{props.caption}: </strong>
    <span className="field__text">{props.children}</span>
  </p>
);

export default CardField;

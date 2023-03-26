import * as React from 'react';
import { CardProps } from 'types';
import Card from 'components/card/Card';
import classNames from 'classnames';

import './CardList.scss';

type CardListProps = {
  data: CardProps[];
  className?: string;
};

export class CardList extends React.Component<CardListProps> {
  render() {
    return (
      <div className={classNames('card-list', this.props.className)}>
        {this.props.data.map((it) => (
          <Card key={it.name} {...it} />
        ))}
      </div>
    );
  }
}

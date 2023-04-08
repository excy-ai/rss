import { FC } from 'react';

import classNames from 'classnames';

import Card from 'components/card/Card';
import { CardProps } from 'types';

import './CardList.scss';

type CardListProps = {
  data: CardProps[];
  className?: string;
};

export const CardList: FC<CardListProps> = (props) => (
  <div className={classNames('card-list', props.className)}>
    {props.data.map((it) => (
      <Card key={it.id || it.name} {...it} />
    ))}
  </div>
);

import { FC } from 'react';

import classNames from 'classnames';

import CatCard from 'components/card/CatCard';
import { CatCardProps } from 'types';

import './CardList.scss';

type CardListProps = {
  data: CatCardProps[];
  className?: string;
};

export const CatCardList: FC<CardListProps> = (props) => (
  <div className={classNames('card-list', props.className)}>
    {props.data.map((it) => (
      <CatCard key={it.id || it.name} {...it} />
    ))}
  </div>
);

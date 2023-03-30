import React, { FC, useState } from 'react';

import { lifespans, temperaments, weights } from 'api/values.json';
import { CardList } from 'components/card/CardList';
import AddCardForm from 'components/form/AddCardForm';
import { CardProps } from 'types';

import 'pages/FormPage/FormPage.scss';

const FormPage: FC = () => {
  const [cards, setCards] = useState<CardProps[]>([]);

  const handleSubmit = (card: CardProps) => {
    setCards([...cards, card]);
  };
  return (
    <>
      <div className="form-page">
        <aside className="form-page__sidebar">
          <AddCardForm
            weights={weights}
            temperaments={temperaments}
            lifespans={lifespans}
            handleSubmit={handleSubmit}
          />
        </aside>
        <CardList data={cards} className="form-page__content" />
      </div>
    </>
  );
};

export default FormPage;

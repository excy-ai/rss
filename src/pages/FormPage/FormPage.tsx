import { FC, useState } from 'react';

import { lifespans, temperaments, weights } from 'api/values.json';
import { CatCardList } from 'components/card/CatCardList';
import AddCardForm from 'components/form/AddCardForm';
import { CatCardProps } from 'types';

import 'pages/FormPage/FormPage.scss';

const FormPage: FC = () => {
  const [cards, setCards] = useState<CatCardProps[]>([]);

  const handleSubmit = (card: CatCardProps) => {
    setCards([...cards, card]);
  };
  return (
    <div className="form-page">
      <aside className="form-page__sidebar">
        <AddCardForm
          weights={weights}
          temperaments={temperaments}
          lifespans={lifespans}
          handleSubmit={handleSubmit}
        />
      </aside>
      <CatCardList data={cards} className="form-page__content" />
    </div>
  );
};

export default FormPage;

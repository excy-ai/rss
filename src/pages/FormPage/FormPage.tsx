import { FC } from 'react';

import { lifespans, temperaments, weights } from 'api/values.json';
import { CatCardList } from 'components/card/CatCardList';
import AddCardForm from 'components/form/AddCardForm';
import { useAppSelector } from 'hooks/redux';
import { useActions } from 'hooks/useActions';
import { selectFormCards } from 'store/slices/formSlice';

import 'pages/FormPage/FormPage.scss';

const FormPage: FC = () => {
  const cards = useAppSelector(selectFormCards);
  const { addFormCard } = useActions();

  return (
    <div className="form-page">
      <aside className="form-page__sidebar">
        <AddCardForm
          weights={weights}
          temperaments={temperaments}
          lifespans={lifespans}
          handleSubmit={addFormCard}
        />
      </aside>
      <CatCardList data={cards} className="form-page__content" />
    </div>
  );
};

export default FormPage;

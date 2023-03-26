import React from 'react';
import { lifespans, temperaments, weights } from 'api/values.json';
import { AddCardForm } from 'components/form/AddCardForm';
import { CardProps, FormPageState } from 'types';
import { CardList } from 'components/card/CardList';

import 'pages/FormPage/FormPage.scss';

class FormPage extends React.Component<Record<string, never>, FormPageState> {
  state: FormPageState = {
    cards: [],
  };

  handleSubmit = (card: CardProps) => {
    this.setState({
      cards: [...this.state.cards, card],
    });
  };

  render() {
    return (
      <>
        <div className="form-page">
          <aside className="form-page__sidebar">
            <AddCardForm
              weights={weights}
              temperaments={temperaments}
              lifespans={lifespans}
              handleSubmit={this.handleSubmit}
            />
          </aside>
          <CardList data={this.state.cards} className="form-page__content" />
        </div>
      </>
    );
  }
}

export default FormPage;

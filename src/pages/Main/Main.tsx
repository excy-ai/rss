import React from 'react';
import Search from 'components/search/Search';
import Card from 'components/card/Card';
import data from 'api/data.json';

import 'pages/Main/Main.css';

type AppState = {
  query: string;
};

class Main extends React.Component<Record<string, never>, AppState> {
  state: AppState = {
    query: '',
  };

  render() {
    return (
      <main className="main">
        <Search onChange={(query) => this.setState({ query })} />
        <div className="card-list-container">
          {data
            .filter(
              (it) =>
                this.state.query.trim().length === 0 ||
                it.name.toLowerCase().includes(this.state.query.trim().toLowerCase())
            )
            .map((it) => (
              <Card key={it.id} {...it} />
            ))}
        </div>
      </main>
    );
  }
}

export default Main;

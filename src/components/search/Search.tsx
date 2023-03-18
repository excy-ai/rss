import React from 'react';

import './Search.css';

const QUERY_KEY = 'query';

interface SearchState {
  query: string;
}

interface SearchProps {
  onChange?: (query: string) => void;
}

class Search extends React.Component<SearchProps, SearchState> {
  state: SearchState = {
    query: localStorage.getItem(QUERY_KEY) || '',
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    this.setState({ query: query });
    this.props.onChange?.(query);
  };

  componentDidMount() {
    this.props.onChange?.(this.state.query);
  }

  componentWillUnmount() {
    localStorage.setItem(QUERY_KEY, this.state.query);
  }

  render() {
    return (
      <div className={'search-bar'}>
        <label htmlFor={'main-label'} className={'search-label'}>
          Breed filter
        </label>
        <input
          id={'main-search'}
          className={'search-input'}
          placeholder={'type something...'}
          value={this.state.query}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Search;

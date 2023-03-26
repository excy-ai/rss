import React from 'react';
import { SearchProps, SearchState } from 'types';

import 'components/search/Search.scss';

const QUERY_KEY = 'query';

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
        <label htmlFor={'main-search'} className={'search-label'}>
          Breed filter
          <input
            id={'main-search'}
            className={'search-input'}
            placeholder={'type something...'}
            value={this.state.query}
            onChange={this.onChange}
          />
        </label>
      </div>
    );
  }
}

export default Search;

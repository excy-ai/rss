import React, { FC } from 'react';

import { SearchProps } from 'types';

import 'components/search/Search.scss';

const Search: FC<SearchProps> = (props) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(event.target.value);
  };

  return (
    <div className={'search-bar'}>
      <label htmlFor={'main-search'} className={'search-label'}>
        Breed filter
        <input
          id={'main-search'}
          className={'search-input'}
          placeholder={'type something...'}
          value={props.query}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Search;

import { ChangeEvent, FC, useState } from 'react';

import { SearchProps } from 'types';

import 'components/search/Search.scss';

const Search: FC<SearchProps> = (props) => {
  const [query, setQuery] = useState('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div
      className={'search-bar'}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          props.onSearch?.(query);
        }
      }}
    >
      <label htmlFor={'main-search'} className={'search-label'}>
        Rick And Morty character search
        <input
          id={'main-search'}
          className={'search-input'}
          placeholder={'type something...'}
          ref={props.refProp}
          value={query}
          onChange={onChange}
        />
      </label>
      <button
        id={'main-search'}
        className={'search-input__button'}
        onClick={() => {
          props.onSearch?.(props.refProp?.current?.value || '');
        }}
      />
    </div>
  );
};

export default Search;

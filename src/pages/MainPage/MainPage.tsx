import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { debounce } from 'lodash';

import { rickAndMortyApiClient } from 'api/RickAndMortyApiClient';
import RickAndMortyCard from 'components/card/RickAndMortyCard';
import BaseLoader from 'components/loader/BaseLoader';
import Search from 'components/search/Search';
import { RickAndMortyCardProps } from 'types';

import 'pages/MainPage/MainPage.scss';

const QUERY_KEY = 'query';

const MainPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<RickAndMortyCardProps[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(localStorage.getItem(QUERY_KEY) || '');
  useEffect(() => {
    const inputRefClosure = { ...inputRef };
    return () => {
      localStorage.setItem(QUERY_KEY, inputRefClosure.current?.value || '');
    };
  }, []);

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        rickAndMortyApiClient
          .getCharacters(value)
          .then((cards) => {
            setCards(cards);
            setIsLoading(false);
          })
          .catch(() => {
            setCards([]);
            setIsLoading(false);
          });
      }, 750),
    []
  );

  const handleSearch = useCallback((query: string) => {
    setQuery(query);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    debouncedSearch(query);
  }, [debouncedSearch, query]);
  const cardList = (
    <>
      {cards.length ? (
        cards.map((it) => <RickAndMortyCard key={it.id} {...it} />)
      ) : (
        <p>There is nothing here</p>
      )}
    </>
  );
  return (
    <main className="main">
      <Search refProp={inputRef} query={query} onSearch={handleSearch} />
      <div className="card-list-container">{isLoading ? <BaseLoader /> : cardList}</div>
    </main>
  );
};

export default MainPage;

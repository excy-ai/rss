import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { debounce } from 'lodash';

import {
  rickAndMortyApiClient,
  RickAndMortyApiResponse,
  rickAndMortyApiRoutes,
} from 'api/RickAndMortyApiClient';
import RickAndMortyCard from 'components/card/RickAndMortyCard';
import Search from 'components/search/Search';
import { RickAndMortyCardProps } from 'types';

import 'pages/MainPage/MainPage.scss';

const QUERY_KEY = 'query';

const MainPage: FC = () => {
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
          .get<RickAndMortyApiResponse<RickAndMortyCardProps>>(
            rickAndMortyApiRoutes.getCharacters,
            {
              params: {
                name: value,
              },
            }
          )
          .then((r) => r.data.results)
          .then(setCards)
          .catch(() => setCards([]));
      }, 750),
    []
  );

  const handleSearch = useCallback((query: string) => {
    setQuery(query);
  }, []);

  useEffect(() => debouncedSearch(query), [debouncedSearch, query]);

  return (
    <main className="main">
      <Search refProp={inputRef} query={query} onSearch={handleSearch} />
      <div className="card-list-container">
        {cards.length ? (
          cards.map((it) => <RickAndMortyCard key={it.id} {...it} />)
        ) : (
          <p>There is nothing here</p>
        )}
      </div>
    </main>
  );
};

export default MainPage;

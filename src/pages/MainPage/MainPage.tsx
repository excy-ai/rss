import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { debounce } from 'lodash';
import { BallTriangle } from 'react-loader-spinner';

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
          .get<RickAndMortyApiResponse<RickAndMortyCardProps>>(
            rickAndMortyApiRoutes.getCharacters,
            {
              params: {
                name: value,
              },
            }
          )
          .then((r) => r.data.results)
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
  const spinner = (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#363636"
      ariaLabel="ball-triangle-loading"
      visible
    />
  );
  return (
    <main className="main">
      <Search refProp={inputRef} query={query} onSearch={handleSearch} />
      <div className="card-list-container">{isLoading ? spinner : cardList}</div>
    </main>
  );
};

export default MainPage;

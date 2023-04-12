import { FC } from 'react';

import { useDebounce } from 'use-debounce';

import RickAndMortyCard from 'components/card/RickAndMortyCard';
import BaseLoader from 'components/loader/BaseLoader';
import Search from 'components/search/Search';
import { useAppSelector } from 'hooks/redux';
import { useActions } from 'hooks/useActions';
import { useFetchCardsQuery } from 'services/RickAndMortyService';
import { selectQuery } from 'store/slices/mainSlice';

import 'pages/MainPage/MainPage.scss';

const MainPage: FC = () => {
  const query = useAppSelector(selectQuery);
  const { setQuery } = useActions();
  const [debouncedQuery] = useDebounce(query, 750);
  const { data, isFetching, error } = useFetchCardsQuery(debouncedQuery);
  const cards = data || [];
  const cardList = error ? (
    <p>{'There is nothing here'}</p>
  ) : (
    <>
      {cards.map((it) => (
        <RickAndMortyCard key={it.id} {...it} />
      ))}
    </>
  );
  return (
    <main className="main">
      <Search query={query} onSearch={setQuery} />
      <div className="card-list-container">{isFetching ? <BaseLoader /> : cardList}</div>
    </main>
  );
};

export default MainPage;

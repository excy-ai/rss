import { FC, useEffect, useRef, useState } from 'react';

import data from 'api/data.json';
import Card from 'components/card/Card';
import Search from 'components/search/Search';

import 'pages/MainPage/MainPage.scss';

const QUERY_KEY = 'query';

const MainPage: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(localStorage.getItem(QUERY_KEY) || '');
  useEffect(() => {
    const inputRefClosure = { ...inputRef };
    return () => {
      localStorage.setItem(QUERY_KEY, inputRefClosure.current?.value || '');
    };
  }, []);
  return (
    <main className="main">
      <Search refProp={inputRef} query={query} onChange={(query) => setQuery(query)} />
      <div className="card-list-container">
        {data
          .filter(
            (it) =>
              query.trim().length === 0 ||
              it.name.toLowerCase().includes(query.trim().toLowerCase())
          )
          .map((it) => (
            <Card key={it.id} {...it} />
          ))}
      </div>
    </main>
  );
};

export default MainPage;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RickAndMortyCardProps } from 'types';

export const rickAndMortyService = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: (build) => ({
    fetchCards: build.query<RickAndMortyCardProps[], string>({
      query: (filterText = '') => ({
        url: '/character',
        params: {
          name: filterText,
        },
      }),
      transformResponse: (response: { results: RickAndMortyCardProps[] }) => response.results,
    }),
    fetchCardDetails: build.query<RickAndMortyCardProps, string>({
      query: (id = '') => ({
        url: `/character/${id}`,
      }),
    }),
  }),
});

export const { useFetchCardsQuery, useFetchCardDetailsQuery } = rickAndMortyService;

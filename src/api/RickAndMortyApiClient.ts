import axios from 'axios';

import { RickAndMortyCardProps } from 'types';

const rickAndMortyAxios = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 3000,
});

export const rickAndMortyApiClient = {
  getCharacters: (filter: string) =>
    rickAndMortyAxios
      .get<RickAndMortyApiPagingResponse<RickAndMortyCardProps>>('character/', {
        params: {
          name: filter,
        },
      })
      .then((r) => r.data.results),
  getCharacter: (id: string) =>
    rickAndMortyAxios.get<RickAndMortyCardProps>(`character/${id}`).then((r) => r.data),
};

export interface RickAndMortyApiErrorResponse {
  error: string;
}

export interface RickAndMortyApiPagingResponse<T> {
  info: {
    count: number;
    page: number;
    next: string;
    prev: string | null;
  };
  results: T[];
}

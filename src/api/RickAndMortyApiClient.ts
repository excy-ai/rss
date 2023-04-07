import axios from 'axios';

export const rickAndMortyApiClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 3000,
});

export const rickAndMortyApiRoutes = {
  getCharacters: 'character/',
};

export interface RickAndMortyApiErrorResponse {
  error: string;
}

export interface RickAndMortyApiResponse<T> {
  info: {
    count: number;
    page: number;
    next: string;
    prev: string | null;
  };
  results: T[];
}

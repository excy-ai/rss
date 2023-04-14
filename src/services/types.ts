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

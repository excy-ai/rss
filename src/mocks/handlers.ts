import { rest } from 'msw';

import { cardsListResponseMock, errorResponseMock } from 'mocks/apiMocks';
import { RickAndMortyApiErrorResponse, RickAndMortyApiPagingResponse } from 'services/types';
import { RickAndMortyCardProps } from 'types';

export const handlersMap = {
  successList: rest.get('https://rickandmortyapi.com/api/character', (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json<RickAndMortyApiPagingResponse<RickAndMortyCardProps>>(cardsListResponseMock)
    )
  ),
  successSingle: rest.get('https://rickandmortyapi.com/api/character/120', (_, res, ctx) =>
    res(ctx.status(200), ctx.json<RickAndMortyCardProps>(cardsListResponseMock.results[0]))
  ),
  error: rest.get('https://rickandmortyapi.com/api/character', (_, res, ctx) =>
    res(ctx.status(404), ctx.json<RickAndMortyApiErrorResponse>(errorResponseMock))
  ),
};

export const handlers = Object.values(handlersMap);

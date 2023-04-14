import { rest } from 'msw';

import { cardsListResponseMock } from 'mocks/apiMocks';
import { RickAndMortyApiPagingResponse } from 'services/types';
import { RickAndMortyCardProps } from 'types';

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json<RickAndMortyApiPagingResponse<RickAndMortyCardProps>>(cardsListResponseMock)
    )
  ),
];

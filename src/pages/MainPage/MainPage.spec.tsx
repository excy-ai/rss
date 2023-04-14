import { fireEvent, screen, waitFor } from '@testing-library/react';

import { cardsListResponseMock } from 'mocks/apiMocks';
import { handlersMap } from 'mocks/handlers';
import { server } from 'mocks/server';
import MainPage from 'pages/MainPage/MainPage';
import { renderWithProviders } from 'utils/test-utils';

describe('MainPage', () => {
  it('should contains search', () => {
    server.use(handlersMap.error);
    renderWithProviders(<MainPage />);
    expect(screen.getByText(/Rick And Morty/i)).toBeInTheDocument();
  });
  it('should show data loaded', async () => {
    server.use(handlersMap.error);
    renderWithProviders(<MainPage />);
    await waitFor(() => {
      expect(screen.queryByText(/There is nothing here/i)).toBeInTheDocument();
    });
  });
  it('should show no data loaded', async () => {
    server.use(handlersMap.successList);
    renderWithProviders(<MainPage />);
    await waitFor(() => {
      const cardIds = screen.queryAllByText(/ID/);
      expect(cardIds.length).toBe(cardsListResponseMock.results.length);
    });
  });
  it('should show opened popup on card click', async () => {
    server.use(handlersMap.successList, handlersMap.successSingle);
    renderWithProviders(<MainPage />);
    await waitFor(async () => {
      const card = screen.getByText(/Evil Summer Clone/i);
      expect(card).toBeInTheDocument();
      fireEvent.click(card);
      await waitFor(() => expect(screen.getByText(/Species/)).toBeInTheDocument());
    });
  });
});

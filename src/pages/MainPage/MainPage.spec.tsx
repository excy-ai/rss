import { fireEvent, screen, waitFor } from '@testing-library/react';

import MainPage from 'pages/MainPage/MainPage';
import { renderWithProviders } from 'utils/test-utils';

describe('MainPage', () => {
  it('should contains search', () => {
    // mockedAxios.get.mockRejectedValueOnce(errorResult);
    renderWithProviders(<MainPage />);
    expect(screen.getByText(/Rick And Morty/i)).toBeInTheDocument();
  });
  it('should show data loaded', async () => {
    // mockedAxios.get.mockRejectedValueOnce(errorResult);
    renderWithProviders(<MainPage />);
    await waitFor(() => {
      expect(screen.queryByText(/There is nothing here/i)).toBeInTheDocument();
      // expect(mockedAxios.get).toHaveBeenCalled();
    });
  });
  it('should show no data loaded', async () => {
    // mockedAxios.get.mockResolvedValueOnce({ data: dataResult });
    renderWithProviders(<MainPage />);
    await waitFor(() => {
      // expect(mockedAxios.get).toHaveBeenCalled();
      const cardIds = screen.queryAllByText(/ID/);
      // expect(cardIds.length).toBe(dataResult.results.length);
    });
  });
  it('should show opened popup on card click', async () => {
    // mockedAxios.get.mockResolvedValueOnce({ data: dataResult });
    // mockedAxios.get.mockResolvedValueOnce({ data: dataResult.results[1] });
    renderWithProviders(<MainPage />);
    await waitFor(async () => {
      // expect(mockedAxios.get).toHaveBeenCalled();
      const card = screen.getByText(/Evil Summer Clone/i);
      expect(card).toBeInTheDocument();
      fireEvent.click(card);
      await waitFor(() => expect(screen.getByText(/Species/)).toBeInTheDocument());
    });
  });
});

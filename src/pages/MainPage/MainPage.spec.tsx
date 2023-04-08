import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

import MainPage from 'pages/MainPage/MainPage';

const errorResult = {
  error: 'There is nothing here',
};

const dataResult = {
  results: [
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    },
    {
      id: 120,
      name: 'Evil Summer Clone',
      status: 'Dead',
      species: 'Human',
      type: 'Clone',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/120.jpeg',
    },
    {
      id: 219,
      name: 'Mechanical Summer',
      status: 'unknown',
      species: 'Robot',
      type: '',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/219.jpeg',
    },
    {
      id: 338,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/338.jpeg',
    },
    {
      id: 339,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/339.jpeg',
    },
    {
      id: 519,
      name: 'Wasp Summer',
      status: 'Alive',
      species: 'Animal',
      type: 'Wasp',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/519.jpeg',
    },
    {
      id: 629,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      type: 'Soulless Puppet',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/629.jpeg',
    },
    {
      id: 688,
      name: 'Scarecrow Summer',
      status: 'Dead',
      species: 'Robot',
      type: 'Decoy',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/688.jpeg',
    },
    {
      id: 695,
      name: 'Glockenspiel Summer',
      status: 'Dead',
      species: 'Robot',
      type: 'Decoy',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/695.jpeg',
    },
    {
      id: 700,
      name: 'Wicker Summer',
      status: 'Dead',
      species: 'Robot',
      type: 'Decoy',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/700.jpeg',
    },
    {
      id: 708,
      name: 'Squid Costume Summer',
      status: 'Dead',
      species: 'Robot',
      type: 'Decoy',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/708.jpeg',
    },
    {
      id: 716,
      name: 'Too Cute to Murder Summer',
      status: 'Dead',
      species: 'Robot',
      type: 'Decoy',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/716.jpeg',
    },
    {
      id: 10000,
      name: 'Too Cute to Murder Summer (Duplicate)',
      status: 'Dead',
      species: 'Robot',
      type: 'Decoy',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/716.jpeg',
    },
  ],
};

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('MainPage', () => {
  it('should contains search', () => {
    mockedAxios.get.mockRejectedValueOnce(errorResult);
    render(<MainPage />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Rick And Morty/i)).toBeInTheDocument();
  });
  it('should show no data loaded', async () => {
    mockedAxios.get.mockRejectedValueOnce(errorResult);
    render(<MainPage />, { wrapper: BrowserRouter });
    await waitFor(() => {
      expect(screen.queryByText(/There is nothing here/i)).toBeInTheDocument();
      expect(mockedAxios.get).toHaveBeenCalled();
    });
  });
  it('should show no data loaded', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: dataResult });
    render(<MainPage />, { wrapper: BrowserRouter });
    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalled();
      const cardIds = screen.queryAllByText(/ID/);
      expect(cardIds.length).toBe(dataResult.results.length);
    });
  });
  it('popupOpened', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: dataResult });
    render(<MainPage />, { wrapper: BrowserRouter });
    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalled();
      const card = screen.getByText(/Evil Summer Clone/);
      expect(card).toBeInTheDocument();
      fireEvent.click(card);
      expect(screen.getByText(/Species/)).toBeInTheDocument();
    });
  });
});

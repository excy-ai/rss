import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { CatCardList } from 'components/card/CatCardList';

const testCatListData = [
  {
    weight: '1',
    name: 'test',
    temperament: 'temper',
    origin: 'Russia',
    country_code: 'RU',
    life_span: '10',
    wikipedia_url: 'wiki',
    reference_image_id: '',
  },
];

describe('CatCardList', () => {
  it('should render cat card data', () => {
    render(<CatCardList data={testCatListData} />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Temperament/i)).toBeInTheDocument();
    expect(screen.getByText(testCatListData[0].name)).toBeInTheDocument();
  });
});

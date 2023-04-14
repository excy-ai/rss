import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CatCard from 'components/card/CatCard';

const testCatData = {
  weight: '1',
  name: 'test',
  temperament: 'temper',
  origin: 'Russia',
  country_code: 'RU',
  life_span: '10',
  wikipedia_url: 'wiki',
  reference_image_id: '',
};

describe('CatCard', () => {
  it('should contain card with fields', () => {
    render(<CatCard {...testCatData} />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Temperament/i)).toBeInTheDocument();
    expect(screen.getByText(testCatData.name)).toBeInTheDocument();
    const flagImg: HTMLImageElement = screen.getByAltText('flag');
    expect(flagImg.src).toContain(testCatData.country_code.toLowerCase());
    expect(screen.getByText(new RegExp(testCatData.wikipedia_url, 'i'))).toBeInTheDocument();
  });
  it('should contain no details', () => {
    const { container } = render(<CatCard {...testCatData} />, { wrapper: MemoryRouter });
    expect(container.querySelector('details')).toBeNull();
  });
  it('should contain details', () => {
    const { container } = render(<CatCard {...testCatData} description={'some description'} />, {
      wrapper: MemoryRouter,
    });
    expect(container.querySelector('details')).toBeInTheDocument();
  });
  it('should call image error', () => {
    render(<CatCard {...testCatData} />, { wrapper: MemoryRouter });
    fireEvent.error(screen.getByAltText(testCatData.name));
    const image: HTMLImageElement = screen.getByAltText(testCatData.name);
    expect(image.src).toContain('not-found');
  });
});

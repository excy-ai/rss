import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Card from 'components/card/Card';
import { BrowserRouter } from 'react-router-dom';

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

describe('Card', () => {
  it('should contain card with fields', () => {
    render(<Card {...testCatData} />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Temperament/i)).toBeInTheDocument();
    expect(screen.getByText(testCatData.name)).toBeInTheDocument();
    const flagImg: HTMLImageElement = screen.getByAltText('flag');
    expect(flagImg.src).toContain(testCatData.country_code.toLowerCase());
    expect(screen.getByText(new RegExp(testCatData.wikipedia_url, 'i'))).toBeInTheDocument();
  });
  it('should contain no details', () => {
    const { container } = render(<Card {...testCatData} />, { wrapper: BrowserRouter });
    expect(container.querySelector('details')).toBeNull();
  });
  it('should contain details', () => {
    const { container } = render(<Card {...testCatData} description={'some description'} />, {
      wrapper: BrowserRouter,
    });
    expect(container.querySelector('details')).toBeInTheDocument();
  });
  it('should call image error', () => {
    render(<Card {...testCatData} />, { wrapper: BrowserRouter });
    fireEvent.error(screen.getByAltText(testCatData.name));
    const image: HTMLImageElement = screen.getByAltText(testCatData.name);
    expect(image.src).toContain('not-found');
  });
});

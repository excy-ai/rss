import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Search from 'components/search/Search';

describe('Search', () => {
  const searchText = 'Siberian';
  const searchPlaceHolderRegex = /Type something/i;
  it('should contain input', () => {
    render(<Search />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(searchPlaceHolderRegex)).toBeInTheDocument();
  });
  it('should change input value', async () => {
    render(<Search />, { wrapper: MemoryRouter });
    expect(screen.queryByText(searchText)).toBeNull();
    fireEvent.change(screen.getByPlaceholderText(searchPlaceHolderRegex), {
      target: { value: searchText },
    });
    const input: HTMLInputElement = screen.getByPlaceholderText(searchPlaceHolderRegex);
    expect(input.value).toBe(searchText);
  });
  it('should call onChange prop on input change', () => {
    const onChangePropFn = jest.fn();
    render(<Search onSearch={onChangePropFn} />, { wrapper: MemoryRouter });
    fireEvent.click(screen.getByTestId(/main-search/i));
    expect(onChangePropFn).toHaveBeenCalled();
  });
  it('should call onChange prop on input change', () => {
    const onChangePropFn = jest.fn();
    render(<Search onSearch={onChangePropFn} />, { wrapper: MemoryRouter });
    fireEvent.keyDown(screen.getByTestId(/main-search/i), { key: 'Enter', code: 13, charCode: 13 });
    expect(onChangePropFn).toHaveBeenCalled();
  });
});

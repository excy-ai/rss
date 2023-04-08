import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Search from 'components/search/Search';

describe('Search', () => {
  const searchText = 'Siberian';
  const searchPlaceHolderRegex = /Type something/i;
  it('should contain input', () => {
    render(<Search />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(searchPlaceHolderRegex)).toBeInTheDocument();
  });
  it('should change input value', async () => {
    render(<Search />, { wrapper: BrowserRouter });
    expect(screen.queryByText(searchText)).toBeNull();
    fireEvent.change(screen.getByPlaceholderText(searchPlaceHolderRegex), {
      target: { value: searchText },
    });
    const input: HTMLInputElement = screen.getByPlaceholderText(searchPlaceHolderRegex);
    expect(input.value).toBe(searchText);
  });
  it('should call onChange prop on input change', () => {
    const onChangePropFn = jest.fn();
    render(<Search onSearch={onChangePropFn} />, { wrapper: BrowserRouter });
    fireEvent.click(screen.getByTestId(/main-search/i));
    expect(onChangePropFn).toHaveBeenCalled();
  });
});

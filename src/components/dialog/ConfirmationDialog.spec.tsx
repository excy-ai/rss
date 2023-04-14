import { fireEvent, render, screen } from '@testing-library/react';

import { ConfirmationDialog } from 'components/dialog/ConfirmationDialog';

describe('MainPage', () => {
  it('should contains search', () => {
    const onClick = jest.fn();
    render(<ConfirmationDialog onOkClick={onClick} text={'Hello there'} />);
    expect(onClick).toHaveBeenCalledTimes(0);
    const okButton = screen.getByText(/OK/i);
    expect(okButton).toBeInTheDocument();
    fireEvent.click(okButton);
    expect(onClick).toHaveBeenCalled();
  });
});

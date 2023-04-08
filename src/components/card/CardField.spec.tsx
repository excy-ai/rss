import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import CardField from 'components/card/CardField';

describe('CardField', () => {
  const caption = 'testCaption';
  const captionSearchText = /testCaption/i;
  const children = 'testChildren';
  it('should contain field with classes', async () => {
    render(<CardField caption={caption}>{children}</CardField>);
    const captionElement = screen.queryByText(captionSearchText);
    expect(captionElement).toBeInTheDocument();
    expect(captionElement).toHaveClass('field__caption');
    const childrenElement = screen.queryByText(children);
    expect(childrenElement).toBeInTheDocument();
    expect(childrenElement).toHaveClass('field__text');
  });
});

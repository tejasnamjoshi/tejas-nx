import { render, screen } from '@testing-library/react';

import CheckboxInput from '.';

describe('CheckboxInput', () => {
  it('should render successfully', () => {
    render(<CheckboxInput />);
    expect(screen.getByTestId('Welcome to CheckboxInput!')).toBeTruthy();
  });
});

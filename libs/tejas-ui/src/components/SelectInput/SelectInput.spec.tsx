import { render, screen } from '@testing-library/react';

import SelectInput from '.';

describe('SelectInput', () => {
  it('should render successfully', () => {
    render(<SelectInput />);
    expect(screen.getByTestId('Welcome to SelectInput!')).toBeTruthy();
  });
});

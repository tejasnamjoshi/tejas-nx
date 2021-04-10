import { render, screen } from '@testing-library/react';

import TextInput from '.';

describe('TextInput', () => {
  it('should render successfully', () => {
    render(<TextInput />);
    expect(screen.getByTestId('Welcome to TextInput!')).toBeTruthy();
  });
});

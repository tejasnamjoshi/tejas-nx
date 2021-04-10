import { render, screen } from '@testing-library/react';

import UserInformationForm from '.';

describe('UserInformationForm', () => {
  it('should render successfully', () => {
    render(<UserInformationForm />);
    expect(screen.getByTestId('Welcome to UserInformationForm!')).toBeTruthy();
  });
});

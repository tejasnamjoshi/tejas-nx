import React from 'react';
import { render } from '@testing-library/react';

import Starship from './Starship';

describe('Starship', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Starship />);
    expect(baseElement).toBeTruthy();
  });
});

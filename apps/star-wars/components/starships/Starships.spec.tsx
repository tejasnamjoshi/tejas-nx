import React from 'react';
import { render } from '@testing-library/react';

import Starships from './Starships';

describe('Starships', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Starships />);
    expect(baseElement).toBeTruthy();
  });
});

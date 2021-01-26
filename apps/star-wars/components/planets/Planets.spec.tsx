import React from 'react';
import { render } from '@testing-library/react';

import Planets from './Planets';

describe('Planets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Planets />);
    expect(baseElement).toBeTruthy();
  });
});

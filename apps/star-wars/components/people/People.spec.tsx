import React from 'react';
import { render } from '@testing-library/react';

import People from './People';

describe('People', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<People />);
    expect(baseElement).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import Vehicle from './Vehicle';

describe('Vehicle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Vehicle />);
    expect(baseElement).toBeTruthy();
  });
});

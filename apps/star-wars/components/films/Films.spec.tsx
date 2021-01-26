import React from 'react';
import { render } from '@testing-library/react';

import Films from './Films';

describe('Films', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Films />);
    expect(baseElement).toBeTruthy();
  });
});

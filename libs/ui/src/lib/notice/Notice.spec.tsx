import React from 'react';
import { render } from '@testing-library/react';

import Notice from './Notice';

describe('Notice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Notice />);
    expect(baseElement).toBeTruthy();
  });
});

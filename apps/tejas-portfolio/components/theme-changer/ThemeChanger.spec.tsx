import React from 'react';
import { render } from '@testing-library/react';

import ThemeChanger from './ThemeChanger';

describe('ThemeChanger', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeChanger />);
    expect(baseElement).toBeTruthy();
  });
});

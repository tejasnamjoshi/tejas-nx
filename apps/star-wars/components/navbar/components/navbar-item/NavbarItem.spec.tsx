import React from 'react';
import { render } from '@testing-library/react';

import NavbarItem from './NavbarItem';

describe('NavbarItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavbarItem />);
    expect(baseElement).toBeTruthy();
  });
});

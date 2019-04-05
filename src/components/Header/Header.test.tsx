import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { Header } from './Header';

afterEach(cleanup);

describe('Header rendered correctly', () => {
  it('rendered header', () => {
    const { getByText } = render(<Header />);
    getByText('Welcome to Pacman!');
  });
});

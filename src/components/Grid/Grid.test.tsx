import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { Grid } from './Grid';
import { GRID_NUMBER } from '../../constants';

afterEach(cleanup);

const x = 0;
const y = 0;
const FIndex = 0;

describe('Grid rendered correctly', () => {
  it('rendered correct number of Grid', () => {
    const { container } = render(<Grid direction={FIndex} x={x} y={y} />);
    expect(container.querySelectorAll('.single-square').length).toBe(GRID_NUMBER * GRID_NUMBER);
  });
});

import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { CommandQuickFill } from './CommandQuickFill';

afterEach(cleanup);

describe('Tags rendered correctly', () => {
  it('render textfield and display command correctly', () => {
    const { container, getByText } = render(
      <CommandQuickFill
        handleSelect={() => {
          console.log('select');
        }}
      />
    );
    expect(container.querySelectorAll('.tag').length).toEqual(4);
    getByText('LEFT');
    getByText('RIGHT');
    getByText('MOVE');
    getByText('REPORT');
  });
});

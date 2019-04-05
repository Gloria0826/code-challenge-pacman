import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { CommandInput } from './CommandInput';

afterEach(cleanup);

const command = 'LEFT';

describe('Textfield rendered', () => {
  it('render textfield and display command correctly', () => {
    const { container, getByText } = render(
      <CommandInput
        command={command}
        handleInput={() => {
          console.log('input');
        }}
        handleClick={() => {
          console.log('click');
        }}
      />
    );
    const input: any = container.querySelector('input');
    expect(container.querySelectorAll('button').length).toEqual(1);
    expect(input.value).toEqual(command);
    getByText('Please input the command');
    getByText('GO!');
  });
});

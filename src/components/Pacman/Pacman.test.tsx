import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { Pacman } from './Pacman';

afterEach(cleanup);

const direction1 = 0;
const direction2 = 1;
const direction3 = 2;
const direction4 = 3;

const display1 = true;
const display2 = false;

describe('Pacman rendered correctly', () => {
  it('rendered correct direction1 and display1', () => {
    const { container } = render(<Pacman direction={direction1} display={display1} />);
    const pacman: any = container.querySelector('.pacman');
    expect(pacman.style.transform).toEqual('rotate(0deg)');
    expect(pacman.style.display).toEqual('inherit');
  });
  it('rendered correct direction2 and display2', () => {
    const { container } = render(<Pacman direction={direction2} display={display2} />);
    const pacman: any = container.querySelector('.pacman');
    expect(pacman.style.transform).toEqual('rotate(90deg)');
    expect(pacman.style.display).toEqual('none');
  });
  it('rendered correct direction3 and display1', () => {
    const { container } = render(<Pacman direction={direction3} display={display1} />);
    const pacman: any = container.querySelector('.pacman');
    expect(pacman.style.transform).toEqual('rotate(180deg)');
    expect(pacman.style.display).toEqual('inherit');
  });
  it('rendered correct direction4 and display2', () => {
    const { container } = render(<Pacman direction={direction4} display={display2} />);
    const pacman: any = container.querySelector('.pacman');
    expect(pacman.style.transform).toEqual('rotate(270deg)');
    expect(pacman.style.display).toEqual('none');
  });
});

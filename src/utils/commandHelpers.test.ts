import { handleCommands, handlePositionAndDirection, inRange, moveBetweenGrid } from './commandHelpers';

const command1 = 'PLACE 1,1,EAST';
const command2 = 'LEFT';
const command3 = 'RIGHT';
const command4 = 'MOVE';
const command5 = 'REPORT';
const command6 = 'DHKHJSDF';

const position1 = [0, 0, 0];
const position2 = [0, 0, 1];
const position3 = [2, 1, 2];

const coor1 = [0, 0];
const coor2 = [0, 4];
const coor3 = [4, 0];
const coor4 = [4, 4];
const coor5 = [3, 1];

const direction1 = 0;
const direction2 = 1;
const direction3 = 2;
const direction4 = 3;

const place1 = '1,1,EAST';
const place2 = '5,-1,EAST';
const place3 = '1,1,Hello';
const place4 = 'X,Y,EAST';
const place5 = '';

describe('handle commands', () => {
  test('valid PLACE command', () => {
    expect(handleCommands(command1, position1)).toEqual([1, 1, 0]);
  });
  test('valid LEFT command', () => {
    expect(handleCommands(command2, position1)).toEqual([0, 0, 3]);
  });
  test('valid RIGHT command', () => {
    expect(handleCommands(command3, position1)).toEqual([0, 0, 0]);
  });
  test('valid MOVE command', () => {
    expect(handleCommands(command4, position1)).toEqual([1, 0, 0]);
  });
  test('invalid MOVE command', () => {
    expect(handleCommands(command4, position2)).toEqual(false);
  });
  test('valid REPORT command', () => {
    expect(handleCommands(command5, position3)).toEqual([2, 1, 2]);
  });
  test('invalid command', () => {
    expect(handleCommands(command6, position3)).toEqual(false);
  });
});

describe('handle position and direction', () => {
  test('valid position and direction', () => {
    expect(handlePositionAndDirection(place1)).toEqual([1, 1, 0]);
  });
  test('invalid position and direction', () => {
    expect(handlePositionAndDirection(place2)).toEqual(false);
    expect(handlePositionAndDirection(place3)).toEqual(false);
    expect(handlePositionAndDirection(place4)).toEqual(false);
    expect(handlePositionAndDirection(place5)).toEqual(false);
  });
});

describe('in range', () => {
  test('check if in range correctly', () => {
    expect(inRange('a', 1, 4)).toEqual(false);
    expect(inRange(0, 0, 4)).toEqual(true);
    expect(inRange(7, 0, 4)).toEqual(false);
  });
});

describe('move between grid', () => {
  test('move between grid correctly', () => {
    expect(moveBetweenGrid(coor1, direction1)).toEqual([1, 0, 0]);
    expect(moveBetweenGrid(coor1, direction2)).toEqual(false);
    expect(moveBetweenGrid(coor2, direction4)).toEqual(false);
    expect(moveBetweenGrid(coor3, direction2)).toEqual(false);
    expect(moveBetweenGrid(coor4, direction1)).toEqual(false);
    expect(moveBetweenGrid(coor5, direction3)).toEqual([2, 1, 2]);
  });
});

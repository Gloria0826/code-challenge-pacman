import { GRID_NUMBER, DIRECTIONS } from '../constants';

export const handleCommands = (command, position) => {
  const mainCommand = command.split(' ')[0];
  switch (mainCommand) {
    case 'PLACE':
      if (command.split(' ')[1]) {
        return handlePositionAndDirection(command.split(' ')[1]);
      } else {
        return false;
      }
    case 'LEFT':
      position[2] = position[2] - 1 < 0 ? 3 : position[2] - 1;
      return position;
    case 'RIGHT':
      position[2] = (position[2] + 1) % 4;
      return position;
    case 'MOVE':
      return moveBetweenGrid([position[0], position[1]], position[2]);
    case 'REPORT':
      return position;
    default:
      return false;
  }
};

export const handlePositionAndDirection = command => {
  const positionArray = command.split(',');
  if (positionArray.length === 3) {
    if (
      inRange(positionArray[0], 0, GRID_NUMBER) &&
      inRange(positionArray[1], 0, GRID_NUMBER) &&
      DIRECTIONS.indexOf(positionArray[2]) !== -1
    ) {
      return [positionArray[0], positionArray[1], DIRECTIONS.indexOf(positionArray[2])];
    }
  }
  return false;
};

export const inRange = (num, min, max) => {
  return num >= min && num < max;
};

export const moveBetweenGrid = (coordinate, direction) => {
  switch (direction) {
    case 0:
      if (coordinate[0] + 1 <= GRID_NUMBER - 1) {
        return [coordinate[0] + 1, coordinate[1], direction];
      } else {
        return false;
      }
    case 1:
      if (coordinate[1] - 1 >= 0) {
        return [coordinate[0], coordinate[1] - 1, direction];
      } else {
        return false;
      }
    case 2:
      if (coordinate[0] - 1 >= 0) {
        return [coordinate[0] - 1, coordinate[1], direction];
      } else {
        return false;
      }
    case 3:
      if (coordinate[1] + 1 <= GRID_NUMBER - 1) {
        return [coordinate[0], coordinate[1] + 1, direction];
      } else {
        return false;
      }
    default:
      return false;
  }
};

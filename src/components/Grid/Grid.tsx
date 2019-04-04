import React, { FC } from 'react';
import './styles.scss';
import { GRID_NUMBER } from '../../constants';
import { Pacman } from '../../components/Pacman/Pacman';

interface IGrid {
  direction: number;
  x: number;
  y: number;
}

const drawGrid = (direction, x, y) => {
  const gridArray: any = [];
  for (let i = GRID_NUMBER - 1; i >= 0; i--) {
    for (let j = 0; j < GRID_NUMBER; j++) {
      const display = x === j && y === i;
      gridArray.push(
        <div className="single-square" key={`square-${j}${i}`} id={`square-${j}${i}`}>
          <Pacman direction={direction} display={display} />
        </div>
      );
    }
  }
  return gridArray;
};

export const Grid: FC<IGrid> = props => {
  const { direction, x, y } = props;
  return <div className="wrapper">{drawGrid(direction, x, y)}</div>;
};

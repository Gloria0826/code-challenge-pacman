import React, { FC } from 'react';
import './styles.scss';
import { GRID_NUMBER } from '../../constants';

interface IGrid {
  //   headers?: any;
  //   rows?: any;
  //   selectRow: (index: number, id: number, correlationId: number) => void;
  //   selectedData?: any;
  //   sortData: (field: string, direction: string) => void;
  //   pageInfo: any;
  //   loadMore?: any;
  //   isLoadingMore: boolean;
}

const drawGrid = gridNumber => {
  const gridArray: any = [];
  for (let i = 0; i < gridNumber * gridNumber; i++) {
    gridArray.push(<div className="single-square" key={`square-${i}`} />);
  }
  return gridArray;
};

export const Grid: FC<IGrid> = () => {
  return <div className="wrapper">{drawGrid(GRID_NUMBER)}</div>;
};

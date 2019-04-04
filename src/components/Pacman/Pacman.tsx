import React, { FC } from 'react';
import './styles.scss';
import pacman from '../../images/pacman.png';

interface IPacman {
  //   headers?: any;
  //   rows?: any;
  //   selectRow: (index: number, id: number, correlationId: number) => void;
  //   selectedData?: any;
  //   sortData: (field: string, direction: string) => void;
  //   pageInfo: any;
  //   loadMore?: any;
  //   isLoadingMore: boolean;
}

export const Pacman: FC<IPacman> = () => {
  return (
    <div className="pacman">
      <img src={pacman} alt="pacman" />
    </div>
  );
};

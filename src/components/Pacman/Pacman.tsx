import React, { FC } from 'react';
import './styles.scss';
import pacman from '../../images/pacman.png';

interface IPacman {
  direction: number;
  display: boolean;
}

export const Pacman: FC<IPacman> = props => {
  const { direction, display } = props;
  return (
    <div
      className="pacman"
      style={{ transform: `rotate(${direction * 90}deg)`, display: display ? 'inherit' : 'none' }}>
      <img src={pacman} alt="pacman" />
    </div>
  );
};

import React, { Component } from 'react';
import { Grid } from '../components/Grid/Grid';
import { Pacman } from '../components/Pacman/Pacman';

interface IGridState {
  x: number;
  y: number;
  F: string;
}
export class GridContainer extends Component<{}, IGridState> {
  state = {
    x: 0,
    y: 0,
    F: 'E',
  };
  render() {
    return (
      <Grid>
        <Pacman />
      </Grid>
    );
  }
}

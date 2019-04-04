import React, { Component } from 'react';
import { Grid } from '../components/Grid/Grid';
import { commandStore } from '../stores/CommandStores';
import { handleCommands } from '../utils/commandHelpers';
import { Notification } from '../components/Modal/Notification';
import { DIRECTIONS } from '../constants';

interface IGridState {
  x: number;
  y: number;
  FIndex: number;
  invalid: boolean;
  errorMsg: any;
  showInfo: boolean;
}
export class GridContainer extends Component<{}, IGridState> {
  state = {
    x: 0,
    y: 0,
    FIndex: 0,
    invalid: false,
    errorMsg: null,
    showInfo: false,
  };
  componentWillMount() {
    commandStore.on('change', this.setPosition);
  }
  setPosition = () => {
    this.setState({ invalid: false, errorMsg: null, showInfo: false });
    const { x, y, FIndex } = this.state;
    const afterOperation = handleCommands(commandStore.getCommand(), [x, y, FIndex]);
    if (commandStore.getCommand() === 'REPORT') {
      this.setState({ showInfo: true });
    }
    if (afterOperation) {
      this.setState({
        x: parseInt(afterOperation[0], 10),
        y: parseInt(afterOperation[1], 10),
        FIndex: afterOperation[2],
      });
    } else {
      this.setState({
        invalid: true,
        errorMsg: {
          title: 'Invalid operation',
          subtitle: 'Wrong command or Pacman is going to exceed the boundary',
          kind: 'error',
        },
      });
    }
  };
  componentWillUnmount() {
    commandStore.removeListener('change', this.setPosition);
  }
  render() {
    const { x, y, FIndex, invalid, errorMsg, showInfo } = this.state;
    return (
      <>
        {showInfo && (
          <Notification msg={{ title: 'Report', subtitle: `${x},${y},${DIRECTIONS[FIndex]}`, kind: 'info' }} />
        )}
        <Grid direction={FIndex} x={x} y={y} />
        {invalid && <Notification msg={errorMsg} />}
      </>
    );
  }
}

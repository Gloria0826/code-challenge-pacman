import React, { Component } from 'react';
import { CommandInput } from '../components/CommandInput/CommandInput';
import { CommandQuickFill } from '../components/CommandQuickFill/CommandQuickFill';
import * as commandActions from '../actions/CommandActions';

interface ICommandState {
  command: string;
}

export class CommandContainer extends Component<{}, ICommandState> {
  state = {
    command: '',
    showInfo: false,
  };
  handleInput = e => {
    this.setState({ command: e.target.value.toUpperCase() });
  };
  handleClick = () => {
    const { command } = this.state;
    commandActions.updateCommand(command);
  };
  handleSelect = name => {
    this.setState({ command: name });
    commandActions.updateCommand(name);
  };
  render() {
    const { command } = this.state;
    return (
      <>
        <CommandInput command={command} handleInput={this.handleInput} handleClick={this.handleClick} />
        <CommandQuickFill handleSelect={this.handleSelect} />
      </>
    );
  }
}

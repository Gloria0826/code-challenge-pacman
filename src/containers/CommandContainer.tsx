import React, { Component } from 'react';
import { CommandInput } from '../components/CommandInput/CommandInput';
import { CommandQuickFill } from '../components/CommandQuickFill/CommandQuickFill';
import * as commandActions from '../actions/CommandActions';
import { commandStore } from '../stores/CommandStores';

interface ICommandState {
  command: string;
}

export class CommandContainer extends Component<{}, ICommandState> {
  state = {
    command: '',
  };
  componentWillMount() {
    commandStore.on('change', this.test);
  }
  handleInput = e => {
    this.setState({ command: e.target.value.toUpperCase() });
  };
  handleClick = () => {
    const { command } = this.state;
    commandActions.updateCommand(command);
    this.setState({ command: '' });
  };
  handleSelect = name => {
    this.setState({ command: name });
  };
  test = () => {
    console.log(commandStore.getCommand());
  };
  componentWillUnmount() {
    commandStore.removeListener('change', this.test);
  }
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

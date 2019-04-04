import { EventEmitter } from 'events';
import dispatcher from '../utils/dispatcher';
import { commandActionTypes } from '../actionTypes';
import { CHANGE_EVENT } from '../constants';

class CommandStores extends EventEmitter {
  command: string;

  constructor() {
    super();
    this.command = '';
  }

  getCommand() {
    return this.command;
  }

  handleActions(action: any) {
    if (action) {
      switch (action.type) {
        case commandActionTypes.COMMAND_PUT:
          this.command = action.data;
          this.emit(CHANGE_EVENT);
          break;
        default:
      }
    }
  }
}

export const commandStore = new CommandStores();
dispatcher.register(commandStore.handleActions.bind(commandStore));

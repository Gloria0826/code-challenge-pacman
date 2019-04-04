import { loadCommand } from '../dispatcher/CommandDispatcher';

export const updateCommand = command => {
  loadCommand(command);
};

import { commandActionTypes } from './actionTypes';

export const commandDataReceived = (response: any) => ({
  type: commandActionTypes.COMMAND_PUT,
  data: response,
});

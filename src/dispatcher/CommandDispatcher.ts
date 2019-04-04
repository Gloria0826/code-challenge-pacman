import dispatcher from '../utils/dispatcher';
import { commandActionTypes } from '../actionTypes';

export const loadCommand = (response: object): void => {
  dispatcher.dispatch({
    type: commandActionTypes.COMMAND_PUT,
    data: response,
  });
};

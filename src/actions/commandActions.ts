import dispatcher from '../utils/dispatcher';
import { commandDataReceived } from './actions';

export const loadCommand = (): void => {
  dispatcher.dispatch(commandDataReceived(123));
};

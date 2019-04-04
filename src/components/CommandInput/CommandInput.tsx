import React, { FC } from 'react';
import './styles.scss';
// @ts-ignore
import { TextInput, Button, Tag } from 'carbon-components-react';

interface ICommandInput {
  command: string;
  handleInput: any;
  handleClick: any;
}

export const CommandInput: FC<ICommandInput> = props => {
  const { command } = props;
  return (
    <div className="command-wrapper">
      <div className="input-field">
        <TextInput
          id="command"
          className="input"
          labelText="Please input the command"
          value={command}
          onChange={props.handleInput}
        />
        <Button className="submit-button" onClick={props.handleClick}>
          GO!
        </Button>
      </div>
    </div>
  );
};

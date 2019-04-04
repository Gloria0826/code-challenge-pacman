import React, { FC } from 'react';
import './styles.scss';
// @ts-ignore
import { TextInput, Button, Tag } from 'carbon-components-react';
import { COMMAND_TYPES } from '../../constants';

interface ICommandInput {
  handleSelect: any;
}
const createTags = props => {
  return COMMAND_TYPES.map(type => (
    <Tag
      key={type.name}
      className={`tag tag-${type.color}`}
      type="custom"
      onClick={() => props.handleSelect(type.name)}>
      {type.name}
    </Tag>
  ));
};
export const CommandQuickFill: FC<ICommandInput> = props => {
  return (
    <div className="quick-fill">
      <p className="fill-text">Quick Fill:</p>
      <div className="tag-group">{createTags(props)}</div>
    </div>
  );
};

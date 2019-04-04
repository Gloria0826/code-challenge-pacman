import React, { FC } from 'react';
import './styles.scss';
// @ts-ignore
import { TextInput, Button, Tag } from 'carbon-components-react';

interface IInput {
  //   headers?: any;
  //   rows?: any;
  //   selectRow: (index: number, id: number, correlationId: number) => void;
  //   selectedData?: any;
  //   sortData: (field: string, direction: string) => void;
  //   pageInfo: any;
  //   loadMore?: any;
  //   isLoadingMore: boolean;
}

export const CommandInput: FC<IInput> = () => {
  return (
    <div className="command-wrapper">
      <div className="input-field">
        <TextInput id="command" className="input" labelText="Please input the command" />
        <Button className="submit-button">GO!</Button>
      </div>

      <div className="quick-fill">
        <p className="fill-text">Quick Fill:</p>
        <div className="tag-group">
          <Tag className="tag tag-magenta">MOVE</Tag>
          <Tag className="tag-purple">LEFT</Tag>
          <Tag className="tag-blue">RIGHT</Tag>
          <Tag className="tag-cyan">REPORT</Tag>
        </div>
      </div>
    </div>
  );
};

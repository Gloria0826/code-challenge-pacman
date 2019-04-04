// @ts-ignore
import { Checkbox } from 'carbon-components-react';
import React, { Component } from 'react';

class CheckboxExample extends Component {
  public render() {
    return (
      <div>
        <Checkbox defaultChecked={true} labelText="checkbox1" id="checkbox-label-1" />
        <Checkbox defaultChecked={true} labelText="checkbox2" id="checkbox-label-2" />
      </div>
    );
  }
}

export default CheckboxExample;

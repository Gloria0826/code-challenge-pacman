import React, { Component } from 'react';
import styled from 'styled-components';
import './styles/App.scss';

const Test = styled.p`
  color: palevioletred;
  text-align: left;
  font-size: 20px;
  margin-left: 20px;
`;

class App extends Component<{}, { init: boolean }> {
  state = { init: true };

  public render() {
    return (
      <div className="App">
        <Test>Hello</Test>
      </div>
    );
  }
}

export default App;

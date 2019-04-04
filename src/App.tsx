import React, { Component } from 'react';
import { Header } from '../src/components/Header/Header';
import { CommandContainer } from './containers/CommandContainer';
import { GridContainer } from './containers/GridContainer';

class App extends Component<{}, {}> {
  public render() {
    return (
      <div>
        <Header />
        <CommandContainer />
        <GridContainer />
      </div>
    );
  }
}

export default App;

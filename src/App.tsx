import React, { Component } from 'react';
import { Header } from '../src/components/Header/Header';
import { CommandInput } from '../src/components/CommandInput/CommandInput';
import { Grid } from '../src/components/Grid/Grid';

class App extends Component<{}, { init: boolean }> {
  state = { init: true };

  public render() {
    return (
      <div>
        <Header />
        <CommandInput />
        <Grid />
      </div>
    );
  }
}

export default App;

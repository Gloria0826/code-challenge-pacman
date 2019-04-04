import React, { Component } from 'react';
import './styles/App.scss';
import { Grid } from '../src/components/Grid/Grid';

class App extends Component<{}, { init: boolean }> {
  state = { init: true };

  public render() {
    return (
      <div className="App">
        <Grid />
      </div>
    );
  }
}

export default App;

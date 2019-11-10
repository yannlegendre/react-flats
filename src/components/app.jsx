import React, { Component } from 'react';
import Flatlist from 'flatlist';

class App extends Component {
  render() {
    return (
      <div>
        <Flatlist />
        <GoogleMapReact />
      </div>
      );
  }
}

export default App;

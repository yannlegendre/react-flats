import React, { Component } from 'react';
import FlatList from './flat_list';
import GoogleMapReact from './google_map_react';
import flats from '../data/flats';

class App extends Component {
  render() {
    return (
      <div>
        <FlatList flats={{ flats }} />
        <GoogleMapReact />
      </div>
    );
  }
}

export default App;

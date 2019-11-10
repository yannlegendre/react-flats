import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flat_list';
import flats from '../data/flats';

class App extends Component {
  render() {
    return (
      <div>
        <FlatList flats={flats} />
        <GoogleMapReact />
      </div>
    );
  }
}

export default App;

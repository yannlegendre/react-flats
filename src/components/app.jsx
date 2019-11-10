import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flat_list';
import flats from '../data/flats';

class App extends Component {
  render() {
    return (
      <div>
        <FlatList flats={flats} />
        <div className="map-container">
          <GoogleMapReact defaultCenter={{ lat: 45.75, lng: 4.85 }} defaultZoom={13} />
        </div>
      </div>
    );
  }
}

export default App;

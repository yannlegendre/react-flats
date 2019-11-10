import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flat_list';
import Marker from './marker';
import flats from '../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedFlat: flats[0] };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <FlatList
          flats={flats}
          selectFlat={this.selectFlat}
          selectedFlat={this.state.selectedFlat}
        />
        <div className="map-container">
          <GoogleMapReact
            defaultCenter={this.center()}
            defaultZoom={14}
          >
            <Marker
              lat={this.center().lat}
              lng={this.center().lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;

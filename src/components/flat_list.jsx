import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  render() {
    return (
      <div className="flat-list">
        {this.props.flats.map((flat, i) => {
          return (
            <Flat
              name={flat.name}
              imageUrl={flat.imageUrl}
              price={flat.price}
              priceCurrency={flat.priceCurrency}
              lat={flat.lat}
              lng={flat.lng}
              key={flat.imageUrl}
            />);
        })}
      </div>
    );
  }
}

export default FlatList;

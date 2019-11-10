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
              index={i}
              selected={flat.name === this.props.selectedFlat.name}
              selectFlat={this.props.selectFlat}
            />);
        })}
      </div>
    );
  }
}

export default FlatList;

import React from 'react';
import Tile from './tile';

const TileList = (props) => {
  return props.values.map((value) => {
    return <Tile key={value} />;
  });
};

export default TileList;

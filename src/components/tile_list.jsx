import React from 'react';
import Tile from './tile';

const TileList = (props) => {
  return props.values.map((value) => {
    return <Tile value={value} key={Math.floor(Math.random() * 1000)} />;
  });
};

export default TileList;

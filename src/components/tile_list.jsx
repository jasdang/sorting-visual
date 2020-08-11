import React from 'react';
import Bar from './bar';

const TileList = (props) => {
  return props.values.map((value) => {
    return <Bar height={value} key={Math.floor(Math.random() * 100000000)} />;
  });
};

export default TileList;

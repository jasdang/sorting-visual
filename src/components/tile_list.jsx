import React from 'react';
import Bar from './bar';

const TileList = (props) => {
  return props.values.map((value, id) => {
    return (
      <Bar
        height={value}
        color={props.colors[id]}
        key={Math.floor(Math.random() * 100000000000)}
      />
    );
  });
};

export default TileList;

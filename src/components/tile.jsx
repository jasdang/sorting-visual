import React from 'react';

const Tile = (props) => {
  const styleTile = {
    display: 'inline-block',
    border: '1px solid black',
    width: '40px',
    height: '40px',
  };
  return <div style={styleTile}></div>;
};

export default Tile;

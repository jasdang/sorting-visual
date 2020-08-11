import React from 'react';

const Bar = (props) => {
  const styleBar = {
    display: 'inline-block',
    border: '1px solid white',
    width: '10px',
    height: `${props.height}vh`,
    backgroundColor: 'rgb(50, 115, 220)',
    margin: '0px',
  };
  return <div style={styleBar}></div>;
};

export default Bar;

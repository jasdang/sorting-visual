import React from 'react';

const Bar = (props) => {
  const styleBar = {
    display: 'inline-block',
    // border: '1px solid black',
    width: '10px',
    height: `${props.height}px`,
    backgroundColor: 'rgb(50, 115, 220)',
    margin: '1px',
  };
  return <div style={styleBar}></div>;
};

export default Bar;

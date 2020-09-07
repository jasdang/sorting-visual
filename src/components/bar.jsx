import React from 'react';

const Bar = ({barHeight, barColor, barWidth}) => {
  const styleBar = {
    display: 'inline-block',
    border: '1px solid white',
    width: `${barWidth}px`,
    height: `${barHeight}vh`,
    backgroundColor: `${barColor}`,
    margin: '0px',
  };
  return <div style={styleBar}></div>;
};

export default Bar;

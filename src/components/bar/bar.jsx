import React from 'react';

const Bar = ({barHeight, barColor, barWidth}) => {
  const styleBar = {
    display: 'inline-block',
    border: '1px solid white',
    borderRadius: '4px 4px 0px 0px',
    width: `${barWidth}vw`,
    height: `${barHeight}vh`,
    backgroundColor: `${barColor}`,
    margin: '0px',
  };
  return <div style={styleBar}></div>;
};

export default Bar;

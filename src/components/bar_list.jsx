import React from 'react';
import {connect} from 'react-redux';
import Bar from './bar';
import styled from 'styled-components';
import {getTiles, getColors} from './selectors';

const BarListContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const BarList = ({tiles, colors}) => {
  const numOfBars = tiles.length;
  const barWidth = Math.floor((1200 - 50) / numOfBars);
  const barList = tiles.map((barHeight, id) => {
    return (
      <Bar
        barHeight={barHeight}
        barColor={colors[id]}
        barWidth={barWidth}
        key={id}
      />
    );
  });

  return <BarListContainer>{barList}</BarListContainer>;
};

const mapStateToProps = (state) => ({
  tiles: getTiles(state),
  colors: getColors(state),
});

export default connect(mapStateToProps)(BarList);

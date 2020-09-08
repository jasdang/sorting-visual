import React from 'react';
import {connect} from 'react-redux';
import Bar from './bar';
import styled from 'styled-components';

const BarListContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 1px solid red;
`;

const BarList = ({tiles, colors}) => {
  const numOfBars = tiles.length;
  const barWidth = Math.floor((1200 - 10) / numOfBars);
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

const mapPropsToState = (state) => ({
  tiles: state.array.tiles,
  colors: state.array.colors,
});

export default connect(mapPropsToState)(BarList);

import React from 'react';
import {connect} from 'react-redux';
import Bar from './bar';
import styled from 'styled-components';
import {getTiles, getColors} from '../selectors';
import {generateArray} from '../actions';
import {pivotTileColor, sortedTileColor} from '../colors';

const BarListContainer = styled.div`
  position: relative;
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Link = styled.a`
  position: absolute;
  top: 0px;
  right: 0px;
  display: block;
  border: none;
  border-radius: 2px;
  margin: 10px 0;
  padding: 8px;
  color: ${pivotTileColor};
  &:hover {
    text-decoration: none;
    color: ${sortedTileColor};
  }
`;

const BarList = ({tiles, colors, generateArray}) => {
  const onGenerateArrayPressed = () => {
    const length = parseInt(document.getElementById('arrayLength').value);
    generateArray(length);
  };
  const numOfBars = tiles.length;
  const barWidth = Math.floor((1200 - 120) / numOfBars);
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

  return (
    <BarListContainer>
      {barList}
      <Link onClick={onGenerateArrayPressed}>Refresh</Link>
    </BarListContainer>
  );
};

const mapStateToProps = (state) => ({
  tiles: getTiles(state),
  colors: getColors(state),
});

const mapDispatchToProps = (dispatch) => ({
  generateArray: (length) => dispatch(generateArray(length)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarList);

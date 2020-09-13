import React from 'react';
import {connect} from 'react-redux';
import Bar from './bar';
import styled from 'styled-components';
import {getTiles, getColors, getToolBoxShow} from '../selectors';
import {generateArray, setToolBoxShow} from '../actions';
import {pivotTileColor, sortedTileColor} from '../colors';

const BarListContainer = styled.div`
  position: relative;
  width: 1400px;
  padding: 5vh 5vh;
  padding-right: 0;
  padding-top: 10vh;
  display: flex;
  justify-content: start;
  align-items: flex-end;
  flex-grow: 1;
  & button {
    display: none;
  }
  @media screen and (max-width: 992px) {
    width: 100vw;
    padding: 4vw 2vw;
    button {
      position: absolute;
      right: 0;
      top: 0;
      display: block;
    }
  }
`;

const Link = styled.a`
  position: absolute;
  top: 50px;
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

const BarList = ({tiles, colors, generateArray, onSettingClicked}) => {
  const onGenerateArrayPressed = () => {
    const length = parseInt(document.getElementById('arrayLength').value);
    generateArray(length);
  };

  const numOfBars = tiles.length;

  const barWidth =
    Math.floor(1200 / numOfBars) >= 1 ? Math.floor(1200 / numOfBars) : 1;

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
      <button onClick={onSettingClicked}>Settings</button>
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
  onSettingClicked: () => dispatch(setToolBoxShow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarList);

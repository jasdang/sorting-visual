import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {currentTileColor} from '../colors';
import {getTiles, getColors, getAlgorithm} from '../selectors';
import quickSort from '../../algorithms/quick_sort_algo';
import insertionSort from '../../algorithms/insertion_sort_algo';

const Button = styled.button`
  display: block;
  border: none;
  border-radius: 2px;
  background: ${currentTileColor};
  margin: 10px 0;
  padding: 8px;
`;

const Sort = ({tiles, colors, algorithm}) => {
  const handleClick = () => {
    if (algorithm === 'quickSort') {
      quickSort(tiles, colors);
    } else if (algorithm === 'insertionSort') {
      insertionSort(tiles, colors);
    }
  };

  return <Button onClick={handleClick}>SORT!</Button>;
};

const mapStateToProps = (state) => ({
  tiles: getTiles(state),
  colors: getColors(state),
  algorithm: getAlgorithm(state),
});
export default connect(mapStateToProps)(Sort);
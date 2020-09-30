import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {sortedTileColor} from '../colors';
import {getTiles, getColors, getAlgorithm} from '../selectors';
import quickSort from '../../algorithms/quick_sort_algo';
import insertionSort from '../../algorithms/insertion_sort_algo';
import mergeSort from '../../algorithms/merge_sort_algo';

const Button = styled.button`
  display: block;
  border: none;
  border-radius: 2px;
  background: ${sortedTileColor};
  width: 80px;
  margin: 10px auto;
  padding: 8px;
  font-weight: bold;
`;

const Sort = ({tiles, colors, algorithm}) => {
  const handleClick = () => {
    if (algorithm === 'quickSort') {
      quickSort(tiles, colors);
    } else if (algorithm === 'insertionSort') {
      insertionSort(tiles, colors);
    } else if (algorithm === 'mergeSort') {
      mergeSort(tiles);
    }
  };

  return <Button onClick={handleClick}>START</Button>;
};

const mapStateToProps = (state) => ({
  tiles: getTiles(state),
  colors: getColors(state),
  algorithm: getAlgorithm(state),
});
export default connect(mapStateToProps)(Sort);

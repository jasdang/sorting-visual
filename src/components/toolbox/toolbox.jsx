import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Length from './length';
import Speed from './speed';
import Algorithm from './algorithm';
import {generateArray} from '../actions';
import {getTiles, getColors} from '../selectors';
import quickSort from '../../algorithms/quick_sort_algo';
import insertionSort from '../../algorithms/insertion_sort_algo';
import {currentTileColor} from '../colors';

const ToolBoxContainer = styled.div`
  width: 500px;
  padding: 50px;
`;

const Button = styled.button`
  display: block;
  border: none;
  border-radius: 2px;
  background: ${currentTileColor};
  margin: 10px 0;
  padding: 8px;
`;

const ToolBox = ({tiles, colors, generateArray}) => {
  const handleClick = () => {
    quickSort(tiles, colors);
  };

  const InsertionSortTest = () => {
    insertionSort(tiles, colors);
  };

  const onGenerateArrayPressed = () => {
    const length = parseInt(document.getElementById('arrayLength').value);
    generateArray(length);
  };

  return (
    <ToolBoxContainer>
      <p>Set Array Length</p>
      <Length />

      <Button onClick={onGenerateArrayPressed}>Generate New Array</Button>

      <p>Set Speed</p>
      <Speed />

      <p>Set Algorithm</p>
      <Algorithm />

      <Button onClick={handleClick}>Quick Sort</Button>
      <Button onClick={InsertionSortTest}>Insertion Sort</Button>
    </ToolBoxContainer>
  );
};

const mapStateToProps = (state) => ({
  tiles: getTiles(state),
  colors: getColors(state),
});

const mapDispatchToProps = (dispatch) => ({
  generateArray: (length) => dispatch(generateArray(length)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolBox);

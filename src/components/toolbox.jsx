import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {generateArray, setSpeed} from './actions';
import {getTiles, getColors} from './selectors';
import quickSort from '../algorithms/quick_sort_algo';
import insertionSort from '../algorithms/insertion_sort_algo';

const ToolBoxContainer = styled.div`
  border: 1px solid red;
  width: 300px;
`;

const Button = styled.button`
  display: block;
`;
const ToolBox = ({
  tiles,
  colors,
  onGenerateArrayPressed,
  generateArray,
  setSpeed,
}) => {
  const handleClick = () => {
    quickSort(tiles, colors);
  };

  const InsertionSortTest = () => {
    insertionSort(tiles, colors);
  };

  const handleChange = (e) => {
    const length = parseInt(e.target.value);
    generateArray(length);
  };

  const onSpeedSelected = (e) => {
    const speed = parseInt(e.currentTarget.value);
    setSpeed(speed);
  };
  return (
    <ToolBoxContainer>
      <Button onClick={onGenerateArrayPressed}>Generate</Button>
      <Button onClick={handleClick}>Quick Sort</Button>
      <Button onClick={InsertionSortTest}>Insertion Sort</Button>
      <label htmlFor='arrayLength'>Set Array Length</label>
      <input
        type='range'
        name='arrayLength'
        id='arrayLength'
        defaultValue='85'
        min='20'
        max='150'
        onChange={handleChange}
      />
      <p>Set Speed</p>
      <label htmlFor='highSpeed'>Fast</label>
      <input
        type='radio'
        name='speed'
        id='highSpeed'
        value='0'
        onClick={onSpeedSelected}
      />
      <label htmlFor='medSpeed'>Medium</label>
      <input
        type='radio'
        name='speed'
        id='medSpeed'
        value='200'
        onClick={onSpeedSelected}
      />
      <label htmlFor='lowSpeed'>Slow</label>
      <input
        type='radio'
        name='speed'
        id='lowSpeed'
        value='500'
        onClick={onSpeedSelected}
      />
    </ToolBoxContainer>
  );
};

const mapStateToProps = (state) => ({
  tiles: getTiles(state),
  colors: getColors(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenerateArrayPressed: () => dispatch(generateArray()),
  generateArray: (length) => dispatch(generateArray(length)),
  setSpeed: (speed) => dispatch(setSpeed(speed)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolBox);

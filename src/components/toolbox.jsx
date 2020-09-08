import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {generateArray, setSpeed} from './actions';

const ToolBoxContainer = styled.div`
  border: 1px solid red;
  width: 300px;
`;

const Button = styled.button`
  display: block;
`;
const ToolBox = ({
  onGenerateArrayPressed,
  handleClick,
  generateArray,
  setSpeed,
}) => {
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
      <Button onClick={handleClick}>Sort</Button>
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
        value='50'
        onClick={onSpeedSelected}
      />
      <label htmlFor='lowSpeed'>Slow</label>
      <input
        type='radio'
        name='speed'
        id='lowSpeed'
        value='300'
        onClick={onSpeedSelected}
      />
    </ToolBoxContainer>
  );
};
const mapPropsToState = () => {};
const mapDispatchToState = (dispatch) => ({
  generateArray: (length) => dispatch(generateArray(length)),
  setSpeed: (speed) => dispatch(setSpeed(speed)),
});
export default connect(null, mapDispatchToState)(ToolBox);

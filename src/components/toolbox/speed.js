import React from 'react';
import {connect} from 'react-redux';
import {setSpeed} from '../actions';
import styled from 'styled-components';
import {currentTileColor, pivotTileColor} from '../colors';

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const InputRadio = styled.input`
  display: none;
  &:checked + label {
    background: ${pivotTileColor};
  }
`;

const Label = styled.label`
  display: inline-block;
  border-radius: 2px;
  width: 80px;
  padding: 8px;
  background: ${currentTileColor};
  font-weight: normal;
  text-align: center;
  &:hover {
    border: 1px solid ${currentTileColor};
  }
`;

const Speed = ({setSpeed}) => {
  const onSpeedSelected = (e) => {
    const speed = parseInt(e.currentTarget.value);
    setSpeed(speed);
  };

  return (
    <RadioContainer>
      <InputRadio
        type='radio'
        name='speed'
        id='highSpeed'
        value='0'
        onClick={onSpeedSelected}
      />
      <Label htmlFor='highSpeed'>Fast</Label>
      <InputRadio
        type='radio'
        name='speed'
        id='medSpeed'
        value='200'
        onClick={onSpeedSelected}
      />
      <Label htmlFor='medSpeed'>Medium</Label>
      <InputRadio
        type='radio'
        name='speed'
        id='lowSpeed'
        value='500'
        onClick={onSpeedSelected}
      />
      <Label htmlFor='lowSpeed'>Slow</Label>
    </RadioContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setSpeed: (speed) => dispatch(setSpeed(speed)),
});
export default connect(null, mapDispatchToProps)(Speed);

import React from 'react';
import {connect} from 'react-redux';
import {setSpeed} from '../actions';
import {getSpeed} from '../selectors';
import {Label, RadioContainer, InputRadio} from './common_style';

const Speed = ({currentSpeed, setSpeed}) => {
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
        checked={currentSpeed === 0}
        onChange={onSpeedSelected}
      />
      <Label htmlFor='highSpeed'>Fast</Label>
      <InputRadio
        type='radio'
        name='speed'
        id='medSpeed'
        value='200'
        checked={currentSpeed === 200}
        onChange={onSpeedSelected}
      />
      <Label htmlFor='medSpeed'>Medium</Label>
      <InputRadio
        type='radio'
        name='speed'
        id='lowSpeed'
        value='1500'
        checked={currentSpeed === 1500}
        onChange={onSpeedSelected}
      />
      <Label htmlFor='lowSpeed'>Slow</Label>
    </RadioContainer>
  );
};

const mapStateToProps = (state) => ({
  currentSpeed: getSpeed(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSpeed: (speed) => dispatch(setSpeed(speed)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Speed);

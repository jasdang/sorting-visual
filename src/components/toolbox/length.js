import React from 'react';
import {connect} from 'react-redux';
import {generateArray} from '../actions';
import styled from 'styled-components';
import {pivotTileColor, tileColor, background} from '../colors';

const Length = ({generateArray}) => {
  const handleChange = (e) => {
    const length = parseInt(e.target.value);
    generateArray(length);
  };

  return (
    <InputRange
      type='range'
      name='arrayLength'
      id='arrayLength'
      defaultValue='85'
      min='20'
      max='150'
      onChange={handleChange}
    />
  );
};

const InputRange = styled.input`
  height: 5px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000;
    background: ${tileColor};
    border-radius: 3px;
    border: 0px solid #000000;
  }
  &::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid $tile;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: ${pivotTileColor};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: ${tileColor};
  }
  &::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000;
    background: ${tileColor};
    border-radius: 1px;
    border: 0px solid #000000;
  }
  &::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid $tile;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: ${pivotTileColor};
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: ${background};
    border-color: ${background};
    color: transparent;
  }
  &::-ms-fill-lower {
    background: ${tileColor};
    border: 0px solid #000000;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #000000;
  }
  &::-ms-fill-upper {
    background: ${tileColor};
    border: 0px solid #000000;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #000000;
  }
  &::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid ${tileColor};
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: ${pivotTileColor};
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: ${tileColor};
  }
  &:focus::-ms-fill-upper {
    background: ${tileColor};
  }
`;

const mapDispatchToProps = (dispatch) => ({
  generateArray: (length) => dispatch(generateArray(length)),
});

export default connect(null, mapDispatchToProps)(Length);

import React from 'react';
import {connect} from 'react-redux';
import {setAlgorithm} from '../actions';
import styled from 'styled-components';
import {currentTileColor, pivotTileColor} from '../colors';

const InputRadio = styled.input`
  display: none;
  &:checked + label {
    background: ${pivotTileColor};
  }
`;

const Label = styled.label`
  display: inline-block;
  border-radius: 2px;
  width: 160px;
  margin: 10px;
  margin-left: 0;
  padding: 8px;
  background: ${currentTileColor};
  font-weight: normal;
  text-align: center;
  &:hover {
    border: 1px solid ${currentTileColor};
  }
`;

const Algorithm = ({setAlgorithm}) => {
  const onAlgorithmSelected = (e) => {
    const algorithm = e.currentTarget.value;
    console.log(e.currentTarget.value);
    setAlgorithm(algorithm);
  };

  return (
    <div>
      <InputRadio
        type='radio'
        name='algorithm'
        id='quickSort'
        value='quickSort'
        onClick={onAlgorithmSelected}
      />
      <Label htmlFor='quickSort'>Quick Sort</Label>
      <InputRadio
        type='radio'
        name='algorithm'
        id='insertionSort'
        value='insertionSort'
        onClick={onAlgorithmSelected}
      />
      <Label htmlFor='insertionSort'>Insertion Sort</Label>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setAlgorithm: (algorithm) => {
    dispatch(setAlgorithm(algorithm));
  },
});
export default connect(null, mapDispatchToProps)(Algorithm);

import React from 'react';
import {connect} from 'react-redux';
import {setAlgorithm} from '../actions';
import {getAlgorithm} from '../selectors';
import styled from 'styled-components';
import {Label, RadioContainer, InputRadio} from './common_style';

const LongLabel = styled(Label)`
  width: 140px;
`;

const Algorithm = ({algorithm, setAlgorithm}) => {
  const onAlgorithmSelected = (e) => {
    const algorithm = e.currentTarget.value;
    setAlgorithm(algorithm);
  };

  return (
    <RadioContainer>
      <InputRadio
        type='radio'
        name='algorithm'
        id='quickSort'
        value='quickSort'
        checked={algorithm === 'quickSort'}
        onChange={onAlgorithmSelected}
      />
      <LongLabel htmlFor='quickSort'>Quick Sort</LongLabel>
      <InputRadio
        type='radio'
        name='algorithm'
        id='insertionSort'
        value='insertionSort'
        checked={algorithm === 'insertionSort'}
        onChange={onAlgorithmSelected}
      />
      <LongLabel htmlFor='insertionSort'>Insertion Sort</LongLabel>
    </RadioContainer>
  );
};

const mapStateToProps = (state) => ({
  algorithm: getAlgorithm(state),
});
const mapDispatchToProps = (dispatch) => ({
  setAlgorithm: (algorithm) => {
    dispatch(setAlgorithm(algorithm));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Algorithm);

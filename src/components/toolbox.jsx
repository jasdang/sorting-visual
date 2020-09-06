import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {generateArray} from './actions';

const ToolBoxContainer = styled.div`
  border: 1px solid red;
  width: 300px;
`;

const Button = styled.button`
  display: block;
`;
const ToolBox = ({onGenerateArrayPressed, handleClick, generateArray}) => {
  const handleChange = (e) => {
    const length = parseInt(e.target.value);
    console.log(e.target.value);
    generateArray(length);
  };
  return (
    <ToolBoxContainer>
      <Button onClick={onGenerateArrayPressed}>{'Generate'}</Button>
      <Button onClick={handleClick}>{'Sort'}</Button>
      <input
        type='range'
        name='arrayLength'
        id='arrayLength'
        onChange={handleChange}
      />
    </ToolBoxContainer>
  );
};
const mapPropsToState = () => {};
const mapDispatchToState = (dispatch) => ({
  generateArray: (length) => dispatch(generateArray(length)),
});
export default connect(null, mapDispatchToState)(ToolBox);

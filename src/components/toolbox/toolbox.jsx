import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Length from './length';
import Speed from './speed';
import Algorithm from './algorithm';
import Sort from './sort';
import {generateArray} from '../actions';
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

const ToolBox = ({generateArray}) => {
  const onGenerateArrayPressed = () => {
    const length = parseInt(document.getElementById('arrayLength').value);
    generateArray(length);
  };

  return (
    <ToolBoxContainer>
      <p>Set Array Length</p>
      <Length />

      <Button onClick={onGenerateArrayPressed}>Refresh</Button>

      <p>Set Speed</p>
      <Speed />

      <p>Set Algorithm</p>
      <Algorithm />

      <Sort />
    </ToolBoxContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  generateArray: (length) => dispatch(generateArray(length)),
});

export default connect(null, mapDispatchToProps)(ToolBox);

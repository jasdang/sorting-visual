import React from 'react';
import styled from 'styled-components';
import Length from './length';
import Speed from './speed';
import Algorithm from './algorithm';
import Sort from './sort';

const ToolBoxContainer = styled.div`
  width: 500px;
  padding: 50px;
`;

const ToolBox = () => {
  return (
    <ToolBoxContainer>
      <p>Set Array Length</p>
      <Length />

      <p>Set Speed</p>
      <Speed />

      <p>Set Algorithm</p>
      <Algorithm />

      <Sort />
    </ToolBoxContainer>
  );
};

export default ToolBox;

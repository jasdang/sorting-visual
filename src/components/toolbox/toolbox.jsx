import React from 'react';
import styled from 'styled-components';
import Length from './length';
import Speed from './speed';
import Algorithm from './algorithm';
import Sort from './sort';

const ToolBoxContainer = styled.div`
  width: 500px;
  height: fit-content;
  padding: 50px;
  display: grid;
  grid-template-columns: 100px 300px;
  grid-template-rows: auto;
  grid-gap: 20px;
`;
const FullRow = styled.div`
  grid-column: 1/3;
`;
const SecondCol = styled.div`
  grid-column: 2/3;
`;
const ToolBox = () => {
  return (
    <ToolBoxContainer>
      <FullRow>
        <h3>Settings</h3>
      </FullRow>
      <p>Array Length</p>
      <Length />

      <div>Speed</div>
      <Speed />

      <div>Set Algorithm</div>
      <Algorithm />
      <SecondCol>
        <Sort />
      </SecondCol>
    </ToolBoxContainer>
  );
};

export default ToolBox;

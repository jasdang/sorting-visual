import React from 'react';
import styled from 'styled-components';
import Length from './length';
import Speed from './speed';
import Algorithm from './algorithm';
import Sort from './sort';

const ToolBoxContainer = styled.div`
  height: fit-content;
  margin: 50px;
  display: grid;
  grid-template-columns: 100px auto;
  grid-template-rows: auto;
  grid-gap: 20px;
  @media screen and (max-width: 992px) {
    padding: 8vw;
    padding-bottom: 0;
    grid-template-columns: 1fr 3fr;
  }
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

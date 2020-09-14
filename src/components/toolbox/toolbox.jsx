import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Length from './length';
import Speed from './speed';
import Algorithm from './algorithm';
import Sort from './sort';
import {getToolBoxShow} from '../selectors';

const ToolBoxContainer = styled.div`
  height: fit-content;
  padding: 50px;
  display: grid;
  grid-template-columns: 100px 300px;
  grid-template-rows: auto;
  grid-gap: 20px;
  @media screen and (max-width: 992px) {
    ${'' /* display: none; */}
    display: ${(props) => {
      console.log(props.show);
      return props.show ? 'block' : 'none';
    }};
    float: right;
  }
`;
const FullRow = styled.div`
  grid-column: 1/3;
`;
const SecondCol = styled.div`
  grid-column: 2/3;
`;
const ToolBox = ({show}) => {
  return (
    <ToolBoxContainer show={show}>
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

const mapStateToProps = (state) => ({
  show: getToolBoxShow(state),
});
export default connect(mapStateToProps)(ToolBox);

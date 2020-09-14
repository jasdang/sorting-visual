import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Nav = styled.div`
  ${'' /* display: none; */}
  @media screen and (max-width: 992px) {
  }
`;

const HiddenNav = () => {
  return <div></div>;
};

export default HiddenNav;

import React from 'react';
import BarList from './bar/bar_list';
import ToolBox from './toolbox/toolbox';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 30vw 70vw;
  @media screen and (max-width: 992px) {
    grid-template-columns: 100vw;
    width: 100vw;
    height: 100vh;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <ToolBox />
      <BarList />
    </AppContainer>
  );
};

export default App;

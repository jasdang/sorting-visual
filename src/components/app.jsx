import React from 'react';
import BarList from './bar/bar_list';
import ToolBox from './toolbox/toolbox';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 70vw 30vw;
`;

const App = () => {
  return (
    <AppContainer>
      <BarList />
      <ToolBox />
    </AppContainer>
  );
};

export default App;

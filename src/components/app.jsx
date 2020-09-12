import React from 'react';
import BarList from './bar/bar_list';
import ToolBox from './toolbox/toolbox';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
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

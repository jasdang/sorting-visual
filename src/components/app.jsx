import React from 'react';
import {connect} from 'react-redux';
import {generateArray, updateArray, updateColor} from './actions';
import {getTiles, getColors} from './selectors';
import BarList from './bar_list';
import ToolBox from './toolbox';
import quickSort from '../algorithms/quick_sort_algo';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const App = ({tiles = [], colors = [], onGenerateArrayPressed}) => {
  const handleClick = () => {
    quickSort(tiles, colors);
  };
  return (
    <AppContainer>
      <BarList />
      <ToolBox
        onGenerateArrayPressed={onGenerateArrayPressed}
        handleClick={handleClick}></ToolBox>
    </AppContainer>
  );
};

const mapStateToProps = (state) => ({
  tiles: getTiles(state),
  colors: getColors(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenerateArrayPressed: () => dispatch(generateArray()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

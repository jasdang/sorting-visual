import React, {Component} from 'react';
import {connect} from 'react-redux';
import {generateArray, updateArray, updateColor} from './actions';
import TileList from './tile_list';
import quickSort from './sorting_algorithms';

const App = ({
  tiles = [],
  colors = [],
  onGenerateArrayPressed,
  updateArray,
  updateColor,
}) => {
  const handleClick = () => {
    quickSort(tiles, colors);
  };
  return (
    <div>
      <TileList values={tiles} colors={colors} />
      <button onClick={onGenerateArrayPressed}>{'Generate'}</button>
      <button onClick={handleClick}>{'Sort'}</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tiles: state.array.tiles,
  colors: state.array.colors,
});
const mapDispatchToProps = (dispatch) => ({
  onGenerateArrayPressed: () => dispatch(generateArray()),
  updateArray: (tiles) => dispatch(updateArray([...tiles])),
  updateColor: (colors) => dispatch(updateColor([...colors])),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

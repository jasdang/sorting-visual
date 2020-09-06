import React from 'react';
import {connect} from 'react-redux';
import {generateArray, updateArray, updateColor} from './actions';
import Bar_list from './bar_list';
import quickSort from '../algorithms/quick_sort_algo';

const App = ({tiles = [], colors = [], onGenerateArrayPressed}) => {
  const handleClick = () => {
    quickSort(tiles, colors);
  };
  return (
    <div>
      <Bar_list values={tiles} colors={colors} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

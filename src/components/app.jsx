import React, {Component} from 'react';
import {connect} from 'react-redux';
import {generateArray, quickSortAction} from './actions';
import TileList from './tile_list';
import Bar from './bar';
import regeneratorRuntime from 'regenerator-runtime';

const App = ({
  tiles = [],
  colors = [],
  onGenerateArrayPressed,
  onQuickSortPressed,
}) => {
  const addTiles = (array) => {
    return array;
  };
  const addColors = (array) => {
    return array;
  };

  const handleClick = () => {
    quickSort(tiles);
  };

  // TESTING
  const quickSort = (array) => {
    let colors = Array(array.length).fill(false);
    return quickSortHelper(array, 0, array.length - 1, colors);
  };

  const quickSortHelper = async (array, startId, endId, colors) => {
    if (endId - startId < 1) {
      colors[endId] = true;
      colors[startId] = true;
      addColors(colors);
      addTiles(array);
      colors[endId] = false;
      colors[startId] = false;
      return array;
    }

    if (endId - startId === 1) {
      if (array[endId] < array[startId]) {
        await swap(array, startId, endId);
      }
      colors[endId] = true;
      colors[startId] = true;
      addColors(colors);
      addTiles(array);
      colors[endId] = false;
      colors[startId] = false;
      return array;
    }

    let pointer = array[startId];
    let i = startId + 1;
    let j = endId;
    while (i <= j) {
      colors[startId] = true;
      if (array[i] > pointer && array[j] <= pointer) {
        await swap(array, i, j);
      } else if (array[i] <= pointer) {
        colors[i] = false;
        i++;
        colors[i] = true;
        addColors(colors);
      } else if (array[j] > pointer) {
        colors[j] = false;
        j--;
        colors[j] = true;
        addColors(colors);
      }
      // this.addColors(colors);
      addTiles(array);
    }
    colors[startId] = false;
    colors[i] = false;
    colors[j] = false;
    addColors(colors);
    await swap(array, startId, j);
    colors[startId] = true;
    colors[j] = true;
    addColors(colors);
    addTiles(array);
    colors[startId] = false;
    colors[j] = false;
    if (j - startId < endId - j) {
      await Promise.all([
        quickSortHelper(array, startId, j - 1, colors),
        quickSortHelper(array, j + 1, endId, colors),
      ]);
    } else {
      await Promise.all([
        quickSortHelper(array, j + 1, endId, colors),
        quickSortHelper(array, startId, j - 1, colors),
      ]);
    }
    addTiles(array);
    return array;
  };

  const swap = async (array, i, j) => {
    await sleep(0);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  console.log(tiles);
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
  color: [],
});
const mapDispatchToProps = (dispatch) => ({
  onGenerateArrayPressed: () => dispatch(generateArray()),
  onQuickSortPressed: () => dispatch(quickSortAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

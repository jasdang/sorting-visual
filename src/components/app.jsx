import React, {Component} from 'react';
import {connect} from 'react-redux';
import {generateArray, updateArray, updateColor} from './actions';
import TileList from './tile_list';
import Bar from './bar';
import regeneratorRuntime from 'regenerator-runtime';

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

  // TESTING
  const quickSort = (array, colors) => {
    return quickSortHelper(array, 0, array.length - 1, colors);
  };

  const quickSortHelper = async (array, startId, endId, colors) => {
    if (
      startId < 0 ||
      endId < 0 ||
      startId >= array.length ||
      startId >= array.length
    )
      return array;

    if (endId - startId < 1) {
      // colors[endId] = true;
      colors[startId] = true;
      updateColor(colors);
      updateArray(array);
      // colors[endId] = false;
      colors[startId] = false;
      updateColor(colors);
      // console.log('1', colors.length);
      return array;
    }

    if (endId - startId === 1) {
      if (array[endId] < array[startId]) {
        await swap(array, startId, endId);
      }
      colors[endId] = true;
      colors[startId] = true;
      updateColor(colors);
      updateArray(array);
      colors[endId] = false;
      colors[startId] = false;
      updateColor(colors);
      // console.log('2', colors.length);

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
        updateColor(colors);
      } else if (array[j] > pointer) {
        colors[j] = false;
        updateColor(colors);
        j--;
        colors[j] = true;
        updateColor(colors);
      }
      // this.updateColor(colors);
      updateArray(array);
    }
    colors[startId] = false;
    colors[i] = false;
    colors[j] = false;
    updateColor(colors);
    await swap(array, startId, j);
    colors[startId] = true;
    colors[j] = true;
    updateColor(colors);
    updateArray(array);
    colors[startId] = false;
    colors[j] = false;
    updateColor(colors);
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
    updateArray(array);
    // console.log('3', colors.length);
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
  updateArray: (tiles) => dispatch(updateArray(tiles)),
  updateColor: (colors) => dispatch(updateColor(colors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

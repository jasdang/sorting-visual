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
    colors[startId] = 'red';
    colors[endId] = 'red';
    updateColor(colors);

    if (
      startId < 0 ||
      endId < 0 ||
      startId >= array.length ||
      startId >= array.length
    )
      return array;

    if (endId - startId < 1) {
      updateArray(array);

      colors[startId] = 'black';
      colors[endId] = 'black';
      updateColor(colors);

      return array;
    }

    if (endId - startId === 1) {
      if (array[endId] < array[startId]) {
        await swap(array, startId, endId);
        colors[startId] = 'grey';
        colors[endId] = 'grey';
        updateColor(colors);
      }
      updateArray(array);
      colors[startId] = 'black';
      colors[endId] = 'black';
      updateColor(colors);
      return array;
    }

    let pointer = array[startId];
    let i = startId + 1;
    let j = endId;
    while (i <= j) {
      colors[i] = 'grey';
      colors[j] = 'grey';
      updateColor(colors);

      if (array[i] > pointer && array[j] <= pointer) {
        await swap(array, i, j);
        colors[i] = 'grey';
        colors[j] = 'grey';
      } else if (array[i] <= pointer) {
        colors[i] = 'blue';
        updateColor(colors);
        i++;
      } else if (array[j] > pointer) {
        colors[j] = 'blue';
        j--;
      }
      updateArray(array);
    }
    await swap(array, startId, j);
    updateArray(array);
    colors[j] = 'black';
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
    colors[startId] = 'black';
    colors[endId] = 'black';
    updateColor(colors);
    return array;
  };

  const swap = async (array, i, j) => {
    await sleep(20);
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
  updateArray: (tiles) => dispatch(updateArray([...tiles])),
  updateColor: (colors) => dispatch(updateColor([...colors])),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

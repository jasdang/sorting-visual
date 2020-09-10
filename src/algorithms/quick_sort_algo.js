import {store} from '../../store';
import {updateColor, updateArray} from '../components/actions';
import {
  tileColor,
  sortedTileColor,
  pivotTileColor,
  currentTileColor,
} from '../components/colors';
import {swap} from './helper';
import regeneratorRuntime from 'regenerator-runtime';

const quickSort = (array, colors) => {
  return quickSortHelper(array, 0, array.length - 1, colors);
};

const quickSortHelper = async (array, startId, endId, colors) => {
  colors[startId] = pivotTileColor;
  colors[endId] = pivotTileColor;
  store.dispatch(updateColor(colors));

  if (endId - startId < 1) {
    store.dispatch(updateArray(array));

    colors[startId] = sortedTileColor;
    colors[endId] = sortedTileColor;
    store.dispatch(updateColor(colors));

    return array;
  }

  if (endId - startId === 1) {
    if (array[endId] < array[startId]) {
      await swap(array, startId, endId);
      colors[startId] = currentTileColor;
      colors[endId] = currentTileColor;
      store.dispatch(updateColor(colors));
    }
    store.dispatch(updateArray(array));
    colors[startId] = sortedTileColor;
    colors[endId] = sortedTileColor;
    store.dispatch(updateColor(colors));
    return array;
  }

  let pointer = array[startId];
  let i = startId + 1;
  let j = endId;
  while (i <= j) {
    colors[i] = currentTileColor;
    colors[j] = currentTileColor;
    store.dispatch(updateColor(colors));

    if (array[i] > pointer && array[j] <= pointer) {
      await swap(array, i, j);
      colors[i] = currentTileColor;
      colors[j] = currentTileColor;
    } else if (array[i] <= pointer) {
      colors[i] = tileColor;
      store.dispatch(updateColor(colors));
      i++;
    } else if (array[j] > pointer) {
      colors[j] = tileColor;
      j--;
    }
    store.dispatch(updateArray(array));
  }
  await swap(array, startId, j);
  store.dispatch(updateArray(array));
  colors[j] = sortedTileColor;
  store.dispatch(updateColor(colors));
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
  store.dispatch(updateArray(array));
  colors[startId] = sortedTileColor;
  colors[endId] = sortedTileColor;
  store.dispatch(updateColor(colors));
  return array;
};

// const swap = async (array, i, j) => {
//   const speed = getSpeed(store.getState());
//   await sleep(speed);
//   let temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
//   return array;
// };

export default quickSort;

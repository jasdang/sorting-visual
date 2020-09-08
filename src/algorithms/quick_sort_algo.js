import {store} from '../../store';
import {updateColor, updateArray} from '../components/actions';
import regeneratorRuntime from 'regenerator-runtime';

const quickSort = (array, colors) => {
  return quickSortHelper(array, 0, array.length - 1, colors);
};

const quickSortHelper = async (array, startId, endId, colors) => {
  colors[startId] = 'red';
  colors[endId] = 'red';
  store.dispatch(updateColor(colors));

  if (endId - startId < 1) {
    store.dispatch(updateArray(array));

    colors[startId] = 'black';
    colors[endId] = 'black';
    store.dispatch(updateColor(colors));

    return array;
  }

  if (endId - startId === 1) {
    if (array[endId] < array[startId]) {
      await swap(array, startId, endId);
      colors[startId] = 'grey';
      colors[endId] = 'grey';
      store.dispatch(updateColor(colors));
    }
    store.dispatch(updateArray(array));
    colors[startId] = 'black';
    colors[endId] = 'black';
    store.dispatch(updateColor(colors));
    return array;
  }

  let pointer = array[startId];
  let i = startId + 1;
  let j = endId;
  while (i <= j) {
    colors[i] = 'grey';
    colors[j] = 'grey';
    store.dispatch(updateColor(colors));

    if (array[i] > pointer && array[j] <= pointer) {
      await swap(array, i, j);
      colors[i] = 'grey';
      colors[j] = 'grey';
    } else if (array[i] <= pointer) {
      colors[i] = 'blue';
      store.dispatch(updateColor(colors));
      i++;
    } else if (array[j] > pointer) {
      colors[j] = 'blue';
      j--;
    }
    store.dispatch(updateArray(array));
  }
  await swap(array, startId, j);
  store.dispatch(updateArray(array));
  colors[j] = 'black';
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
  colors[startId] = 'black';
  colors[endId] = 'black';
  store.dispatch(updateColor(colors));
  return array;
};

const swap = async (array, i, j) => {
  const speed = store.getState().array.speed;
  await sleep(speed);
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default quickSort;

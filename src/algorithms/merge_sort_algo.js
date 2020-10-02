import {store} from '../../store';
import {updateColor, updateArray} from '../components/actions';
import {
  tileColor,
  sortedTileColor,
  pivotTileColor,
  currentTileColor,
} from '../components/colors';
import {sleep} from './helper';
import {getSpeed} from '../components/selectors';
import regeneratorRuntime from 'regenerator-runtime';

const mergeSort = (array, colors) => {
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, colors);
  return array;
};

const mergeSortHelper = (mainArray, startId, endId, auxiliaryArray, colors) => {
  if (startId === endId) return;
  const middleId = Math.floor((startId + endId) / 2);
  mergeSortHelper(auxiliaryArray, startId, middleId, mainArray, colors);
  mergeSortHelper(auxiliaryArray, middleId + 1, endId, mainArray, colors);
  doMerge(mainArray, startId, middleId, endId, auxiliaryArray, colors);
};

const doMerge = async (
  mainArray,
  startId,
  middleId,
  endId,
  auxiliaryArray,
  colors
) => {
  const speed = getSpeed(store.getState());
  await sleep(speed);

  let k = startId;
  let i = startId;
  let j = middleId + 1;

  store.dispatch(updateColor(colors));
  while (i <= middleId && j <= endId) {
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      mainArray[k++] = auxiliaryArray[j++];
    }
    store.dispatch(updateArray(mainArray));
  }
  while (i <= middleId) {
    mainArray[k++] = auxiliaryArray[i++];
    store.dispatch(updateArray(mainArray));
  }
  while (j <= endId) {
    mainArray[k++] = auxiliaryArray[j++];
    store.dispatch(updateArray(mainArray));
  }
};

export default mergeSort;

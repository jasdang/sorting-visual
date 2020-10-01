import {store} from '../../store';
import {updateColor, updateArray} from '../components/actions';
import {
  tileColor,
  sortedTileColor,
  pivotTileColor,
  currentTileColor,
} from '../components/colors';
import {sleep} from './helper';
import regeneratorRuntime from 'regenerator-runtime';

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray);
  store.dispatch(updateArray(array));
  return array;
};

const mergeSortHelper = (mainArray, startId, endId, auxiliaryArray) => {
  if (startId === endId) return;
  const middleId = Math.floor((startId + endId) / 2);
  mergeSortHelper(auxiliaryArray, startId, middleId, mainArray);
  mergeSortHelper(auxiliaryArray, middleId + 1, endId, mainArray);
  doMerge(mainArray, startId, middleId, endId, auxiliaryArray);
};

const doMerge = (mainArray, startId, middleId, endId, auxiliaryArray) => {
  let k = startId;
  let i = startId;
  let j = middleId + 1;
  while (i <= middleId && j <= endId) {
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleId) {
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endId) {
    mainArray[k++] = auxiliaryArray[j++];
  }
};

export default mergeSort;

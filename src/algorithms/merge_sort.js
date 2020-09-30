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

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  } else if (array.length === 2) {
    const splitted = split(array);
    const firstArr = splitted[0];
    const secondArr = splitted[1];
    return merge(firstArr, secondArr);
  } else {
    const splitted = split(array);
    const firstArr = mergeSort(splitted[0]);
    const secondArr = mergeSort(splitted[1]);
    return merge(firstArr, secondArr);
  }
};

const split = (array) => {
  const midIdx = Math.floor((array.length - 1) / 2);
  const firstArr = array.slice(0, midIdx + 1);
  const secondArr = array.slice(midIdx + 1);
  return [firstArr, secondArr];
};

const merge = (firstArr, secondArr) => {
  const arr = [];
  let i = 0;
  let j = 0;

  while (i < firstArr.length && j < secondArr.length) {
    if (firstArr[i] <= secondArr[j]) {
      arr.push(firstArr[i]);
      i++;
    } else {
      arr.push(secondArr[j]);
      j++;
    }
  }
  const newArr =
    i >= firstArr.length
      ? arr.concat(secondArr.slice(j))
      : arr.concat(firstArr.slice(i));
  return newArr;
};

export default mergeSort;

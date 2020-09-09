import {store} from '../../store';
import {updateArray} from '../components/actions';

const insertionSort = (array) => {
  // Write your code here.
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(array, j, j - 1);
      j--;
    }
  }
  store.dispatch(updateArray(array));
  return array;
};

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
};

export default insertionSort;

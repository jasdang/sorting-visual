import {store} from '../../store';
import {updateArray} from '../components/actions';
import {swap} from './helper';
import regeneratorRuntime from 'regenerator-runtime';

const insertionSort = async (array) => {
  // Write your code here.
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      await swap(array, j, j - 1);
      j--;
    }
  }
  store.dispatch(updateArray(array));
  return array;
};

export default insertionSort;

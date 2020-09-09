import regeneratorRuntime from 'regenerator-runtime';
import {getSpeed} from '../components/selectors';
import {store} from '../../store';

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const swap = async (array, i, j) => {
  const speed = getSpeed(store.getState());
  await sleep(speed);
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
};

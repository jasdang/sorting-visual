import {store} from '../../store';
import {updatetiles, updateColor, updateArray} from '../components/actions';
import {swap} from './helper';
import regeneratorRuntime from 'regenerator-runtime';

const insertionSort = async (tiles, colors) => {
  for (let i = 1; i < tiles.length; i++) {
    let j = i;
    colors[0] = 'grey';
    store.dispatch(updateColor(colors));
    while (j > 0 && tiles[j] < tiles[j - 1]) {
      colors[0] = 'black';
      store.dispatch(updateColor(colors));

      colors[j] = 'grey';
      store.dispatch(updateColor(colors));
      await swap(tiles, j, j - 1);
      store.dispatch(updateArray(tiles));
      colors[j] = 'black';
      colors[j - 1] = 'black';
      store.dispatch(updateColor(colors));
      j--;
    }
    colors[i] = 'black';
    store.dispatch(updateColor(colors));
  }
  store.dispatch(updateArray(tiles));
  return tiles;
};

export default insertionSort;

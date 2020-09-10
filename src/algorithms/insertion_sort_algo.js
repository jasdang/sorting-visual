import {store} from '../../store';
import {updatetiles, updateColor, updateArray} from '../components/actions';
import {swap} from './helper';
import {sortedTileColor, pivotTileColor} from '../components/colors';
import regeneratorRuntime from 'regenerator-runtime';

const insertionSort = async (tiles, colors) => {
  colors[0] = 'grey';
  store.dispatch(updateColor(colors));
  for (let i = 1; i < tiles.length; i++) {
    colors[i + 1] = pivotTileColor;
    store.dispatch(updateColor(colors));
    let j = i;
    while (j > 0 && tiles[j] < tiles[j - 1]) {
      colors[0] = sortedTileColor;
      store.dispatch(updateColor(colors));
      colors[j] = 'grey';
      store.dispatch(updateColor(colors));
      await swap(tiles, j, j - 1);
      store.dispatch(updateArray(tiles));
      colors[j] = sortedTileColor;
      colors[j - 1] = sortedTileColor;
      store.dispatch(updateColor(colors));
      j--;
    }
    colors[i] = sortedTileColor;
    store.dispatch(updateColor(colors));
  }
  store.dispatch(updateArray(tiles));
  return tiles;
};

export default insertionSort;

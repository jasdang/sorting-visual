import {createStore, combineReducers} from 'redux';
import {reducers, createArray} from './src/components/reducers';
import {tileColor} from './src/components/colors';

const initialTiles = createArray();
const initialColors = initialTiles.slice().fill(tileColor);
const initialStore = {
  array: {
    tiles: initialTiles,
    colors: initialColors,
    speed: 0,
    algorithm: '',
  },
  toolbox: {
    show: false,
  },
};
const configuredStore = () =>
  createStore(
    reducers,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export const store = configuredStore();

import {createStore, combineReducers} from 'redux';
import {array, createArray} from './src/components/reducers';
import {tileColor} from './src/components/colors';
const reducers = {array};

const rootReducer = combineReducers(reducers);

const initialTiles = createArray();
const initialColors = initialTiles.slice().fill(tileColor);
const initialStore = {
  array: {
    tiles: initialTiles,
    colors: initialColors,
    speed: 0,
    algorithm: '',
  },
};
const configuredStore = () =>
  createStore(
    rootReducer,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export const store = configuredStore();

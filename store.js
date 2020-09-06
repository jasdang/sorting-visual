import {createStore, combineReducers} from 'redux';
import {array, createArray} from './src/components/reducers';

const reducers = {array};

const rootReducer = combineReducers(reducers);

const initialTiles = createArray();
const initialColors = initialTiles.slice().fill('blue');
const initialStore = {
  array: {
    tiles: initialTiles,
    colors: initialColors,
  },
};
const configuredStore = () =>
  createStore(
    rootReducer,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export const store = configuredStore();

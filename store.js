import {createStore, combineReducers} from 'redux';
import {array} from './src/components/reducers';

const reducers = {array};

const rootReducer = combineReducers(reducers);

const initialStore = {
  array: {
    tiles: [],
    colors: [],
  },
};
export const configuredStore = () =>
  createStore(
    rootReducer,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

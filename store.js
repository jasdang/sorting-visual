import {createStore, combineReducers} from 'redux';
import {array} from './src/components/reducers';

const reducers = {array};

const rootReducer = combineReducers(reducers);

export const configuredStore = () => createStore(rootReducer);

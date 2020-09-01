import {GENERATE_ARRAY, QUICK_SORT} from './actions';

export const array = (state = [], action) => {
  const {type, payload} = action;

  switch (type) {
    case GENERATE_ARRAY: {
      let array = [];
      for (let i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random() * 100));
      }
      return {
        ...state,
        tiles: array,
      };
    }
    case QUICK_SORT: {
      const {array} = payload;
      return {
        ...state,
        tiles: array,
      };
    }
    default:
      return state;
  }
};

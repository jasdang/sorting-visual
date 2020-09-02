import {GENERATE_ARRAY, UPDATE_ARRAY, UPDATE_COLOR} from './actions';

export const array = (state = {}, action) => {
  const {type, payload} = action;

  switch (type) {
    case GENERATE_ARRAY: {
      let array = [];
      for (let i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random() * 100));
      }
      console.log(array);
      return {
        ...state,
        tiles: array,
        colors: array.slice().fill(false),
      };
    }
    case UPDATE_ARRAY: {
      const {array} = payload;
      return {
        ...state,
        tiles: array,
        colors: array.slice().fill(false),
      };
    }
    case UPDATE_COLOR: {
      const {colors} = payload;
      return {
        ...state,
        colors: colors,
      };
    }
    default:
      return state;
  }
};

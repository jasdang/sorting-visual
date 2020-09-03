import {GENERATE_ARRAY, UPDATE_ARRAY, UPDATE_COLOR} from './actions';

export const array = (state = {}, action) => {
  // console.log({state, action});
  const {type, payload} = action;

  switch (type) {
    case GENERATE_ARRAY: {
      let array = [];
      for (let i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random() * 100));
      }
      return {
        ...array,
        tiles: array,
        colors: array.slice().fill(false),
      };
    }
    case UPDATE_ARRAY: {
      const {tiles} = payload;
      return {
        ...array,
        tiles: tiles,
        // colors: [],
      };
    }
    case UPDATE_COLOR: {
      const {colors} = payload;
      console.log(colors.some((c) => c === true));
      return {
        ...array,
        colors: colors,
      };
    }
    default:
      return state;
  }
};

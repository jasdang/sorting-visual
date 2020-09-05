import {GENERATE_ARRAY, UPDATE_ARRAY, UPDATE_COLOR} from './actions';

export const array = (state = {}, action) => {
  // console.log({state, action});
  const {type, payload} = action;

  switch (type) {
    case GENERATE_ARRAY: {
      let tiles = [];
      for (let i = 0; i < 100; i++) {
        tiles.push(Math.floor(Math.random() * 100));
      }
      return {
        // ...array,
        tiles: tiles,
        colors: tiles.slice().fill(false),
      };
    }
    case UPDATE_ARRAY: {
      const {tiles} = payload;
      return {
        ...state,
        tiles: tiles,
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

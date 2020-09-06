import {GENERATE_ARRAY, UPDATE_ARRAY, UPDATE_COLOR} from './actions';

export const array = (state = {}, action) => {
  const {type, payload} = action;

  switch (type) {
    case GENERATE_ARRAY: {
      const {length} = payload;
      let tiles = createArray(length);
      console.log(length);
      return {
        ...state,
        tiles: [...tiles],
        colors: tiles.slice().fill('blue'),
      };
    }
    case UPDATE_ARRAY: {
      const {tiles} = payload;
      return {
        ...state,
        tiles: [...tiles],
      };
    }
    case UPDATE_COLOR: {
      const {colors} = payload;
      return {
        ...state,
        colors: [...colors],
      };
    }
    default:
      return state;
  }
};

export const createArray = (length = 50) => {
  let tiles = [];
  for (let i = 0; i < length; i++) {
    tiles.push(Math.floor(Math.random() * 100));
  }
  return tiles;
};

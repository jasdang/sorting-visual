import {
  GENERATE_ARRAY,
  UPDATE_ARRAY,
  UPDATE_COLOR,
  SET_SPEED,
  SET_ALGORITHM,
} from './actions';
import {tileColor} from './colors';

export const array = (state = {}, action) => {
  const {type, payload} = action;

  switch (type) {
    case GENERATE_ARRAY: {
      const {length} = payload;
      let tiles = createArray(length);
      return {
        ...state,
        tiles: [...tiles],
        colors: tiles.slice().fill(tileColor),
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
    case SET_SPEED: {
      const {speed} = payload;
      return {
        ...state,
        speed: speed,
      };
    }
    case SET_ALGORITHM: {
      const {algorithm} = payload;
      return {
        ...state,
        algorithm: algorithm,
      };
    }
    default:
      return state;
  }
};

export const createArray = (length = 85) => {
  let tiles = [];
  for (let i = 0; i < length; i++) {
    const h = Math.floor(Math.random() * 80);
    if (h < 5) h = 5;
    tiles.push(h);
  }
  console.log(tiles.some((h) => h < 5));
  return tiles;
};

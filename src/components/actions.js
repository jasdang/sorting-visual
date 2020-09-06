export const GENERATE_ARRAY = 'GENERATE_ARRAY';
export const generateArray = (length) => ({
  type: GENERATE_ARRAY,
  payload: {length},
});

export const UPDATE_ARRAY = 'UPDATE_ARRAY';
export const updateArray = (tiles) => ({
  type: UPDATE_ARRAY,
  payload: {tiles},
});

export const UPDATE_COLOR = 'UPDATE_COLOR';
export const updateColor = (colors) => ({
  type: UPDATE_COLOR,
  payload: {colors},
});

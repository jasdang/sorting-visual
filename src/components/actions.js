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

export const SET_SPEED = 'SET_SPEED';
export const setSpeed = (speed) => ({
  type: SET_SPEED,
  payload: {speed},
});

export const SET_ALGORITHM = 'SET_ALGORITHM';
export const setAlgorithm = (algorithm) => ({
  type: SET_ALGORITHM,
  payload: {algorithm},
});

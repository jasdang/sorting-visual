export const GENERATE_ARRAY = 'GENERATE_ARRAY';
export const generateArray = () => ({
  type: GENERATE_ARRAY,
});

export const UPDATE_ARRAY = 'UPDATE_ARRAY';
export const updateArray = (array) => ({
  type: UPDATE_ARRAY,
  payload: {array},
});

export const UPDATE_COLOR = 'UPDATE_COLOR';
export const updateColor = (colors) => ({
  type: UPDATE_COLOR,
  payload: {colors},
});

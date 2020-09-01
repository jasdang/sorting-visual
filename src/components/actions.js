export const GENERATE_ARRAY = 'GENERATE_ARRAY';
export const generateArray = () => ({
  type: GENERATE_ARRAY,
});

export const UPDATE_ARRAY = 'UPDATE_ARRAY';
export const updateArray = (array) => ({
  type: UPDATE_ARRAY,
  payload: {array},
});

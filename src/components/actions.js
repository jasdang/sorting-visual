export const GENERATE_ARRAY = 'GENERATE_ARRAY';
export const generateArray = () => ({
  type: GENERATE_ARRAY,
});

export const QUICK_SORT = 'QUICK_SORT';
export const quickSortAction = (array) => ({
  type: QUICK_SORT,
  payload: array,
});

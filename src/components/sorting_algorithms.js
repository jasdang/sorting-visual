const quickSort = (array) => {
  return quickSortHelper(array, 0, array.length - 1);
};

const quickSortHelper = (array, startId, endId) => {
  if (endId - startId < 1) return array;

  if (endId - startId === 1) {
    if (array[endId] < array[startId]) {
      swap(array, startId, endId);
    }
    return array;
  }

  let pointer = array[startId];
  let i = startId + 1;
  let j = endId;
  while (i <= j) {
    if (array[i] > pointer && array[j] <= pointer) {
      swap(array, i, j);
    } else if (array[i] <= pointer) {
      i++;
    } else if (array[j] > pointer) {
      j--;
    }
  }
  swap(array, startId, j);
  if (j - startId < endId - j) {
    quickSortHelper(array, startId, j - 1);
    quickSortHelper(array, j + 1, endId);
  } else {
    quickSortHelper(array, j + 1, endId);
    quickSortHelper(array, startId, j - 1);
  }
  return array;
};

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
};
export default quickSort;

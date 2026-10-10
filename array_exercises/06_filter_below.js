// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
//
// Do not modify the input array.

function filterBelow(array, threshold) {
  const belowThreshold = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < threshold) {
      belowThreshold.push(array[i]);
    }
  }

  return belowThreshold;
}

const arr = [6, 2, 3, 1, 4, 7];

const belowThreshold = filterBelow(arr, 0);

console.log(belowThreshold);

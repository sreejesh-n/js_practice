// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
//
// Do not modify the input array.

function filterAbove(array, threshold) {
  const aboveThreshold = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > threshold) {
      aboveThreshold.push(array[i]);
    }
  }

  return aboveThreshold;
}

const arr = [6, 2, 3, 1, 4, 7];

const aboveThreshold = filterAbove(arr, 3);

console.log(aboveThreshold);

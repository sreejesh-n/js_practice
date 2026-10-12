// Examples:
//
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([1, [22], 3], [1, [22], 3]) => true
//
// Do not modify the input parameters.

function areArrays(array1, array2) {
  return Array.isArray(array1) && Array.isArray(array2);
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (areArrays(array1[i], array2[i])) {
      if (!areEqual(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

console.log(
  "arrays a, b should be true and they are ",
  areEqual([1, 2, 3, 4], [1, 2, 3, 4]),
);
console.log(
  "arrays a, b should be false and they are ",
  areEqual([1, 2, 3], [1, 2, 3, 4]),
);
console.log(
  "arrays a, b should be false and they are ",
  areEqual([1, 2, 3], [1, 3, 2]),
);
console.log(
  "arrays a, b should be true and they are ",
  areEqual([1, [22], 3], [1, [22], 3]),
);

// Examples:
//
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([1, [22], 3], [1, [22], 3]) => true
//
// Do not modify the input parameters.

function areArrays(array1, i, array2) {
  return typeof array1[i] === "object" && typeof array2[i] === "object";
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (areArrays(array1, i, array2)) {
      if (!areEqual(array1[i], array2[i])) {
        return false;
      }
    }

    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

const array1 = [1, [2, 3, 4], 3];
const array2 = [1, [2, 3, 4], 3];

const res = areEqual(array1, array2);
//
console.log(
  "arrays a, b should be result and they are ",
  areEqual([1, 2, 3, 4], [1, 2, 3, 4]),
); // => true
console.log(
  "arrays a, b should be result and they are ",
  areEqual([1, 2, 3], [1, 2, 3, 4]),
); // => false
console.log(
  "arrays a, b should be result and they are ",
  areEqual([1, 2, 3], [1, 3, 2]),
); // => false
console.log(
  "arrays a, b should be result and they are ",
  areEqual([1, [22], 3], [1, [22], 3]),
); // => true
//

console.log(res);

// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
//
// Do not modify the input array.

function findIndex(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }

  return -1;
}

const arr = ["apple", "cake", "tea", "coffee", "tea"];

const elementIndex = findIndex(arr, "coffee");

console.log(elementIndex);

// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
//
// Do not modify the input array.

function findLastIndex(array, element) {
  const lastIndex = array.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    if (arr[i] === element) {
      return i;
    }
  }

  return -1;
}

const arr = ["apple", "cake", "tea", "coffee", "tea", "pen"];

const lastIndex = findLastIndex(arr, "cake");

console.log(lastIndex);

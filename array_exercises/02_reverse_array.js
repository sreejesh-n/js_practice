// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
//
// Do not modify the input array.

function reverse(array) {
  const reverseArray = [];

  for (let i = 0; i < array.length; i++) {
    reverseArray[i] = array.at(-(i + 1));
  }

  return reverseArray;
}

const arr = [1, 2, 3, 4, 5, 6];
const reverseArray = reverse(arr);

console.log(reverseArray);

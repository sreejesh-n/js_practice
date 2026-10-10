// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
//
// Do not modify the input array.

function selectOdds(numbers) {
  const oddArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      oddArray.push(numbers[i]);
    }
  }

  return oddArray;
}

const arr = [2, 4, 6];

const oddArray = selectOdds(arr);

console.log(oddArray);

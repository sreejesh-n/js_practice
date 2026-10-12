function calcSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

function calcAverage(array) {
  return calcSum(array) / array.length;
}

function findLargest(array) {
  let largest = array[0];

  for (i = 1; i < array.length; i++) {
    largest = largest < array[i] ? array[i] : largest;
  }

  return largest;
}

module.exports = {
  calcSum,
  calcAverage,
  findLargest,
};

// sumMatrix([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]) => 45

function sumMatrix(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }

  return sum;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const sum = sumMatrix(matrix);

console.log(sum);

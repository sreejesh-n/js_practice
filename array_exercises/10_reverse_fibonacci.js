// reverseFibonacci(5) => [3, 2, 1, 1, 0]

function reverseFibonacci(n, previous, current, revFib) {
  // By Recursion

  if (n <= 0) {
    return revFib;
  }

  const prev = current;
  const curr = previous + current;
  revFib.unshift(previous);

  return reverseFibonacci(n - 1, prev, curr, revFib);

  //   const revFibSeries = [];

  //   let prev = 0;
  //   let curr = 1;
  //   let next = 1;

  //   for (let i = 0; i < n; i++) {
  //     revFibSeries.unshift(prev);
  //     prev = curr;
  //     curr = next;
  //     next = prev + curr;
  //   }

  //   return revFibSeries;
}

const revFib = reverseFibonacci(10, 0, 1, []);

console.log(revFib);

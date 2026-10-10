// fibonacci(5) => [0, 1, 1, 2, 3]

function fibonacci(n, previous, current, fib) {
  // By Recursion

  //   if (n <= 0) {
  //     return fib;
  //   }

  //   const prev = current;
  //   const curr = previous + current;
  //   fib.push(previous);

  //   return fibonacci(n - 1, prev, curr, fib);

  const fibSeries = [];

  let prev = 0;
  let curr = 1;
  let next = prev + curr;

  for (let i = 0; i < n; i++) {
    fibSeries.push(prev);
    prev = curr;
    curr = next;
    next = prev + curr;
  }

  return fibSeries;
}

const fib = fibonacci(10, 0, 1, []);

console.log(fib);

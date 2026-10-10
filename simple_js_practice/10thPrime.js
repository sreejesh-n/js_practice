const p = require("./08_prime");

let num = 0;
let primeCount = 0;

while (primeCount < 10) {
  primeCount += p.isPrime(num) ? 1 : 0;
  num++;
}

const tenthPrime = num - 1;
console.log(tenthPrime);

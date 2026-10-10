function isPrime(number, divisor = 1, noOfDivisors = 0) {
  if (divisor > number / 2) {
    return noOfDivisors === 1;
  }

  const divisorCount = noOfDivisors + (number % divisor === 0 ? 1 : 0);

  return isPrime(number, divisor + 1, divisorCount);
}

// const prime = isPrime(1);

// console.log(prime);

module.exports = {
  isPrime,
};

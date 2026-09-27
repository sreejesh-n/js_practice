function isPrime(number, divisor, noOfDivisors) {
    if (divisor > number / 2) {
        const prime = noOfDivisors === 1 ? true : false;

        return prime;
    }

    const divisorCount = noOfDivisors + (number % divisor === 0 ? 1 : 0);

    return isPrime(number, divisor + 1, divisorCount);
}

console.log(isPrime(17, 1, 0));
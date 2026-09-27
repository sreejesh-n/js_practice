function isPrime(number, divisor = 1, noOfDivisors = 0) {
    if (divisor > number / 2) {
        const prime = noOfDivisors === 1 ? true : false;

        return prime;
    }

    const divisorCount = noOfDivisors + (number % divisor === 0 ? 1 : 0);

    return isPrime(number, divisor + 1, divisorCount);
}

// const prime = isPrime(17);

// console.log(prime);

module.exports = {
    isPrime,
};
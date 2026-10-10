const p = require("./08_prime");

function findAllPrimes(number, primeStr) {
    if (number === 1) {
        return primeStr;
    }

    const primeSeries = p.isPrime(number) ? `${number}\n${primeStr}` : primeStr;

    return findAllPrimes(number - 1, primeSeries);
}

const primeSeries = findAllPrimes(60, "");

console.log(primeSeries);
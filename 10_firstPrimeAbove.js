const p = require("./08_prime");

function firstPrimeAbove(number, aboveNum = number + 1) {
    if (p.isPrime(aboveNum)) {
        return aboveNum;
    }

    return firstPrimeAbove(number, aboveNum + 1);
}

const abovePrime = firstPrimeAbove(31);

console.log(abovePrime);
function factorial(number) {
    if (number === 0) {
        return 1;
    }

    return number * factorial(number - 1);
}

const fact = factorial(5);

console.log(fact);
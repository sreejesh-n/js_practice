function fibonacci(range, previous, current) {
    if (range === 0) {
        return previous;
    }

    return fibonacci(range - 1, current, previous + current);
}

const fib = fibonacci(6, 0, 1);

console.log(fib);
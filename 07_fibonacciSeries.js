function fibonacciSeries(range, previous, current, fibStr) {
    if (range === 0) {
        return fibStr;
    }

    const prev = current;
    const curr = previous + current;
    const fibSeries = `${fibStr}\n${previous}`;

    return fibonacciSeries(range - 1, prev, curr, fibSeries);
}

const fibSeries = fibonacciSeries(7, 0, 1, "");

console.log(fibSeries);
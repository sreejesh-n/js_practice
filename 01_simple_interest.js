function simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

const si = simpleInterest(1000, 5, 2);

console.log(si);
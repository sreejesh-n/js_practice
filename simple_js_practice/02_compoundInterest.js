function compoundInterest(principal, rate, time) {
    const finalAmount = principal * (1 + rate / 100) ** time;
    const ci = finalAmount - principal;

    return ci;
}

const ci = compoundInterest(1000, 10, 2);

console.log(ci);
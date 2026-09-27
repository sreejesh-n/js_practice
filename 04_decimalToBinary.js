function floorOf(number) {
    return number | 0;
}

function decimalToBinary(number, binaryStr) {
    if (floorOf(number / 2) === 0) {
        return `${number + binaryStr}`
    }

    const quotient = floorOf(number / 2);
    const binary = `${number % 2 + binaryStr}`;

    return decimalToBinary(quotient, binary);
}

const binary = decimalToBinary(7, "");

console.log(binary);
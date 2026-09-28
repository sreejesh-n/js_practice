function printEvenNumbers(number, evenStr) {
  if (number <= 1) {
    return evenStr;
  }

  const isEven = number % 2 === 0 ? number : "";
  const evenSeries = isEven ? `${isEven}\n${evenStr}` : evenStr;

  return printEvenNumbers(number - 1, evenSeries);
}

const evenSeries = printEvenNumbers(10, "");

console.log(evenSeries);

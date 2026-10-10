function isLeapYear(year) {
  const divisibleBy400 = year % 400 === 0;
  const divisibleBy4Not100 = year % 4 === 0 && year % 100 !== 0;

  return divisibleBy400 || divisibleBy4Not100;
}

const leapYear = isLeapYear(2020);

console.log(leapYear);

function sumOfAP(term, difference, noOfTerms, sum) {
  if (noOfTerms === 0) {
    return sum;
  }

  return sumOfAP(term + difference, difference, noOfTerms - 1, sum + term);
}

const sum = sumOfAP(2, 3, 5, 0);

console.log(sum);

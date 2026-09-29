function reverseOf(number, reverse) {
  if (number === 0) {
    return reverse;
  }
  const rev = reverse * 10 + (number % 10);

  return reverseOf((number / 10) | 0, rev);
}

function isPalindrome(number) {
  return number === reverseOf(number, 0);
}

const palindrome = isPalindrome(121);

console.log(palindrome);

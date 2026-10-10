// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
//
// Do not modify the input array.

function mapLengths(words) {
  const lengthOfWords = [];

  for (let i = 0; i < words.length; i++) {
    lengthOfWords[i] = words[i].length;
  }

  return lengthOfWords;
}

const words = ["apple", "cat", "Four"];

const lengthOfWords = mapLengths(words);

console.log(lengthOfWords);

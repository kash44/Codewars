const { array } = require("prop-types");

function countLetters(input) {
  input = input.toLowerCase();
  // a place to store the counts
  const counts = {};
  // iterate over the letters of the word
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    // if the letter is not in the count object
    if (!counts[letter]) {
      // add it with 0
      counts[letter] = 0;
    }
    // increment the count of the current letter in the counts object
    counts[letter]++;
  }
  // return counts object
  return counts;
}

function countLetters(input) {
    return [...input.toLowerCase()].reduce((counts, letter) => {
        return(counts[letter] = counts[letter] || 0, counts[letter]++, counts)
    }, {})
}

//   console.log(countLetters("apple"));

function isAnagram(test, original) {
  // if length is not the same, instant false
  if (test.length !== original.length) {
    return false;
  }
  // if the words are exactly equal, instant true
  if (test === original) {
    return true;
  }
  // count letters in test, store in variable
  const testCount = countLetters(test);
  // count letters in test, store in variable
  const originalCount = countLetters(original);

  // console.log(testCounts);
  // console.log(originalCounts);

  const testCountKeys = Object.keys(testCount);
  console.log(testCountKeys);

  // check if both counts have the same number of keys
  if (testCountKeys.length !== Object.keys(originalCount).length) {
    return false;
  }

  // iterate over the keys of the first counts object
  for (let i = 0; i < testCountKeys.length; i++) {
    const letter = testCountKeys[i];
    //    if the second counts object does not have the same count for the current key,
    if (testCount[letter] !== originalCount[letter]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("foefet", "toffee"));
// console.log(isAnagram("Buckethead", "DeathCubeK"));
console.log(isAnagram("Twoo", "WooT"));

console.log(isAnagram("dumle", "bumble"));

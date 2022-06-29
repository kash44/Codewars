// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd)

// Learning Framework
// Note Solutions
// Make note of fundamental lessons - such as how we manipulated objects in this case

function findOdd(array) {
  // a place to store the counts
  const counts = {};

  // iterate over the array
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    // if we have not seen this number before - (if counts has value at number)
    // if an object has a given key/property
    if (!counts[number]) {
      // add it to the counts with a value of 1
      counts[number] = 1;
    } else {
      // if we have seen this before
      // increment its count
      counts[number]++;
    }
  }

  // iterate over the counts
  for (const number in counts) {
    const count = counts[number];
    // if the count is odd
    if (count % 2 != 0) {
      // return that number
      return Number(number);
    }
  }
}

// Using a reduce
function findOdd(array) {
  // a place to store the counts
  const counts = array.reduce((counts, number) => {
    if (!counts[number]) {
      counts[number] = 1;
    } else {
      counts[number]++;
    }
    return counts;
  }, {}); // start with an empty object

  // iterate over the counts
  for (const number in counts) {
    const count = counts[number];
    // if the count is odd
    if (count % 2 != 0) {
      // return that number
      return Number(number);
    }
  }
}

// Using reduce and findIndex methods
function findOdd(array) {
  // a place to store the counts
  const counts = array.reduce((counts, number) => {
    // If we see the numb
    counts[number] = counts[number] || 0;
    counts[number]++;
    return counts;
  }, {});
  console.log(counts); //{ '1': 2, '2': 1 }

  const numbers = Object.keys(counts);
  // We're grabbing all the keys - frequency of seen numbers
  console.log(numbers); // [ '1', '2' ]

  // Using findIndex to return the FIRST odd key
  const oddIndex = numbers.findIndex((number) => {
    const count = counts[number];
    return count % 2 !== 0;
  });

  console.log("oddIndex", oddIndex); // returns 1

  // We then find the number that owns the odd key
  console.log("number owned by key", numbers[oddIndex]);

  return Number(numbers[oddIndex]);
}

// Others
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd(arr) {
  return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}

// In MDN:
// Look into For in loop:
// The for...in statement iterates over all enumerable properties of an object that are keyed by strings
// (ignoring ones keyed by Symbols), including inherited enumerable properties.

// FindIndex method:
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
// Otherwise, it returns -1, indicating that no element passed the test.

// Notes
// How to check if an object has a given key?:
// const counts = {}
// counts[number]

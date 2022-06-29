// Given a list of integers and a single sum value,
// return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

function sumPairs1(numbers, sum) {
  // Places to store the pairs
  const pairs = [];
  // for each number in the array
  numbers.forEach((leftNumber, leftIndex) => {
    // Iterate over the array
    for (
      let rightIndex = leftIndex + 1;
      rightIndex < numbers.length;
      rightIndex++
    ) {
      const rightNumber = numbers[rightIndex];
      // add the two values
      // if they are equal to sum
      if (leftNumber + rightNumber == sum) {
        // store the numbers and the right index
        pairs.push({
          pair: [leftNumber, rightNumber],
          rightIndex,
        });
      }
    }
  });
  if (pairs.length > 0) {
    // place to store final pair
    let earliestPair = pairs[0];
    for (let i = 1; i < pairs.length; i++) {
      if (earliestPair.rightIndex > pairs[i].rightIndex) {
        earliestPair = pairs[i];
      }
    }
    // return the earliest pair (lowest second index)
    return earliestPair.pair;
  }
  return undefined;
}

function sumPairs(numbers, sum) {
  // a place to keep track of the numbers we have seen
  const seenNumbers = {};
  // iterate over the numbers
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // subtract current number from sum to get the number we need
    const need = sum - currentNumber;
    // check to see if we've seen the number before
    if (seenNumbers[need]) {
      // if we have return the pair
      return [need, currentNumber];
    } else {
      // if not, set number as seen
      seenNumbers[currentNumber] = true;
    }
  }
  // return undefined
}

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));
console.log(sumPairs([20, -13, 40], -7));
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
console.log(sumPairs([4, -2, 3, 3, 4], 8));
console.log(sumPairs([0, 2, 0], 0));
console.log(sumPairs([5, 9, 13, -3], 10));

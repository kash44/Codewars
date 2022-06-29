// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// My solution
function sumTwoSmallestNumbers(numbers) {
  const sortedString = numbers.sort((a, b) => a - b);
  return sortedString[0] + sortedString[1];
}

// Coding Garden Solution:
function sumTwoSmallestNumbers1(numbers) {
  // a place to store the smallest number
  let smallest;
  // a place to store the 2nd smallest number
  let secondSmallest;
  // compare at the first two numbers in the array
  if (numbers[0] < numbers[1]) {
    smallest = numbers[0];
    secondSmallest = numbers[1];
  } else {
    smallest = numbers[1];
    secondSmallest = numbers[0];
  }
  // iterate over the numbers, starting with the 3rd number(already see 1-2)
  for (let i = 2; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // if the current number is smaller than the smallest number
    if (currentNumber < smallest) {
      // set smallest number to be the 2nd smallest number
      secondSmallest = smallest;
      // set the current number to be the smallest number
      smallest = currentNumber;
    } else if (currentNumber < secondSmallest) {
      // else if the current number is smaller than the 2nd smallest number
      // set the 2nd smallest number to the current number
      secondSmallest = currentNumber;
    }
  }
  // return the sum of the 2nd smallest number
  return smallest + secondSmallest;
} 
// [19, 5, 42, 2, 77], the output should be 7.

// The last two are more iteration heavy
function sumTwoSmallestNumbers2(numbers) {
  const smallest = Math.min.apply(null, numbers);
  const smallestIndex = numbers.indexOf(smallest);
  const numbersWithoutSmallest = numbers.slice();
  numbersWithoutSmallest.splice(smallestIndex, 1);
  const secondSmallest = Math.min.apply(null, numbersWithoutSmallest);
  console.log(smallest, secondSmallest);
  return smallest + secondSmallest;
}

function sumTwoSmallestNumbers3(numbers) {
  const smallest = Math.min(...numbers);
  const smallestIndex = numbers.indexOf(smallest);
  const numbersWithoutSmallest = numbers.slice();
  numbersWithoutSmallest.splice(smallestIndex, 1);
  const secondSmallest = Math.min(...numbersWithoutSmallest);
  console.log(smallest, secondSmallest);
  return smallest + secondSmallest;
}

// we start a the beginning of the array and assume they are the two smallest
console.log(sumTwoSmallestNumbers3([19, 5, 42, 2, 77]));

// Bob is preparing to pass IQ test.
// The most frequent task in this test is to find out which one of the given numbers differs from the others.
// Bob observed that one number usually differs from the others in evenness.
// Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness
// , and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ----------------------------------------------------------------------------------------------

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

// My Attempt -- Solved myself! yes!
function iqTest(numbers) {
  const oddString = [];
  const evenString = [];
  const numberArray = numbers.split(" ");
  // Loop through array
  for (let i = 0; i < numberArray.length; i++) {
    currentNumber = numberArray[i];
    if (currentNumber % 2 == 0) {
      evenString.push(currentNumber);
    } else {
      oddString.push(currentNumber);
    }
  }

  if (oddString.length > evenString.length) {
    const number = numberArray.indexOf(evenString.toString());
    return number + 1;
  } else {
    const number = numberArray.indexOf(oddString.toString());
    return number + 1;
  }
}

// Solution 2
function iqTest1(numbers) {
  numbers = numbers.split(" ");
  // Keep track of even count, and the last index we saw of even
  const even = {
    count: 0,
    lastIndex: -1,
  };
  // Keep track of odd count, and the last index we saw of odd
  const odd = {
    count: 0,
    lastIndex: -1,
  };
  // Iterate over numbers
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // if even, increment even count and store index
    if (currentNumber % 2 == 0) {
      even.count++;
      even.lastIndex = i + 1;
    } else {
      odd.count++;
      odd.lastIndex = i + 1;
    }
  }
  console.log(even, odd);
  // if even count is 1
  if (even.count == 1) {
    // return the last even index we saw
    return even.lastIndex;
  }
  // else if the odd count is 1
  else {
    // return the last odd index we saw
    return odd.lastIndex;
  }
}

console.log(iqTest1("2 4 7 8 10"));
console.log(iqTest1("1 2 1 1"));

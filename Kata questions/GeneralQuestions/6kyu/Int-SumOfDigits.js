// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n.
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.

// Example
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// My attempt - didnt work - wanted to keep adding until it was smaller than 9
function digital_root(n) {
  sum = 0;
  let string = n.toString().split("");
  while (string > 9) {
    for (let i = 0; i < string.length; i++) {
      currentLetter = Number(string[i]);
      sum += currentLetter;
    }
    n = sum;
  }
  return sum;
}

// What i was attempting to do was a recursive function 
function digital_root(n) {
  if (n < 10) return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);

  return digital_root(sum);
}

//Coding Garden
function digital_root(n) {
  // while n is greater than 9
  while (n > 9) {
    // place to store the sum
    let sum = 0;
    // while n is greater than 0
    while (n > 0) {
      // mod the number by 10 to get last digit
      const lastDigit = n % 10;
      // take math.floor of number divided by 10 to drop off last digit
      n = Math.floor(n / 10);
      // add last digit to sum
      sum += lastDigit;
    }
    // re-assign sum to n
    n = sum;
  }
  return n;
}

function digital_root(n) {
  while (n > 9) {
    n = n
      .toString()
      .split("")
      .reduce((sum, digit) => sum + +digit, 0);
  }
  return n;
}

// Digital root mathmatical algorithm
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
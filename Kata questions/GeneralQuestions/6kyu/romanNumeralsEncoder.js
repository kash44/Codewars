// Create a function taking a positive integer as its parameter and returning a
// string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit
// and skipping any digit with a value of zero. In Roman numerals 1990 is rendered:
// 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:
// solution(1000); // should return 'M'

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution1(number) {
  const lookUp = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    600: "DC",
    900: "CM",
    1000: "M",
  };
  let roman = "";
  const keys = Object.keys(lookUp);
  while (number > 0) {
    for (let i = keys.length - 1; i >= 0; i--) {
      let romanLetter = keys[i];
      if (number >= romanLetter) {
        roman += lookUp[romanLetter];
        number -= romanLetter;
        break;
      }
    }
  }
  return roman;
}

// less iterations - making the list shorter
function solution2(number) {
  const lookUp = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    600: "DC",
    900: "CM",
    1000: "M",
  };
  let roman = "";
  const keys = Object.keys(lookUp);
  while (number > 0) {
    for (let i = keys.length - 1; i >= 0; i--) {
      let romanLetter = keys[i];
      if (number >= romanLetter) {
        while (number >= romanLetter) {
          roman += lookUp[romanLetter];
          number -= romanLetter;
        }
        keys.pop();
        break;
      }
    }
  }
  return roman;
}

function solution(number) {
  return [
    { threshold: 1000, char: "M" },
    { threshold: 900, char: "CM" },
    { threshold: 500, char: "D" },
    { threshold: 400, char: "CD" },
    { threshold: 100, char: "C" },
    { threshold: 90, char: "XC" },
    { threshold: 50, char: "L" },
    { threshold: 40, char: "XL" },
    { threshold: 10, char: "X" },
    { threshold: 9, char: "IX" },
    { threshold: 5, char: "V" },
    { threshold: 4, char: "IV" },
    { threshold: 1, char: "I" },
  ].reduce(function (prev, curr, idx, arr) {
    while (number >= curr.threshold) {
      prev += curr.char;
      number -= curr.threshold;
    }
    return prev;
  }, "");
}

console.log(solution(1990));

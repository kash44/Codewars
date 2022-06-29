// Given the string representations of two integers, return the string representation of the sum of those integers.
// For example:

// sumStrings('1','2') // => '3'

// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// Only works for small numbers
// function sumStrings(a,b) {
//   const stringToNumber = Number(a) + Number(b);
//   return stringToNumber.toString()
// }

function sumStrings(a, b) {
  if (a.length < b.length) {
    while (a.length != b.length) {
      a = "0" + a;
    }
  } else if (b.length < a.length) {
    while (a.length != b.length) {
      b = "0" + b;
    }
  }
  
  let sum = "";
  let carry = 0;

  // iterate the length of the shorter number in reverse
  for (let i = a.length - 1; i >= 0; i--) {
    // add the current number in each number
    const aNum = +a[i];
    const bNum = +b[i];
    const innerSum = aNum + bNum + carry;

    let placeNum = innerSum;
    if (innerSum > 9) {
      placeNum = innerSum % 10;
      carry = Math.floor(innerSum / 10);
    } else {
      carry = "";
    }
    sum = placeNum + sum;
  }

  sum = carry + sum;

  while (sum[0] == "0") {
    sum = sum.slice(1);
  }
  return sum;
}

console.log(sumStrings("19323343434340", "2"));

// Look up a hash map
// Look up table

// Give each word in the string an UpperCase Letter 

// My solution
function toJadenCase(str) {
  const splitString = str.split(" ");
  console.log(splitString);
  const loop = splitString.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return loop.join(" ");
}
// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));

// Solution 2
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};

// Solution 3
String.prototype.toJadenCase = function (str) {
  // a place to store the jadenCaseStr
  let jadenCase = "";
  // a place to store whether the next letter we encounter should be capitalised
  // always capitalise the first letter of the string
  let capitalise = true;
  // iterate over each letter in the string
  for (let i = 0; i < this.length; i++) {
    const letter = this[i];
    // if the current letter is a space
    // next letter should be capitalized
    if (letter === " ") {
      capitalise = true;
      jadenCase += " ";
    } else {
      //else
      // appened either the letter itself, or capitalised letter
      if (capitalise) {
        jadenCase += letter.toUpperCase();
        capitalise = false;
      } else {
        jadenCase += letter.toLowerCase();
      }
    }
  }

  return jadenCase;
};
const str = "How can mirrors be real if our eyes aren't real";
var jadenStr = str.toJadenCase();
// console.log(jadenStr);

// Solution 4 - Regular Expression
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function (s) {
    return s.toUpperCase();
  });
};

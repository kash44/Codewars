// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.
// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// First attempt
function XO(str) {
  xcounter = 0;
  ocounter = 0;
  return str.forEach((element) => {
    if (element === "x") {
      xcounter++;
    }

    if (element === "o") {
      ocounter++;
    }
  });
}

// Solution
function XO(str) {
  const string = str.toLowerCase();
  let xcount = 0;
  let ocount = 0;

  for (let i = 0; i < str.length; i++) {
    const letter = string[i];
    if (letter === "x") {
      xcount++;
    } else if (letter === "o") {
      ocount++;
    }
  }
  return xcount === ocount;
}

console.log(XO("ooxx"));
console.log(XO("ooxXm"));
console.log(XO("xooxx"));

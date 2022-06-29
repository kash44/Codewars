// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters
// can be rearranged to match str2, otherwise returns false.

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered

// Video 4

function scrambleMyAttempt(str1, str2) {
  //code me
  let string = "";
  for (let i = 0; i < str1.length; i++) {
    const currentLetter = str1[i];
    console.log(currentLetter);
    if (str2.includes(currentLetter)) {
      // string.push(currentLetter)
    }
  }
  return (newString = str1.split(""));
}

// Using objects
function scramble(str1, str2) {
  // a place to store str1 letter counts
  const letterCounts = {};

  // iterate over str1
  for (let i = 0; i < str1.length; i++) {
    const currentLetter = str1[i];
    // set a property on the object that is the current letter
    // if the property didnt exist, set it to 1
    // otherwise increment the value
    letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
    letterCounts[currentLetter]++;
  }

  console.log(letterCounts);

  // iterate over str2
  for (let i = 0; i < str2.length; i++) {
    const currentLetter = str2[i];
    // if the current letter is in the object and the count is greater than 0
    // if its not there then, undefined > 0 = false. so we break out of loop
    if (letterCounts[currentLetter] > 0) {
      // decrement the count
      letterCounts[currentLetter]--;
    } else {
      // else break out of loop
      return false;
    }
  }
  console.log(letterCounts);
  return true;
}
console.log(scramble("rkqodlw", "world"));
// output:
// { r: 1, k: 1, q: 1, o: 1, d: 1, l: 1, w: 1 }
// { r: 0, k: 1, q: 1, o: 0, d: 0, l: 0, w: 0 }
// true

// Using Reduce
function scramble1(str1, str2) {
  // take string, turn it into an array and reduce it to an object that will have all the counts inside of it
  const letterCounts = str1.split("").reduce((letterCounts, currentLetter) => {
    letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
    letterCounts[currentLetter]++;
    return letterCounts;
  }, {});
  console.log(letterCounts);

  // does every letter return true, if it does there must have been a count available in the object we created
  // otherwise the moment it returns false it breaks
  return str2.split("").every((currentLetter) => {
    if (letterCounts[currentLetter] > 0) {
      // decrement the count
      letterCounts[currentLetter]--;
      return true;
    } else {
      // else break out of loop
      return false;
    }
  });
}

// Array.prototype
function scramble2(str1, str2) {
  // invokes the reduce function with the string as the internal instance,
  // The way the reduce.call works internally is that its using bracket notation to get access to each element
  // in what it thinks is an array but because its getting a string bracket notation should stil work
  const letterCounts = Array.prototype.reduce.call(
    str1,
    (letterCounts, currentLetter) => {
      letterCounts[currentLetter] = letterCounts[currentLetter] || 0;
      letterCounts[currentLetter]++;
      return letterCounts;
    },
    {}
  );

  return Array.prototype.every.call(str2, (currentLetter) => {
    if (letterCounts[currentLetter] > 0) {
      // decrement the count
      letterCounts[currentLetter]--;
      return true;
    } else {
      // else break out of loop
      return false;
    }
  });
  // each block is one iteration each
}

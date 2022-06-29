// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// Simple for loop
function getCount(str) {
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    const currentletter = str[i];
    // 1
    if (
      currentletter == "a" ||
      currentletter == "e" ||
      currentletter == "i" ||
      currentletter == "o" ||
      currentletter == "u"
    ) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

// Using Objects
function getCount1(str) {
  let vowelsCount = 0;
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  for (let i = 0; i < str.length; i++) {
    const currentletter = str[i];
    // 2
    if (vowels[currentletter]) {
      vowelsCount++;
    }
  }
}

// Using Reduce
function getCount2(str) {
  let vowelsCount = 0;
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  return str.split("").reduce((vowelsCount, currentletter) => {
    if (vowels[currentletter]) {
      vowelsCount++;
    }
    // 3
    return vowelsCount;
  }, 0);
}

// Using filter
function getCount3(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  return str.split('').filter((currentletter) => {
       //  4
      if (vowels[currentletter]) {
          return true
      }
  }).length;
}

console.log(getCount("aeiouhhuhhh"));

// 1 - Have to do a comparison for a all. Initally wrote
// if (currentletter == 'a'|| 'e'|| 'i'|| 'o'|| 'u')

// 2 - if the vowels object, has a property that is the current letter
// and that current letter is aeiou then it will evaluate to true
// This will then increment the vowel count

// 3- Always return the accumulator in a filter method

// 4 - Will return a truthy and falsy value 
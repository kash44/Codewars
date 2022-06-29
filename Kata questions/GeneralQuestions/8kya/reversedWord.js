// Complete the solution so that it reverses all of the words within the string passed in

// Solution 1
const reverseWords1 = (str) => {
    // a place to store the reversed word initalised to empty
    let reversedWord = "";
    // a place to store the current word
    let currentWord = "";
    // iterate over the input string
    for (let i = 0; i < str.length; i++) {
      const currentLetter = str[i]; // str[i] (accessing specific character in string)
      // if the current letter is a space
      if (currentLetter === " ") {
        // prepend the current word to the reversed word
        reversedWord = " " + currentWord + reversedWord;
        // reset the current word to empty
        currentWord = "";
      } else {
        // append the current letter to the current word
        currentWord += currentLetter;
      }
    }
    // append the last current word
    reversedWord = currentWord + reversedWord;
    // return the reversed word
    return reversedWord;
};

// Solution 2
const reverseWords2 = (str) => {
    return str.split("").reverse().join("");
};
  
// Solution 3 
// Stack implementation
const reverseWords3 = (str) => {
      let reversed = [];
      const words = str.split(' ');
      while(words.length) {
          // our own reverse method
          reversed.push(words.pop());
      }
  
      return reversed.join(' ');
};
  
// Solution 3 
// Recursive - LONG
const reverseWords4 = (str) => {
      // Check if there's nothing else in the string - base case 
      if (!str) return '';
      // 1. Takes the current string that was passed in, splitting it into an array 
      const words = str.split(' ');
      // 2. Pop off the last word and becomes the first word in our result
      // keeps calling it over again until there's nothing else to pop off
      return words.pop() + ' ' + reverseWords4(words.join(' '));
};
  
console.log(reverseWords4("kash is the best coder ever"));
  
  
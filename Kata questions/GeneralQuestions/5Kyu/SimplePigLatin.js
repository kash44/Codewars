// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My Solution
function pigIt1(str) {
  let newSentence = [];
  const currentSentence = str.split(" ");
  for (let i = 0; i < currentSentence.length; i++) {
    currentWord = currentSentence[i];
    if (currentWord[0] == "!" || currentWord[0] == "?") {
      const word = currentWord.slice(1) + currentWord[0];
      newSentence.push(word);
    } else {
      const word = currentWord.slice(1) + currentWord[0] + "ay";
      newSentence.push(word);
    }
  }
  return newSentence.join(" ");
}

// Coding garden - doesnt work?
function pigIt2(str) {
  let pigLatin = "";
  let firstLetter = str[0];
  for (let i = 1; i < str.length; i++) {
    const currentLetter = str[i];
    if (!firstLetter) {
      firstLetter = currentLetter;
    } else {
      if (currentLetter != " ") {
        // append each next letter until we see a space
        pigLatin += currentLetter;
      } else {
        // append the current first letter and ay
        pigLatin += firstLetter + "ay ";
        firstLetter = "";
      }
    }
  }
  pigLatin += firstLetter + "ay";
  return pigLatin;
}

console.log(pigIt1("Pig latin is cool"));
console.log(pigIt1("Hello world !"));

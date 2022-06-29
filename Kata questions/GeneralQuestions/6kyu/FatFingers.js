// Freddy has a really fat left pinky finger,
// and every time Freddy tries to type an A, he accidentally hits the CapsLock key!

// Given a string that Freddy wants to type,
// emulate the keyboard misses where each A supposedly pressed is replaced with CapsLock,
// and return the string that Freddy actually types.
// It doesn't matter if the A in the string is capitalized or not. When CapsLock is enabled,
// capitalization is reversed, but punctuation is not affected.

// Example
// "The quick brown fox jumps over the lazy dog."
// -> "The quick brown fox jumps over the lZY DOG."

// "aAaaaaAaaaAAaAa"
// -> ""

function FatFingers(str) {
  // loop through, where there's an A we slice at that point and turn uppercase
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letter === "a") {
      return str.toUpperCase();
    }
  }
}

console.log(FatFingers("The quick brown fox jumps over the lazy dog."));

// First attempt
function FatFingers1(str) {
  let capitalise = true;
  // loop through, where there's an A we slice at that point and turn uppercase
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letter === "a") {
      return str.split("");
    }
  }
}

function FatFingers(str) {
  if (str == null) return null;
  if (!str) return "";
  // a place to store the fat fingered string
  let fatFingered = "";
  // a place to store whether or not the current letter should be capitalized
  // initalise to false
  let capsLock = false;
  // iterate over the string
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    // if the current letter is an a or A
    if (letter === "a" || letter === "A") {
      // set capsLock to true
      capsLock = !capsLock;
    } else {
      // else append the current letter
      // append capitalised based on our boolean
      if (capsLock) {
        fatFingered += letter.toUpperCase();
      } else {
        fatFingered += letter;
      }
    }
  }
  // return the fat fingered string
  return fatFingered;
}

function FatFingersReduce(str) {
  // a place to store whether or not the current letter should be capitalized
  // initalise to false
  let capsLock = false;
  // iterate over the string
  return str.split("").reduce((fatFingered, letter) => {
    // if the current letter is an a or A
    if (letter == "a" || letter == "A") {
      // set capsLock to true
      capsLock = !capsLock;
    } else {
      // else append the current letter
      // append capitalised based on our boolean
      if (capsLock) {
        fatFingered += letter.toUpperCase();
      } else {
        // if pressed for a capital A then its on purpose
        fatFingered += letter;
      }
    }
    // return the fat fingered string
    return fatFingered;
  }, "");
}

console.log(FatFingersReduce("The quick brown fox jumps over the lazy dog."));
console.log(
  FatFingersReduce(
    "The end of the institution, maintenance, and administration of government, is to secure the existence of the body politic, to protect it, and to furnish the individuals who compose it with the power of enjoying in safety and tranquillity their natural rights, and the blessings of life: and whenever these great objects are not obtained, the people have a right to alter the government, and to take measures necessary for their safety, prosperity and happiness."
  )
);

// -------------------------------------------------------
// Can you pass by reference in JavaScript?

// can only pass objects by reference, functions, arrays, objects.
// If you pass a primitve value as an argument into a function, its a copy of that value inside the function
// there's no way to modify the value that got passed in, unless passed in an object with valued properties on it
// Because then you'd be modifying the reference to the object

// -------------------------------------------------------
// Have to use .split() to use .reduce()

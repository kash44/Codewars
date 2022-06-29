// Mumbling
// ---------my first attempt-------------------
// function acc(string) {
//   let newString = "";
//   const check = string.split("");
//   for (let i = 0; i < string.length; i++) {
//       let counter = []
//       counter = i + 1
//       console.log(string[i] * counter);
//       console.log(counter)
//   }
//   return check;
// }

// console.log(acc("abcd"));

// -----------Wont work-----------------
// function accum(string) {
//   // a place to store the result
//   let result = "";
//   // iterate over the string
//   for (let i = 0; i < string.length; i++) {
//     // append the current letter i+1 times to the string
//     for (let j = 0; i < i + 1; j++) {
//       // capitalise the first append
//       if (j == 0) {
//         result += string[i].toUpperCase();
//       } else {
//         result += string[i].toLowerCase();
//       }
//     }
//     // append a dash if its not the last letter
//     if (i != string.length - 1) {
//       result += "-";
//     }
//   }
//   return result;
// }

// ----------Working Solution-----------------------
function accum(input) {
    // a place to store the result
    let result = "";
    // iterate over the string
    for (let index = 0; index < input.length; index++) {
      const currentLetter = input[index];
      // Append the current letter i+1 times to the string
      // The number of times we'll repeat the letter - increases
      const totalCount = index + 1;
      for (let counter = 0; counter < totalCount; counter++) {
        // capitalize the first append
        if (counter == 0) {
          result += currentLetter.toUpperCase();
        } else {
          result += currentLetter.toLowerCase();
        }
      }
  
      // Append a dash if it is not the last letter
      if (index != input.length - 1) {
        result += "-";
      }
    }
  
    return result;
  }
  
  // console.log(accum("abcdef"));
  
  // -------------ForEach Solution----------------
  function accum1(input) {
    let result = "";
    input.split("").forEach((currentLetter, index) => {
      const totalCount = index + 1;
      for (let counter = 0; counter < totalCount; counter++) {
        // capitalize the first append
        if (counter == 0) {
          result += currentLetter.toUpperCase();
        } else {
          result += currentLetter.toLowerCase();
        }
      }
      // Append a dash if it is not the last letter
      if (index != input.length - 1) {
        result += "-";
      }
    });
    return result;
  }
  
  // console.log(accum1("abcdef"));
  
  // -------------Reduce-----------------------
  function accum2(input) {
    // iterate over the string
    return input.split("").reduce((result, currentLetter, index) => {
      const totalCount = index + 1;
      for (let counter = 0; counter < totalCount; counter++) {
        // capitalize the first append
        if (counter == 0) {
          result += currentLetter.toUpperCase();
        } else {
          result += currentLetter.toLowerCase();
        }
      }
      // Append a dash if it is not the last letter
      if (index != input.length - 1) {
        result += "-";
      }
      return result;
    }, "");
  }
  
  console.log(accum2("abcdef"));
  
  
  function accum3(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }
  
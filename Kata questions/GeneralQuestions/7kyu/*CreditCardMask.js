// Found difficult - my attempt
function maskify(cc) {
  // const stringEnd = cc.slice(-4)
  const stringEnd = cc.replace("#");
  console.log("string:", stringEnd);
}
// What i was trying to do
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// Single iteration 
function maskify(cc) {
  // a place to store the masked number
  let masked = "";

  // iterate over the string
  for (let i = 0; i < cc.length; i++) {
    const letter = cc[i];
    // if the current index is greater than length - 4
    // aka leaving the last 4 letter revealed
    if (i < cc.length - 4) {
      // append the number to the masked number
      masked += "#";
    } else {
      masked += letter;
    }
  }
  // return the masked number
  return masked;
}

// Single iteration - in reverse
function maskify(cc) {
  // a place to store the masked number
  let masked = "";

  // iterate over the string in reverse
  for (let i = cc.length - 1; i >= 0; i--) {
    const letter = cc[i];
    // if the current index is greater than length - 5
    // aka leaving the last 4 letter revealed
    if (i > cc.length - 5) {
      // append the number to the masked number
      masked = letter + masked;
    } else {
      masked = "#" + masked;
    }
  }
  // return the masked number
  return masked;
}

// Using .split() and .map() method
function maskify(cc) {
  return (inputArr = cc
    .split("")
    .map((letter, index, array) => {
      if (index < array.length - 4) {
        return "#";
      } else {
        return letter;
      }
    })
    .join(""));
}

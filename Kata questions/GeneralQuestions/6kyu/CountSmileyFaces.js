// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// return the total number of smiling faces in the array
function countSmileys(arr) {
  // a place to keep track of the count
  let count = 0;
  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    // iterate over the current face if the length of the face is either 2 or 3
    const face = arr[i];
    if (face.length == 2 || face.length == 3) {
      // if the first character is a : ;
      if (face[0] == ":" || face[0] == ";") {
        // if the second character is a - ~
        if (face[1] == "-" || face[1] == "~") {
          // if the third charachter is a ) D
          if (face[2] == ")" || face[2] == "D") {
            count++;
          }
        } else if ((face[1] == ")" || face[1] == "D") && face.length == 2) {
          count++;
        }
      }
    }
  }
  return count;
}

// return the total number of smiling faces in the array
function countSmileys(arr) {
  // a place to keep track of the count
  let count = 0;

  const eyes = {
    ":": true,
    ";": true,
  };

  const noses = {
    "-": true,
    "~": true,
  };

  const mouths = {
    ")": true,
    "D": true,
  };
  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    // iterate over the current face if the length of the face is either 2 or 3
    const face = arr[i];
    if (face.length == 2) {
      if (eyes[face[0]] && mouths[face[1]]) {
        count++;
      }
    } else if (face.length == 3) {
      if (eyes[face[0]] && noses[face[1]] && mouths[face[2]]) {
        count++;
      }
    }
  }
  return count;
}

console.log(countSmileys([":D"]));

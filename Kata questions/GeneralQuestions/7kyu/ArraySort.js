// Write a function that takes an array of strings as an argument 
// and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]

function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    return array.sort((a,b) => a.length - b.length)
  };

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))

// Still have to use (a,b) in the sort parameter because we're dealing with numbers
// The length of each iterator in the array 


function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length)
}
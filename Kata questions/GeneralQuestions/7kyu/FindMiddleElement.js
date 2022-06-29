// My attempt couldnt solve 
const gimme = function (inputArray) {
    // Implement this function
    const sorted =  inputArray.sort((a,b) => a - b)
    // return sorted.filter((value, i, arr) => inputArray.indexOf(value === arr[1]))
    const median = Math.floor(inputArray.length / 2)  
    return sorted.indexOf(inputArray[median]);
  };

console.log(gimme1([8, 5, 1]));
// want function to return 1 = index of middle number 

// ------------------------------------------------------------------------------------

// Solution 1
function gimme1(a) {
    return a.indexOf(a.slice().sort((a, b) => a-b)[1])
}
// Question: why does it only work with .slice ?
// Answer: If you're using .sort to sort the array from smallest to largest (or vice versa)
// It will mutate the array you're calling sort on. 
// If you don't want to mutate the input array, you should make a copy of it first using .slice().

// slice method : 
// Creates a shallow copy of an array without the original array being modified 

// Solution 2 
const gimme2 = function (arr) {
    return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
  };

// spreading the oringinal array to to make a new copy. 
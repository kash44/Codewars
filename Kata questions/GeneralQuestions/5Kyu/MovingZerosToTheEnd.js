// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// Example
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  // a place to store the movedZeros array
  const movedZeros = [];
  // a place to store the zero count
  let zeroCount = 0;
  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    // if the current value is not a zero
    const value = arr[i];
    if (value !== 0) {
      // push into movedZeros array
      movedZeros.push(value);
    } else {
      // increment zero count
      zeroCount++;
    }
  }

  // iterate up to zero count
  for (let i = 0; i < zeroCount; i++) {
    // push zero into the array
    movedZeros.push(0);
  }

  // return the movedZeros array
  return movedZeros;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));



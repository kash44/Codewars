// My attempt
function findEvenIndex(arr) {
  const leftSide = 0;
  const rightSide = 0;
  for (let i = 0; arr.length; i++) {
    current = arr[i];
    // console.log(current)
  }
}

// Coding Garden
function findEvenIndex(arr) {
  const sumSubArray = (arr, start, end) => {
    let sum = 0;
    for (let index = start; index < end; index++) {
      sum += arr[index];
    }
    return sum;
  };

  // iterate over the array
  for (let index = 0; index < arr.length; index++) {
    const leftSum = sumSubArray(arr, 0, index);
    const rightSum = sumSubArray(arr, index + 1, arr.length);
    // if they're equal
    if (leftSum == rightSum) {
      return index;
    }
  }
  // return index
  return -1;
}

// function findEvenIndex(arr) {
//   const sumSubArray = (arr, start, end) => {
//     let sum = 0;
//     for (let index = start; index < end; index++){
//       sum += arr[index]
//     }
//     return sum;
//   };
//   // iterate over the array
//   for (let index = 0; index < arr.length; index++) {
//     const leftSum = sumSubArray(arr, 0, index );
//     const rightSum = sumSubArray(arr, index + 1, arr.length);
//     // if they're equal
//     if (leftSum == rightSum) {
//       return index;
//     }
//   }
//   // return index
//   return -1
// }

// console.log(sum)
// console.log(findEvenIndex([1,2,3,4,3,2,1]))

// function moveZeros(arr) {
//   // a place to store the zero count
//   let zeroCount = 0;

//   const movedZeros
//   // iterate over the array
//   for (let i = 0; i < arr.length; i++) {
//     // if the current value is not a zero
//     const value = arr[i];
//     if (value !== 0) {
//       // push into movedZeros array
//       movedZeros.push(value);
//     } else {
//       // increment zero count
//       zeroCount++;
//     }
//   }

//   // iterate up to zero count
//   for (let i = 0; i < zeroCount; i++) {
//     // push zero into the array
//     movedZeros.push(0);
//   }

//   // return the movedZeros array
//   return movedZeros;
// }

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// function toJadenCase(str) {
//   const splitString = str.split(" ");
//   console.log(splitString);
//   const loop = splitString.map((word) => {
//     console.log("word1", word);
//     // console.log(word[0].toUpperCase() + word.slice(1))
//     return word[0].toUpperCase() + word.slice(1);
//   });
//   return loop.join(" ");
// }
// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));

// console.log("Im a string")


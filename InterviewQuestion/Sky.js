// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


function solution(A) {
    const sortedString =  A.sort((a, b) => a - b)
    const Answer = []
    for (let i = 0; i < sortedString.length; i++) {
      currentNumber = sortedString[i]
      nextNumber = currentNumber + 1
      if (currentNumber < 0) {
        return 1
      } else if (currentNumber !== nextNumber) {
        return nextNumber + 1
      }
    }
    // return Answer
  }
  
  console.log(solution([1, 3, 6, 4, 1, 2]));


  // function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     if (S.length == 0) return 0;
//     let upArrow = []
//     let downArrow = []
//     let leftArrow = []
//     let rightArrow = []
//     for ( let i = 0; i < S.length; i++) {
//         currentString = S[i]
//         if (currentString == 'v') {
//             downArrow += 1
//         }
//         if (currentString == '^') {
//             upArrow += 1
//         }
//         if (currentString == '<') {
//             leftArrow += 1
//         } else {
//             rightArrow += 1
//         }
//     }

//     if (rightArrow > downArrow + upArrow + leftArrow ) {
//         return downArrow.length + upArrow.length + leftArrow.length
//     }
//     if (leftArrow > downArrow+ upArrow + rightArrow ) {
//         return downArrow.length + upArrow.length + rightArrow.length
//     }
//     if (downArrow > leftArrow + upArrow + rightArrow ) {
//         return leftArrow.length + upArrow.length + rightArrow.length
//     }
//     if (upArrow > leftArrow + downArrow + rightArrow) {
//         return leftArrow.length + downArrow.length + rightArrow.length
//     }
// }

// console.log(solution("^^^^^"));

// Task 2
// function solution(T) {
//   hours = Math.floor(T / 3600);
//   T %= 3600;
//   minutes = Math.floor( T / 60);
//   seconds = T % 60;
//   return `${hours}h${minutes}m${seconds}s`
// }
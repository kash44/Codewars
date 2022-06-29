// function SeriesSum(n){
//   const arr = []
//   for(let i = 0; i < n.length; i++){
//     // arr += n[i]
//     n[i] += arr
//   }
//    console.log(arr) 
// }

// SeriesSum(1 + 1/4)

// For each 
// const numbers = [1, 2 ,3 , 4 ,5];
// let sum = 0;

// numbers.forEach((item, index, arr) => {
//   sum += item;
// }); 

// console.log(sum);

// ----------------------------------------------------------------

// const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];

// let count = {}

// letters.forEach(item => {
//   if(count[item]){
//     count[item]++
//   } else {
//     count[item] = 2;
//   }
// }); 

// console.log(count)
// Output: { a: 4, b: 3, c: 2, d: 2 }

// ----------------------------------------------------------------

// The forEach() method executes a provided function once for each array element.
// Alternative for the for loop 

const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];

letters.forEach((item, index, array) => {
  console.log(index, item);
})

// output:
// 0 a
// 1 b
// 2 a
// etc

// Note:
// There is no way to stop or break a forEach() loop other than by throwing an exception. 
// Variations of the for loop are a good alternative 
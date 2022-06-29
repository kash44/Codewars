
// For each 
const numbers = [1, 2 ,3 , 4 ,5];
let sum = 0;

numbers.forEach((item, index, arr) => {
  sum += item;
}); 

// console.log(sum);

// ----------------------------------------------------------------
// Useful for turning arrays into objects 

const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];

let count = {}

letters.forEach(item => {
  if(count[item]){
    count[item]++
  } else {
    count[item] = 2;
  }
}); 

// console.log(count)
// Output: { a: 4, b: 3, c: 2, d: 2 }

// ----------------------------------------------------------------

const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];

letters.forEach((item, index, array) => {
  console.log(index, item);
})
// 0 a
// 1 b
// 2 a
// 3 b
// 4 c
// 5 d
// 6 a
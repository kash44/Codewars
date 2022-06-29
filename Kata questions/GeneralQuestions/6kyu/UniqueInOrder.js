//First attempt
// function UniqueInOrder(iterable) {
//     const order = "AAAABBBCCDAABBB";
//     const change = order.split("");
//     const arr = []

//     for (let i = 0; i < iterable.length; i++){
//         if(iterable[i] === iterable[i + 1]){
//             arr.pop(iterable[i+1])
//         }
//     }
//     console.log(change);
//   }

//   UniqueInOrder('AAAABBBCCDAABBB')

function UniqueInOrder(iterable) {
  const arr = [];
  for (let i = 0; i < iterable.length; i++) {
    //   check if there's a back to back letter
    if (iterable[i] !== iterable[i + 1]) {
      //   if not, push the current value to arr
      arr.push(iterable[i]);
    }
  }
  console.log(arr);
}

UniqueInOrder("AAAABBBCCDAABBB");
UniqueInOrder([1, 2, 2, 3, 3]);

// Solution 2 
function uniqueOrder(iterable) {
    // check given input type => object/array or string
  return typeof iterable == "object"
    // filter and return a new array with values that arent given back to back   
    ? iterable.filter((v, i, a) => a[i] !== a[i + 1])
    : iterable.split("").filter((v, i, a) => a[i] !== a[i + 1]);
}

// Solution 3
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

// Solution 4 


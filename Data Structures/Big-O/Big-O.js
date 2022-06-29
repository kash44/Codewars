// // O(n)
// // This block of code has f(n) = n. This is because it adds to count n times.
// // Therefore, this function is O(n) in time complexity:
// function exampleLinear(n) {
//   for (var i = 0; i < n; i++) {
//     console.log(i);
//   }
// }
// // console.log(exampleLinear(2))

// // O(n^2)
// function exampleQuadratic(n) {
//   for (var i = 0; i < n; i++) {
//     console.log("First loop: ", i);
//     for (var j = i; j < n; j++) {
//       console.log("Second loop: ", j);
//     }
//   }
// }
// // console.log(exampleQuadratic(2))

// //O(n^3)
// function exampleCubic(n) {
//   for (var i = 0; i < n; i++) {
//     console.log("First loop: ", i);
//     for (var j = i; j < n; j++) {
//       console.log("Second loop: ", j);
//       for (var k = j; k < n; k++) {
//         console.log("Third loop: ", k);
//       }
//     }
//   }
// }

// // console.log(exampleCubic(2));

// function exampleLogarithmic(n) {
//   for (var i = 1; i < n; i = i * 2) {
//     console.log(i);
//   }
// }

// // console.log(exampleLogarithmic(100))
// // ---------------------------------------------------------------------------
// // ---- Coefficient Rule - Get ride of Constants

// // Coefficient rule: If f(n) is O(g(n)), then kf(n) is O(g(n)), for any constant k > 0.
// // The first rule is the coefficient rule, which eliminates coefficients not related to the input size, n.
// // This is because as n approaches infinity, the other coefficient becomes negligible.

// // This block has f(n) = 5n. This is because it runs from 0 to 5n.
// // Simply put, this is because if n is close to infinity or another large number, those four additional operations are meaningless.
// // It is going to perform it n times. Any constants are negligible in Big-O notation.
// function a1(n) {
//   var count = 0;
//   for (var i = 0; i < 5 * n; i++) {
//     count += 1;
//   }
//   return count;
// }
// // console.log(a1(4))
// // Output: 20 - Should be 19?

// // This block of code has f(n) = n+1. There is +1 from the last operation (count+=3).
// // This still has a Big-O notation of O(n). This is because that 1 operation is not dependent on the input n.
// // As n approaches infinity, it will become negligible.
// function a(n) {
//   var count = 0;
//   for (var i = 0; i < n; i++) {
//     count += 1;
//   }
//   count += 3;
//   return count;
// }
// // console.log(a(4));
// // ---------------------------------------------------------------------------
// // ------ Sum Rule: “Add Big-Os Up”

// // Sum rule: If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n)+p(n)).
// // The sum rule simply states that if a resultant time complexity is a sum of two different time complexities,
// // the resultant Big-O notation is also the sum of two different Big-O notations.

// function a(n) {
//   var count = 0;
//   for (var i = 0; i < n; i++) {
//     count += 1;
//   }
//   for (var i = 0; i < 5 * n; i++) {
//     count += 1;
//   }
//   return count;
// }
// // console.log(a(4));

// // In this example, line 4 has f(n) = n, and line 7 has f(n) = 5n. 
// // This results in 6n. However, when applying the coefficient rule, the final result is O(n) = n.
// // ---------------------------------------------------------------------------

// // Product Rule: “Multiply Big-Os”

// // The product rule simply states how Big-Os can be multiplied.
// // If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n)).
// // The following code block demonstrates a function with two nested for loops for which the product rule is applied:
// function a(n){
//     var count =0;
//     for (var i=0;i<n;i++){
//         count+=1;
//         for (var i=0;i<5*n;i++){
//             count+=1;
//         }
//     }
//     return count;
// }
// // console.log(a(4));
// // In this example, f(n) = 5n*n because line 7 runs 5n times for a total of n iterations.
// // Therefore, this results in a total of 5n2 operations. Applying the coefficient rule, the result is that O(n)=n2.
// // ---------------------------------------------------------------------------

// // Polynomial Rule: “Big-O to the Power of k”

// function a(n){
//     var count =0;
//     for (var i=0;i<n*n;i++){
//         count+=1;
//     }
//     return count;
// }
// console.log(a(4));
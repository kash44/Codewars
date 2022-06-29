// Number is a palindrome if it is equal to the number with digits in reversed order. 
// For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. 
// The special step is: "reverse the digits, and add to the original number". 
// If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.
// If the input number is already a palindrome, the number of steps is 0.

// 87 +   78 =  165  - step 1, not a palindrome
// 165 +  561 =  726 - step 2, not a palindrome
// 726 +  627 = 1353 - step 3, not a palindrome
// 1353 + 3531 = 4884 - step 4, palindrome!

var palindromeChainLength = function(n) {
    // function to check if a palindrome
    const reverse = (number) => +number.toString().split('').reverse().join('')
    const isPalindrome = (number) => {
        return number == number.toString().split('').reverse().join('')
    };
    // a place to store the counts 
    let count = 0;
    let currentNum = n;
    // currentNum 
    // while the currentNum is not a palindrome
    while (!isPalindrome(currentNum)) {
        // set currentNum to reversed num + currentNum 
        currentNum = reverse(currentNum) + currentNum;
        // increment counts 
        count++
    }
    // return counts;
    return count;
};
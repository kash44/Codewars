// Given two integers a and b, which can be positive or negative, 
// find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// My attempt - failed(rusty)
function GetSum(a, b) {
    // find lowest of a & b
    // should have just initialised the variable and used const instead of let
    const smallest = 0
    const biggest = 0
    if (a > b) {
        smallest = a
        biggest = b
    } else if (a < b) {
        smallest = b
        biggest = a
    }
    // count = 0

    // for loop was wrong which was why i struggled
    for (let i = 0; i < b.length; i++) {
    }

    return count
}

// Coding Garden
function GetSum(a, b) {
    // find lowest of a & b
    // find highest of a & b
    let begin;
    let end;
    if (a < b) {
        begin = a;
        end = b;
    } else {
        begin = b;
        end = a; 
    }
    // place to store the sum
    let sum = 0

    // iterate from lowest to the highest 
    for (let i = begin; i <= end; i++ ) {
        // add the current index to the sum 
        sum += i;
    }
    // return the sum
    return sum
}

function GetSum(a, b) {
    // find lowest of a & b
    // find highest of a & b
    let begin = Math.min(a, b);
    let end = Math.max(a, b);
    
    // place to store the sum
    let sum = 0

    // iterate from lowest to the highest 
    for (let i = begin; i <= end; i++ ) {
        // add the current index to the sum 
        sum += i;
    }
    // return the sum
    return sum
}
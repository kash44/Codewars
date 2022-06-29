// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, function should returns 0

// Examples
// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4

// Solution 1
const SequenceSum = (begin, end, step) => {
    let newSequence = 0  // make sure = 0 not an array
    if (begin >= end) {
        return 0;
    }
    for (let i = begin; i <= end ; i += step){
        newSequence += i; 
    }
    return newSequence;
};

// console.log(SequenceSum(1,5,3))

// Note:
// Remember how to add onto i with the step, had confusion 

// Solution 2
const SequenceSum2 = (begin, end, step) => {
    var sum = 0;
    for(var i=begin;i<=end;i+=step)
    {
      sum += i;
    }
    return sum; // any other case just returns the sum 
                // e.g the begin being larger than the end 
};

// Solution 3 
// This is a recursive function, not sure if its best practice. Do not understand yet 
const SequenceSum3 = (begin, end, step) => {
    if (begin > end) {
      return 0;
    }
    return begin + SequenceSum3(begin + step, end, step);
};

console.log(SequenceSum3(1,5,3))
// Javascript array adopting stack behaviour
// Logic
// If we off the stack, and its the opposite then we leave it off and cal the next one

const opposites = {
  NORTH: "SOUTH",
  SOUTH: "NORTH",
  EAST: "WEST",
  WEST: "EAST",
};

function dirReduc(arr) {
  const stack = [];

  // Iterate over the array
  arr.forEach((dir) => {
    // if the stack has a length, we should pop off and see if its the opposite
    if (stack.length) {
      // if it has a length, grab the previous direction
      const prevDir = stack.pop();
      // if the previous directon is = to opposites of that direction, we dont push in and we leave the other off
      // if its not equal we push both prev and current direction onto the stack
      if (prevDir !== opposites[dir]) {
        stack.push(prevDir);
        stack.push(dir);
      }
    } else {
      stack.push(dir);
    }
  });
  console.log(stack);
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);

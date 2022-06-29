// For loop if else
function isValidWalk(walk) {
  const distance = walk.length;
  let NorthSouth = 0;
  let EastWest = 0;
  for (let i = 0; i < walk.length; i++) {
    const currentLetter = walk[i];
    if (currentLetter == "n") {
      NorthSouth++;
    } else if (currentLetter == "s") {
      NorthSouth--;
    } else if (currentLetter == "e") {
      EastWest++;
    } else if (currentLetter == "w") {
      EastWest--;
    }
  }
  return distance == 10 && NorthSouth == 0 && EastWest == 0;
}

// Using Objects
function isValidWalk1(walk) {
  // if length of array is not 10, immediately return false
  if (walk.length !== 10) return false;
  const counts = {
    n: 0,
    e: 0,
    s: 0,
    w: 0,
  };
  // Iterate over walk
  for (let i = 0; i < walk.length; i++) {
    const direction = walk[i];
    // increase given direction count
    counts[direction]++;
  }
  // if north count - south count is 0
  // AND west count - east count is 0
  if (counts.n - counts.s == 0 && counts.w - counts.e == 0) {
    return true;
  } else {
    return false;
  }
}

// Using Reduce
function isValidWalk2(walk) {
  if (walk.length !== 10) return false;
  const counts = walk.reduce(
    (counts, direction) => {
      counts[direction]++;
      return counts;
    },
    {
      n: 0,
      e: 0,
      s: 0,
      w: 0,
    }
  );
  // if north count - south count is 0
  // AND west count - east count is 0
  if (counts.n - counts.s == 0 && counts.w - counts.e == 0) {
    return true;
  } else {
    return false;
  }
}

function isValidWalk3(walk) {
  if (walk.length !== 10) return false;
  return walk.reduce(
    (counts, direction, index) => {
      counts[direction]++;
      if (index < walk.length - 1) {
        return counts;
      } else if (counts.n - counts.s == 0 && counts.w - counts.e == 0) {
        return true;
      } else {
        return false;
      }
    },
    {
      n: 0,
      e: 0,
      s: 0,
      w: 0,
    }
  );
  // if north count - south count is 0
  // AND west count - east count is 0
  if (counts.n - counts.s == 0 && counts.w - counts.e == 0) {
    return true;
  } else {
    return false;
  }
}

// Using Switch Case
function isValidWalk4(walk) {
  let distance = walk.length;
  let ns = 0;
  let we = 0;
  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        ns++;
        break;
      case "s":
        ns--;
        break;
      case "w":
        we++;
        break;
      case "e":
        we--;
        break;
    }
  }
  return distance === 10 && we === 0 && ns === 0;
}

console.log(isValidWalk2(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  isValidWalk2(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w"])
);

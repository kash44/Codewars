// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// My solution
function count(string) {
  // The function code should be here
  counts = {};
  
  // Convert string to array of strings
  stringArray = string.split("");

  for (let i = 0; i < stringArray.length; i++) {
    currentLetter = stringArray[i];
    if (!counts[currentLetter]) {
      counts[currentLetter] = 1;
    } else {
      counts[currentLetter]++;
    }
  }
  
  // if the string is empty 
  if (counts == "") {
    return {};
  }
  return counts;
}

// Others
function count(string) {
  var count = {};
  string.split("").forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}

function count(string) {
  return string.split("").reduce(function (counts, char) {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
}

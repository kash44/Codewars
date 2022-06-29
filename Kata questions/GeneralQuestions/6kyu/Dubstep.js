// Dubstep codeKata

// The input consists of a single non-empty stringify, consisting only of uppercase english letters,
// the strings length doesnt exceed 200 characters

// Return the words of the initial song that Polycarpus used to make a dubstep remix
// Seperate the words with a space

// .split(separator, limit)
// When found, separator is removed from the string, and the substrings are returned in an array.

function songDecorder(song) {
  // Split the string on WUB
  const split = song.split("WUB");
  console.log("split", split);

  // Filter out empty strings
  const words = split.filter((word) => word.trim());
  console.log("words", words);

  // Join back together on a space
  const result = words.join(" ");

  return result;
}

// Shorthand
function songDecorder(song) {
  // return song.split('WUB').join(' ')
  return song
    .split("WUB")
    .filter((word) => word.trim())
    .join(" ");
}

function songDecorder(song) {
  return song
    .split("WUB")
    .filter((word) => word !== "")
    .join(" ");
}

// Regular Expression
function songDecorder(song) {
  // return song.split('WUB').join(' ')
  return song.replace(/(WUB)+/g, " ").trim();
}

console.log(songDecorder("WUBWEWUBAREWUBTHEWUBCHAMPIONS"));

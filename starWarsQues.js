const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// -------------------- MAP ----------------------------
// 1. Get an array of all names
const names = characters.map((character) => {
  return character.name;
});

// Implicit return version (one liner)
const ImplicitNames = characters.map((character) => character.name);

// 2. Get an array of all heights
const heights = characters.map((character) => character.height);

// 3. Get an array of objects with just name and height properties
const minifiedRecord = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));
// console.log(minifiedRecord);

// 4. Get an array of all first names
const firstNames = characters.map((character) => character.name.split(" ")[0]);
// console.log(firstNames);

// -------------------- Filter ----------------------------
// 1. Get characters with mass greater than 100
const mass = characters.filter(character => {
  return character.mass > 100;
});
// console.log(mass);

// 2. Get characters with height less than 200
const shorterCharacters = characters.filter(character => {
    return character.height < 200;
  });
// console.log(shorterCharacters );

// 3. Get all male characters
const males = characters.filter(character => character.gender === 'male')
// console.log(males);

// 4. Get all female characters
const females = characters.filter(character => character.gender === 'female')
// console.log(females);

// -------------------- Reduce ----------------------------
// 1. Get the total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + +cur.mass, 0); // second parameter is the initial accumulator/value
// console.log(totalMass);

// 2. Get the total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + +cur.height, 0);
// console.log(totalHeight);

// 3. Get the total number of characters in all the character names
const totalNameCharacters = characters.reduce((acc, cur) => acc + cur.name.length, 0)
// console.log(totalNameCharacters);

// 4. Get the total number of characters by eye color (hint. a map of eye color to count)

const totalEyes = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if(acc[color]){
        // if we already have the eye color set inside the object, we'll increase it by 1
        acc[color]++   // same as acc[color] = acc[color] + 1 
    } else {
        acc[color] = 1
    }
    return acc
}, {})
// console.log(totalEyes);
// output: { blue: 2, yellow: 1, brown: 1 }



// -------------------- SOME----------------------------
// 1. Is there at least one male character?
const maleCharacter = characters.some((element) => element.gender === 'male');
// console.log(maleCharacter);

// 2. Is there at least one character with blue eyes?
const blueEyes = characters.some((element) => element.eye_color === 'blue');
// console.log(blueEyes);

// 3. Is there at least one character taller than 210?
const characterHeight = characters.some((element) => element.height > 210);
// console.log(characterHeight);

// 4. Is there at least one character that has mass less than 50?
const characterMass = characters.some((element) => element.mass < 50);
// console.log(characterMass);



// -------------------- EVERY ----------------------------
// 1. Does every character have blue eyes?
const everyEyes = characters.every((element) => element.eye_color === 'blue');
// console.log(everyEyes);

// 2. Does every character have mass more than 40?
const mass40 = characters.every((element) => element.mass > 40);
// console.log(mass40);

// 3. Is every character shorter than 200?
const shorterThan200 = characters.every((element) => element.height < 200);
// console.log(shorterThan200);

// 4. Is every character male?
const everyMale = characters.every((element) => element.gender === 'male')
// console.log(everyMale);
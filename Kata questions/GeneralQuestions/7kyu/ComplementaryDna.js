// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. 
// DNA strand is never empty or there is no DNA at all

// "ATTGC" --> "TAACG"

// Using Objects
function DNAStrand(dna) {
  let compliment = "";
  const compliments = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  for (let i = 0; i < dna.length; i++) {
    const currentLetter = dna[i];
    compliment += compliments[currentLetter];
  }
  return compliment;
}

// For loop
function DNAStrand1(dna) {
  //  place to store the compliment string
  let compliment = "";
  // iterate over dna
  for (let i = 0; i < dna.length; i++) {
    const currentletter = dna[i];
    if (currentletter == "A") {
      compliment += "T";
    } else if (currentletter == "T") {
      compliment += "A";
    } else if (currentletter == "C") {
      compliment += "G";
    } else if (currentletter == "G") {
      compliment += "C";
    }
  }
  return compliment;
}

// Using map method
function DNAStrand2(dna) {
  const compliments = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  }; 
  return dna.split('').map(letter => compliments[letter]).join('');
}

console.log(DNAStrand("ATTGC"));

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// First attempt 
// function disemvowel(str) {
    // this only works for one letter and not multiple? 
    // return str.split('').filter((c) => c !== 'a' || 'e' | 'i' )

    // const split = [...str].filter((c) => c !== 'a' || 'e' | 'i' )
    // console.log(split);
// }

// Solution 1 
function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return str
      .split('') 
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present
// Anything that isnt present in the vowels = -1. those that are get filtered out
      .filter(el => vowels.indexOf(el.toLowerCase()) == -1)
      .join('');
  }

// Solution 2 
function disemvowel(str) {
    let newStr = ""
    for (i = 0; i < str.length; i++) {
        // make the iterators all lowercase to filter correctly 
        if ("aeiou".includes(str[i].toLowerCase())) continue;
        newStr += str[i];
    }
    return newStr;
}

// Solution 3 (regex)
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}
// console.log(disemvowel('This website is for losers LOL'))



// Note: 
// .split method gives different results with .split('')(no space, iterates through each letter)
// .split(' ') (iterates through each word)

// Found turning strings into array confusing. 
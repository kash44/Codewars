// My attempt - worked on first attempt
function createPhoneNumber(numbers) {
  const string = numbers.join("");
  const first = string.slice(0, 3);
  const second = string.slice(3, 6);
  const third = string.slice(6, 10);
  const template = `"(${first}) ${second}-${third}"`;
  return template;
}
// returns "(123) 456-7890"

// Coding garden - .toString()
function createPhoneNumber(numbers) {
  // a place to store the phone number
  let phoneNumber = "(";
  // append the first three numbers in the array
  phoneNumber +=
    numbers[0].toString() + numbers[1].toString() + numbers[2].toString();
  phoneNumber += ") ";
  // append the next three numbers in the array
  phoneNumber +=
    numbers[3].toString() + numbers[4].toString() + numbers[5].toString();
  phoneNumber += "-";
  // append the last three numbers in the array
  phoneNumber +=
    numbers[6].toString() +
    numbers[7].toString() +
    numbers[8].toString() +
    numbers[9].toString();
  return phoneNumber;
}

// The first thing JS sees is a string so its coerces everything else to a string
function createPhoneNumber(numbers) {
  // a place to store the phone number
  let phoneNumber = "(";
  // append the first three numbers in the array
  phoneNumber += "" + numbers[0] + numbers[1] + numbers[2];
  phoneNumber += ") ";
  // append the next three numbers in the array
  phoneNumber += "" + numbers[3] + numbers[4] + numbers[5];
  phoneNumber += "-";
  // append the last three numbers in the array
  phoneNumber += "" + numbers[6] + numbers[7] + numbers[8] + numbers[9];
  return phoneNumber;
}

// Go over whats happening here
function createPhoneNumber(numbers) {
  const j = (n, b, e) => n.slice(b, e).join("");
  let phoneNumber = `(${j(numbers, 0, 3)}) ${j(numbers, 3, 6)}-${j(numbers, 6)}`;
  return phoneNumber;
}

// Regular expression - [\d]{3} : finds the first 3 digits &  () to group them
function createPhoneNumber(numbers){
    return numbers.join('').replace(/([\d]{3})([\d]{3})([\d]{4})/, '($1) $2-$3')
}



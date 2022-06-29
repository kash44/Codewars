// Write a function, which takes a non-negative integer (seconds) as input
// and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(totalSeconds) {
  // get total hours by dividing seconds by 3600 and drop the remainder
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = (totalSeconds % 3600) - minutes * 60;
  // get total minutes by dividing remainder seconds by 60 and drop the remainder
  // total seconds is the previous remainder

  const padNumber = (number) => {
    let numberString = number.toString();
    if (numberString.length == 1) {
      numberString = "0" + numberString;
    }
    return numberString;
  };

  //append hours, minutes and seconds in a string with a padded 0 if needed
  return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
}

function humanReadable1(totalSeconds) {
  // get total hours by dividing seconds by 3600 and drop the remainder
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds = totalSeconds % 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  // get total minutes by dividing remainder seconds by 60 and drop the remainder
  // total seconds is the previous remainder
  console.log(totalSeconds);

  const padNumber = (number) => number.toString().padStart(2, "0");

  //append hours, minutes and seconds in a string with a padded 0 if needed
  return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
}

console.log(humanReadable1(359999));

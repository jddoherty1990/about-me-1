'use strict'

alert('Welcome! Let\'s play a little guessing game so you can learn more about me.');

// Get user's name and greet them

var username = prompt('My name is Andrew, what\'s yours?');
console.log('Username is: ' + username);
alert('Hi ' + username + '! Let\'s get started!');

/* Question One
Q: Did I grow up in Washington?
A: No (I grew up in Wisconsin) */
var answerOne = prompt('Did I grow up in Washington?').toUpperCase();
console.log(answerOne);
if (answerOne === 'YES' || answerOne === 'Y') {
  alert('Nope! While I have lived here since 2002, I was born and raised in Wisconsin! Go Pack Go!');
  console.log('Question one was answered incorrecty');
} else {
  alert('Correct! I was born and raised in Wisconsin! Go Pack Go!');
  console.log('Question one was answered correctly');
}

/* Question Two
Q: Was I in the military?
A: Yes (I enlisted into the Army) */
var answerTwo = prompt('Was I in the military?').toUpperCase();
console.log(answerTwo);
if (answerTwo === 'YES' || answerTwo === 'Y') {
  alert('Correct! I operated tactical voice and data networks in the Army for six years.');
  console.log('Question one was answered correcty');
} else {
  alert('Incorrect, ' + username + '. I enlisted into the Army in 2000.');
  console.log('Question one was answered incorrectly');
}

/* Question Three
Q: Have I been to Iraq?
A: Yes (2004-2005 and 2005-2006) */
var answerThree = prompt('Have I been to Iraq?').toUpperCase();
console.log(answerThree);
if (answerThree === 'YES' || answerThree === 'Y') {
  alert('Nice work! I spent two years over there.');
  console.log('Question one was answered correcty');
} else {
  alert('Unfortunately, ' + username + ', I was there for two years (04-05 and again from 05-06).');
  console.log('Question one was answered incorrectly');
}

/* Question Four
Q: Is my favorite food chopped liver?
A: NO.*/
var answerFour = prompt('Is my favorite food chopper liver?').toUpperCase();
console.log(answerFour);
if (answerFour === 'YES' || answerFour === 'Y') {
  alert('Come on, ' + username + '... Who likes chopped liver?');
  console.log('Question one was answered incorrecty');
} else {
  alert('100% correct, ' + username + '. I do not like it at all!');
  console.log('Question one was answered correctly');
}

/* Question Five
Q: Have I cycled from Seattle to Portland?
A: Yes, twice for some reason */
var answerFive = prompt('Have I cycled from Seattle to Portland?').toUpperCase();
console.log(answerFive);
if (answerFive === 'YES' || answerFive === 'Y') {
  alert('Nice job, ' + username + '! Over 200 miles!');
  console.log('Question one was answered correcty');
} else {
  alert('Oh ye of little faith ' + username + '! I have! (I even did it again the next year for some reason...)');
  console.log('Question one was answered incorrectly');
}
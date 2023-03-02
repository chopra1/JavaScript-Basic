//Prints
console.log(5); //Prints 5
console.log(26);
console.log(56);

//comments
/*
This is all commented 
console.log(10);
None of this is going to run!
console.log(99);
*/

//Datatypes
console.log('JavaScript');
console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49);

//Arithmedic Operations
console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
console.log(10 + 3.5) //prints 13.5
console.log(2022 - 1969); //prints 53
console.log(65 / 240); //prints 0.27083333333
console.log(12 % 3); // Prints 0
console.log(0.2708 * 100); //prints 27.08
console.log(11 % 3); // Prints 2
console.log(12 % 3); // Prints 0

//String Concatenation
console.log('front ' + 'space'); // Prints 'front space'
console.log('back' + ' space'); // Prints 'back space'
console.log('no' + 'space'); // Prints 'nospace'
console.log('middle' + ' ' + 'space'); // Prints 'middle space'
console.log('One' + ', ' + 'two' + ', ' + 'three!'); // Prints 'One, two, three!'

//properties
console.log('Hello'.length); // Prints 5
console.log('Teaching the world how to code'.length) //prints 30

//methods
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('hello'.toLowerCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
console.log('Codecademy'.toUpperCase()); //prints CODECADEMY
console.log('    Remove whitespace   '.trim()); //prints Remove whitespace 

//comparing strings
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

//String primitives and String objects
const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"


const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns the number 4

//Build in Objects
console.log(Math.random()); // Prints a random number between 0 and 1
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50

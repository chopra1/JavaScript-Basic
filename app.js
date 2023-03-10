//Prints
console.log(5); //Prints 5
console.log(26); //prints 26
console.log(56); //prints 56

//comments
/*
This is all commented 
console.log(10);
None of this is going to run!
console.log(99);
*/

//Outputs
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
console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ".length) // prints 26

//methods
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('hello'.toLowerCase()); // Prints 'hello'
console.log('Hey'.startsWith('H')); // Prints true
console.log('Codecademy'.toUpperCase()); //prints CODECADEMY
console.log('    Remove whitespace   '.trim()); //prints Remove whitespace

//The slice() method takes 2 parameters: start position, and end position (end not included).
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
let pert = text.slice(7);
let prt = text.slice(-12);
console.log(part); //prints: Banana
console.log(pert); //prints: Banana, Kiwi
console.log(prt); ////prints: Banana, Kiwi

//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
let str = "Apple, Banana, Kiwi";
console.log(str.substr(7,6)); //prints: Banana

//replace()
let writen = "Please visit Microsoft!";
let newWriten = writen.replace("Microsoft", "W3Schools");
console.log(newWriten); //prints: Please visit W3Schools!
 
//Property Access
let write = "HELLO WORLD";
console.log(write[0]); //prints: H

//indexOf()
let string = "Please locate where 'locate' occurs!";
console.log(string.indexOf("locate")); //prints: 7
console.log(string.lastIndexOf("locate")); //prints: 21
console.log(string.search("locate")); //prints: 7
console.log(string.match("where")); //prints: 21
console.log(string.includes("locate")); //prints: true
console.log(string.startsWith("locate")); //prints: false
console.log(string.endsWith("locate")); //prints: false

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

//var keyword
var myName = 'Chetan';
console.log(myName); // Output: Chetan

var x = 1;
if (x === 1) {
  var x = 2;
  console.log(x); // Expected output: 2
}
console.log(x);
// Expected output: 2

var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood); //output: piizza
console.log(numOfSlices); //output: 8

//let keyword
let meal = 'bread-butter';
console.log(meal); // Output: bread-butter
meal = 'sandwich';
console.log(meal); // Output: sandwich

//let price (same thing) as they can be defined before initialization
var price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

let changeMe = true;
changeMe = false;
console.log(changeMe); //output: false

//mathematical operators
let w = 4;
w = w + 1; 
console.log(w); // Output: 5

//another way
let v = 4;
v += 1; 
console.log(v); // Output: 5

let a = 4;
a -= 1;
console.log(a); //output: 3 

let b = 4;
b *= 1;
console.log(b); //output: 4

let c = 4;
c /= 1;
console.log(c);  //output: 4

//practical
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11; 
quarterMe /= 4; 

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp);        //output: The value of levelUp: 15
console.log('The value of powerLevel:', powerLevel);  //output: The value of powerLevel: 8901
console.log('The value of multiplyMe:', multiplyMe);  //output: The value of multiplyMe: 352
console.log('The value of quarterMe:', quarterMe);    //output: The value of quarterMe: 288

//increment and decrement operator
let d = 10;
d++;
console.log(d); // Output: 11
let e = 20;
e--;
console.log(e); // Output: 19

let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;
console.log(gainedDollar); //output: 4
console.log(lostDollar); //output: 49

//Operator Precedence
//Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
let i = 100 + 50 * 3;
let j = (100 + 50) * 3;
let k = 100 + 50 - 3;
let l = 100 / 50 + 3;
console.log(i);
console.log(j);
console.log(k);
console.log(l);

//const
const entree = 'Enchiladas';
console.log(entree); //Output: Enchilados;
// entree = 'Tacos'
// const testing;

//String Concatenation with Variables
let myPet = 'dodo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet dodo.'

let favoriteAnimal = 'Squirrel';
console.log('My favorite animal: ' + favoriteAnimal);

//string interpolation
const myArt = 'drawing';
console.log(`I am good in ${myArt}.`);
// Output: I am good in drawing.

const myN = 'Chetan';
const myCity = 'Ahmedabad';
console.log(`My name is ${myN}. My favorite city is ${myCity}.`);

//typeof operator
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable); // Output: string
newVariable = 1;
console.log(typeof newVariable); // Output: number

//ternary operator
var age = 6;
var voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable); //output: Too young

//comparison logical operators
let f = 6;
let g = 3;

console.log((f < 10 && g > 1));
console.log((f < 10 || g < 1))

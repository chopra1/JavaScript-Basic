// how to use the this keyword.
// conveying privacy in JavaScript methods.
// defining getters and setters in objects.
// creating factory functions.
// using destructuring techniques.

const robot = {
    model : '1E78V2',
    _energyLevel : 100,
    provideInfo(){
      return `I am ${this.model} and my current energy level is ${this._energyLevel}.` 
    }, 
    checkEnergy(){
        console.log(`Energy is currently at ${this._energyLevel}%.`)
    },
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    },
    get energyLevel(){
        if(typeof this._energyLevel === 'number') {
          return 'My current energy level is ' + this._energyLevel
        } else {
          return "System malfunction: cannot retrieve energy level"
        }
      },
      _numOfSensors: 15,
      get numOfSensors(){
        if(typeof this._numOfSensors === 'number'){
          return this._numOfSensors;
        } else {
          return 'Sensors are currently down.'
        }
      },
      set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0){
          this._numOfSensors = num;
        } else {
          console.log('Pass in a number that is greater than or equal to 0')
      }
    }
}
  console.log(robot.provideInfo());
  robot.checkEnergy();
  robot._energyLevel = 'high';
  robot.recharge()
  robot.numOfSensors = 100;
  console.log(robot.numOfSensors);


// Factory Functions
const robotFactory = (model, mobile) => {
    return { 
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      } 
    }
  };
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();


//  destructuring technique, called property value shorthand,
//const robotFactory = (model, mobile) => {
//     return {
//        model,
//        mobile,
//       beep() {
//         console.log('Beep Boop');
//       }
//     }
//   }
// To check that the property value shorthand technique worked:
//   const newRobot = robotFactory('P-501', false)
//   console.log(newRobot.model)
//   console.log(newRobot.mobile)


//Destructured Assignment
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  const { functionality } = robot;
  functionality.beep();


//build in object methods
.hasOwnProperty()
.valueOf()

 //Object class method
Object.assign()
Object.entries()
Object.keys()


//use object class method
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);



// Let’s review the concepts covered in this lesson:

// The object that a method belongs to is called the calling object.
// The this keyword refers to the calling object and can be used to access properties of the calling object.
// Methods do not automatically have access to other internal properties of the calling object.
// The value of this depends on where the this is being accessed from.
// We cannot use arrow functions as methods if we want to access other internal properties.
// JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
// The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
// Setters and getter methods allow for more detailed ways of accessing and assigning properties.
// Factory functions allow us to create object instances quickly and repeatedly.
// There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
// As with any concept, it is a good skill to learn how to use the documentation with objects!
// You’re ready to start leveraging more elegant code for creating and accessing objects in your code!

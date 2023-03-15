/*class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
} */

class car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
let myCar1 = new car('ford', 2013);
let myCar2 = new car('maruti', 2010);

console.log(myCar1.name + " " + myCar1.year);
console.log(myCar2.name + " " + myCar2.year);
console.log("My car is " + myCar1.age() + " years old.")

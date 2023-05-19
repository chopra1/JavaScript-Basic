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


//constructor function
function Pen(name, color, price) {
    this.name = name
    this.color = color
    this.price = price
}

const pen1 = new Pen('Marker', 'Blue', '$3')

Pen.prototype.showPrice = function () {
    console.log(`Price of ${this.name} is ${this.price}`)
}
pen1.showPrice()

//class bsed same program
class Pen2 {
    constructor(name, color, price) {
        this.name = name
        this.color = color
        this.price = price
    }

    showPrice() {
        console.log(`Price of ${this.name} is ${this.price}`)
    }
}

const pen2 = new Pen2('Marker', 'Blue', '$3')
pen1.showPrice()

//Chair MAnagement System
class Chair {
    //Defaults that will be common for all the instances:
    static backSupport = true
    static armRests = true

    constructor(
        color,
        seatHeight,
        recliningAngle,
        backSupport,
        headSupport,
        padding,
        armRests,
        seatSize,
        isHeightAdjustable,
        isMovable
    ) {
        this.color = color
        this.seatHeight = seatHeight
        this.recliningAngle = recliningAngle
        this.backSupport = backSupport
        this.headSupport = headSupport
        this.padding = padding
        this.armRests = armRests
        this.seatSize = seatSize
        this.isHeightAdjustable = isHeightAdjustable
        this.isMovable = isMovable
    }

    adjustableHeight() {}
    adjustAngle() {}
    moveChair() {}
}

const newChair = new Chair(
    'Blue',
    '25 inch',
    '20 deg',
    true,
    false,
    '3 inch',
    true,
    '16 inch',
    false,
    false
)

console.dir('Chair Prototype', Chair)
console.log('Chair Object', newChair)

class OfficeChair extends Chair {
    constructor(color, isHeightAdjustable, seatHeight, recliningAngle) {
        super()
        this.type = 'Office Chair'
        this.color = color
        this.isHeightAdjustable = isHeightAdjustable
        this.seatHeight = seatHeight
        this.recliningAngle = recliningAngle
        this.isMovable = true
    }

    adjustableHeight(height) {
        if (height > this.seatHeight) {
            console.log(`Chair height changed to ${height}`)
        } else {
            console.log(
                `Height cannot be decreased more than the seat height ${this.seatHeight}`
            )
        }
    }

    adjustAngle(angle) {
        if (angle >= this.recliningAngle) {
            console.log(`Chair angle changed to ${angle}`)
        } else {
            console.log(
                `Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`
            )
        }
    }

    moveChair(x, y) {
        console.log(`Chair moved to co-ordinates = (${x}, ${y})`)
    }
}

const newOfficeChair = new OfficeChair('Red', true, 30, 30)

console.log(newOfficeChair.adjustableHeight(31))
console.log(newOfficeChair.adjustAngle(40))
console.log(newOfficeChair.moveChair(10, 20))

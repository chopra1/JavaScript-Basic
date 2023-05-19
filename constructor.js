//constructor function for user object with parameters

function User(name, age) {
    this.name = name
    this.age = age
}
//create 2 user object
let user1 = new User('Bob', 12)
let user2 = new User('Bunny', 34)

//properties and method can be added to a constructor using "prototype"
User.prototype.religion = 'British'
//another way
user2.nationality = 'England'

console.log(user1)
console.log('USER 2 religion is ' + user2.religion ? user2.religion : '-')
console.log("Bob's age is: " + user1.age)
console.log(
    'user2 nationality is: ' + user2.nationality ? user2.nationality : '-'
)
console.log(user1.hobby ? user1.hoby : '-')

//add a details method to user1 object
user1.details = function () {
    return 'user1 name is ' + this.name + ' and user1 age is ' + this.age
}

console.log(user1.details())

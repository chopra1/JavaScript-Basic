//SYNTAX
//let func = (arg1, arg2, ..., argN) => expression;

/* () => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}

(a, b, ...r) => expression
(a = 400, b = 20, c) => expression
([a, b] = [10, 20]) => expression
({ a, b } = { a: 10, b: 20 }) => expression

async param => expression
async (param1, param2, ...paramN) => {
  statements
}
 */

let sum = (a, b) => a + b
console.log(sum(5, 5))

let multi = (x) => x * 5
console.log(multi(5))

let greet = () => console.log('Hello, How are you sir?')
greet()

//Convert raditional function into arrow function
const a = 10
const b = 20

function test() {
    return a + b + 100
}
console.log(test())

let check = () => a + b + 100
console.log(check())
//done

const func = () => ({ foo: 1 })
//To fix this, wrap the object literal in parentheses:

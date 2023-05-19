// requirement
// 1 function definition
// 2 base condition
// 3 recursive call

function doSomething(n) {
    //function definition
    if (n === 0) {
        console.log('Task Completed!')
        return
    } //base condition
    console.log('I am doing something')
    doSomething(n - 1) //recursive call
}
doSomething(3) //function call

//example 2 - Find the factorial of a number

function findFactorial(n) {
    if (n === 0) {
        return 1
    }
    let factorial = n * findFactorial(n - 1)
    return factorial
}
findFactorial(5)
console.log(findFactorial(4)) //output: 24

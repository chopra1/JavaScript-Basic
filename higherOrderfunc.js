const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//functionfor displaying only odd numbers from array
function filterOdd(arr) {
    const filteredArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}
//filterOdd(arr)
console.log(filterOdd(arr)) //[ 1, 3, 5, 7, 9, 11 ]

//function for displaying only even numbers from array.
function filterEven(arr) {
    const filteredArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}
console.log(filterEven(arr)) //[ 2, 4, 6, 8, 10 ]

//get even and odd numbers both using hogher order function.
function filter(arr, callback) {
    const filteredArray = []
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]) ? filteredArray.push(arr[i]) : null
    }
    return filteredArray
}

function isOdd(x) {
    return x % 2 !== 0
}

function isEven(x) {
    return x % 2 == 0
}

function isGrtThan5(x) {
    return x > 5
}

filter(arr, isOdd)
console.log(filter(arr, isOdd)) //[ 1, 3, 5, 7, 9, 11 ]

filter(arr, isEven)
console.log(filter(arr, isEven)) //[ 2, 4, 6, 8, 10 ]

filter(arr, isGrtThan5)
console.log(filter(arr, isGrtThan5)) //[ 6, 7, 8, 9, 10, 11 ]
